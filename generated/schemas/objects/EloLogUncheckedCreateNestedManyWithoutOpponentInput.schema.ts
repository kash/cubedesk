import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloLogCreateWithoutOpponentInputObjectSchema as EloLogCreateWithoutOpponentInputObjectSchema } from './EloLogCreateWithoutOpponentInput.schema';
import { EloLogUncheckedCreateWithoutOpponentInputObjectSchema as EloLogUncheckedCreateWithoutOpponentInputObjectSchema } from './EloLogUncheckedCreateWithoutOpponentInput.schema';
import { EloLogCreateOrConnectWithoutOpponentInputObjectSchema as EloLogCreateOrConnectWithoutOpponentInputObjectSchema } from './EloLogCreateOrConnectWithoutOpponentInput.schema';
import { EloLogCreateManyOpponentInputEnvelopeObjectSchema as EloLogCreateManyOpponentInputEnvelopeObjectSchema } from './EloLogCreateManyOpponentInputEnvelope.schema';
import { EloLogWhereUniqueInputObjectSchema as EloLogWhereUniqueInputObjectSchema } from './EloLogWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EloLogCreateWithoutOpponentInputObjectSchema), z.lazy(() => EloLogCreateWithoutOpponentInputObjectSchema).array(), z.lazy(() => EloLogUncheckedCreateWithoutOpponentInputObjectSchema), z.lazy(() => EloLogUncheckedCreateWithoutOpponentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => EloLogCreateOrConnectWithoutOpponentInputObjectSchema), z.lazy(() => EloLogCreateOrConnectWithoutOpponentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => EloLogCreateManyOpponentInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => EloLogWhereUniqueInputObjectSchema), z.lazy(() => EloLogWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const EloLogUncheckedCreateNestedManyWithoutOpponentInputObjectSchema: z.ZodType<Prisma.EloLogUncheckedCreateNestedManyWithoutOpponentInput> = makeSchema() as unknown as z.ZodType<Prisma.EloLogUncheckedCreateNestedManyWithoutOpponentInput>;
export const EloLogUncheckedCreateNestedManyWithoutOpponentInputObjectZodSchema = makeSchema();
