import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloLogCreateWithoutPlayerInputObjectSchema as EloLogCreateWithoutPlayerInputObjectSchema } from './EloLogCreateWithoutPlayerInput.schema';
import { EloLogUncheckedCreateWithoutPlayerInputObjectSchema as EloLogUncheckedCreateWithoutPlayerInputObjectSchema } from './EloLogUncheckedCreateWithoutPlayerInput.schema';
import { EloLogCreateOrConnectWithoutPlayerInputObjectSchema as EloLogCreateOrConnectWithoutPlayerInputObjectSchema } from './EloLogCreateOrConnectWithoutPlayerInput.schema';
import { EloLogCreateManyPlayerInputEnvelopeObjectSchema as EloLogCreateManyPlayerInputEnvelopeObjectSchema } from './EloLogCreateManyPlayerInputEnvelope.schema';
import { EloLogWhereUniqueInputObjectSchema as EloLogWhereUniqueInputObjectSchema } from './EloLogWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EloLogCreateWithoutPlayerInputObjectSchema), z.lazy(() => EloLogCreateWithoutPlayerInputObjectSchema).array(), z.lazy(() => EloLogUncheckedCreateWithoutPlayerInputObjectSchema), z.lazy(() => EloLogUncheckedCreateWithoutPlayerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => EloLogCreateOrConnectWithoutPlayerInputObjectSchema), z.lazy(() => EloLogCreateOrConnectWithoutPlayerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => EloLogCreateManyPlayerInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => EloLogWhereUniqueInputObjectSchema), z.lazy(() => EloLogWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const EloLogCreateNestedManyWithoutPlayerInputObjectSchema: z.ZodType<Prisma.EloLogCreateNestedManyWithoutPlayerInput> = makeSchema() as unknown as z.ZodType<Prisma.EloLogCreateNestedManyWithoutPlayerInput>;
export const EloLogCreateNestedManyWithoutPlayerInputObjectZodSchema = makeSchema();
