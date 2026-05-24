import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopSolveWhereUniqueInputObjectSchema as TopSolveWhereUniqueInputObjectSchema } from './TopSolveWhereUniqueInput.schema';
import { TopSolveUpdateWithoutUserInputObjectSchema as TopSolveUpdateWithoutUserInputObjectSchema } from './TopSolveUpdateWithoutUserInput.schema';
import { TopSolveUncheckedUpdateWithoutUserInputObjectSchema as TopSolveUncheckedUpdateWithoutUserInputObjectSchema } from './TopSolveUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopSolveWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TopSolveUpdateWithoutUserInputObjectSchema), z.lazy(() => TopSolveUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const TopSolveUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.TopSolveUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TopSolveUpdateWithWhereUniqueWithoutUserInput>;
export const TopSolveUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
