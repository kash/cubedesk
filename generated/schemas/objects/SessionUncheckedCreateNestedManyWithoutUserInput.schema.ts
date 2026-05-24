import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SessionCreateWithoutUserInputObjectSchema as SessionCreateWithoutUserInputObjectSchema } from './SessionCreateWithoutUserInput.schema';
import { SessionUncheckedCreateWithoutUserInputObjectSchema as SessionUncheckedCreateWithoutUserInputObjectSchema } from './SessionUncheckedCreateWithoutUserInput.schema';
import { SessionCreateOrConnectWithoutUserInputObjectSchema as SessionCreateOrConnectWithoutUserInputObjectSchema } from './SessionCreateOrConnectWithoutUserInput.schema';
import { SessionCreateManyUserInputEnvelopeObjectSchema as SessionCreateManyUserInputEnvelopeObjectSchema } from './SessionCreateManyUserInputEnvelope.schema';
import { SessionWhereUniqueInputObjectSchema as SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SessionCreateWithoutUserInputObjectSchema), z.lazy(() => SessionCreateWithoutUserInputObjectSchema).array(), z.lazy(() => SessionUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => SessionUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SessionCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => SessionCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SessionWhereUniqueInputObjectSchema), z.lazy(() => SessionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.SessionUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionUncheckedCreateNestedManyWithoutUserInput>;
export const SessionUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
