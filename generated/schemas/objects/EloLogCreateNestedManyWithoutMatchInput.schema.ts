import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloLogCreateWithoutMatchInputObjectSchema as EloLogCreateWithoutMatchInputObjectSchema } from './EloLogCreateWithoutMatchInput.schema';
import { EloLogUncheckedCreateWithoutMatchInputObjectSchema as EloLogUncheckedCreateWithoutMatchInputObjectSchema } from './EloLogUncheckedCreateWithoutMatchInput.schema';
import { EloLogCreateOrConnectWithoutMatchInputObjectSchema as EloLogCreateOrConnectWithoutMatchInputObjectSchema } from './EloLogCreateOrConnectWithoutMatchInput.schema';
import { EloLogCreateManyMatchInputEnvelopeObjectSchema as EloLogCreateManyMatchInputEnvelopeObjectSchema } from './EloLogCreateManyMatchInputEnvelope.schema';
import { EloLogWhereUniqueInputObjectSchema as EloLogWhereUniqueInputObjectSchema } from './EloLogWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EloLogCreateWithoutMatchInputObjectSchema), z.lazy(() => EloLogCreateWithoutMatchInputObjectSchema).array(), z.lazy(() => EloLogUncheckedCreateWithoutMatchInputObjectSchema), z.lazy(() => EloLogUncheckedCreateWithoutMatchInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => EloLogCreateOrConnectWithoutMatchInputObjectSchema), z.lazy(() => EloLogCreateOrConnectWithoutMatchInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => EloLogCreateManyMatchInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => EloLogWhereUniqueInputObjectSchema), z.lazy(() => EloLogWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const EloLogCreateNestedManyWithoutMatchInputObjectSchema: z.ZodType<Prisma.EloLogCreateNestedManyWithoutMatchInput> = makeSchema() as unknown as z.ZodType<Prisma.EloLogCreateNestedManyWithoutMatchInput>;
export const EloLogCreateNestedManyWithoutMatchInputObjectZodSchema = makeSchema();
