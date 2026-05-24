import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema';
import { SolveUpdateWithoutMatchInputObjectSchema as SolveUpdateWithoutMatchInputObjectSchema } from './SolveUpdateWithoutMatchInput.schema';
import { SolveUncheckedUpdateWithoutMatchInputObjectSchema as SolveUncheckedUpdateWithoutMatchInputObjectSchema } from './SolveUncheckedUpdateWithoutMatchInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SolveUpdateWithoutMatchInputObjectSchema), z.lazy(() => SolveUncheckedUpdateWithoutMatchInputObjectSchema)])
}).strict();
export const SolveUpdateWithWhereUniqueWithoutMatchInputObjectSchema: z.ZodType<Prisma.SolveUpdateWithWhereUniqueWithoutMatchInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpdateWithWhereUniqueWithoutMatchInput>;
export const SolveUpdateWithWhereUniqueWithoutMatchInputObjectZodSchema = makeSchema();
