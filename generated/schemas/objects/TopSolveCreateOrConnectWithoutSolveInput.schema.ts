import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopSolveWhereUniqueInputObjectSchema as TopSolveWhereUniqueInputObjectSchema } from './TopSolveWhereUniqueInput.schema';
import { TopSolveCreateWithoutSolveInputObjectSchema as TopSolveCreateWithoutSolveInputObjectSchema } from './TopSolveCreateWithoutSolveInput.schema';
import { TopSolveUncheckedCreateWithoutSolveInputObjectSchema as TopSolveUncheckedCreateWithoutSolveInputObjectSchema } from './TopSolveUncheckedCreateWithoutSolveInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopSolveWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TopSolveCreateWithoutSolveInputObjectSchema), z.lazy(() => TopSolveUncheckedCreateWithoutSolveInputObjectSchema)])
}).strict();
export const TopSolveCreateOrConnectWithoutSolveInputObjectSchema: z.ZodType<Prisma.TopSolveCreateOrConnectWithoutSolveInput> = makeSchema() as unknown as z.ZodType<Prisma.TopSolveCreateOrConnectWithoutSolveInput>;
export const TopSolveCreateOrConnectWithoutSolveInputObjectZodSchema = makeSchema();
