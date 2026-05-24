import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopSolveCreateWithoutSolveInputObjectSchema as TopSolveCreateWithoutSolveInputObjectSchema } from './TopSolveCreateWithoutSolveInput.schema';
import { TopSolveUncheckedCreateWithoutSolveInputObjectSchema as TopSolveUncheckedCreateWithoutSolveInputObjectSchema } from './TopSolveUncheckedCreateWithoutSolveInput.schema';
import { TopSolveCreateOrConnectWithoutSolveInputObjectSchema as TopSolveCreateOrConnectWithoutSolveInputObjectSchema } from './TopSolveCreateOrConnectWithoutSolveInput.schema';
import { TopSolveCreateManySolveInputEnvelopeObjectSchema as TopSolveCreateManySolveInputEnvelopeObjectSchema } from './TopSolveCreateManySolveInputEnvelope.schema';
import { TopSolveWhereUniqueInputObjectSchema as TopSolveWhereUniqueInputObjectSchema } from './TopSolveWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TopSolveCreateWithoutSolveInputObjectSchema), z.lazy(() => TopSolveCreateWithoutSolveInputObjectSchema).array(), z.lazy(() => TopSolveUncheckedCreateWithoutSolveInputObjectSchema), z.lazy(() => TopSolveUncheckedCreateWithoutSolveInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TopSolveCreateOrConnectWithoutSolveInputObjectSchema), z.lazy(() => TopSolveCreateOrConnectWithoutSolveInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TopSolveCreateManySolveInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TopSolveWhereUniqueInputObjectSchema), z.lazy(() => TopSolveWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TopSolveCreateNestedManyWithoutSolveInputObjectSchema: z.ZodType<Prisma.TopSolveCreateNestedManyWithoutSolveInput> = makeSchema() as unknown as z.ZodType<Prisma.TopSolveCreateNestedManyWithoutSolveInput>;
export const TopSolveCreateNestedManyWithoutSolveInputObjectZodSchema = makeSchema();
