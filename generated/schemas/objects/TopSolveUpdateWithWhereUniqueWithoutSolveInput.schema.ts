import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopSolveWhereUniqueInputObjectSchema as TopSolveWhereUniqueInputObjectSchema } from './TopSolveWhereUniqueInput.schema';
import { TopSolveUpdateWithoutSolveInputObjectSchema as TopSolveUpdateWithoutSolveInputObjectSchema } from './TopSolveUpdateWithoutSolveInput.schema';
import { TopSolveUncheckedUpdateWithoutSolveInputObjectSchema as TopSolveUncheckedUpdateWithoutSolveInputObjectSchema } from './TopSolveUncheckedUpdateWithoutSolveInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopSolveWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TopSolveUpdateWithoutSolveInputObjectSchema), z.lazy(() => TopSolveUncheckedUpdateWithoutSolveInputObjectSchema)])
}).strict();
export const TopSolveUpdateWithWhereUniqueWithoutSolveInputObjectSchema: z.ZodType<Prisma.TopSolveUpdateWithWhereUniqueWithoutSolveInput> = makeSchema() as unknown as z.ZodType<Prisma.TopSolveUpdateWithWhereUniqueWithoutSolveInput>;
export const TopSolveUpdateWithWhereUniqueWithoutSolveInputObjectZodSchema = makeSchema();
