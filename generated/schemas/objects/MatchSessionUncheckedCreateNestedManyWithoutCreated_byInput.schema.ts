import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchSessionCreateWithoutCreated_byInputObjectSchema as MatchSessionCreateWithoutCreated_byInputObjectSchema } from './MatchSessionCreateWithoutCreated_byInput.schema';
import { MatchSessionUncheckedCreateWithoutCreated_byInputObjectSchema as MatchSessionUncheckedCreateWithoutCreated_byInputObjectSchema } from './MatchSessionUncheckedCreateWithoutCreated_byInput.schema';
import { MatchSessionCreateOrConnectWithoutCreated_byInputObjectSchema as MatchSessionCreateOrConnectWithoutCreated_byInputObjectSchema } from './MatchSessionCreateOrConnectWithoutCreated_byInput.schema';
import { MatchSessionCreateManyCreated_byInputEnvelopeObjectSchema as MatchSessionCreateManyCreated_byInputEnvelopeObjectSchema } from './MatchSessionCreateManyCreated_byInputEnvelope.schema';
import { MatchSessionWhereUniqueInputObjectSchema as MatchSessionWhereUniqueInputObjectSchema } from './MatchSessionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MatchSessionCreateWithoutCreated_byInputObjectSchema), z.lazy(() => MatchSessionCreateWithoutCreated_byInputObjectSchema).array(), z.lazy(() => MatchSessionUncheckedCreateWithoutCreated_byInputObjectSchema), z.lazy(() => MatchSessionUncheckedCreateWithoutCreated_byInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MatchSessionCreateOrConnectWithoutCreated_byInputObjectSchema), z.lazy(() => MatchSessionCreateOrConnectWithoutCreated_byInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MatchSessionCreateManyCreated_byInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => MatchSessionWhereUniqueInputObjectSchema), z.lazy(() => MatchSessionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const MatchSessionUncheckedCreateNestedManyWithoutCreated_byInputObjectSchema: z.ZodType<Prisma.MatchSessionUncheckedCreateNestedManyWithoutCreated_byInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionUncheckedCreateNestedManyWithoutCreated_byInput>;
export const MatchSessionUncheckedCreateNestedManyWithoutCreated_byInputObjectZodSchema = makeSchema();
