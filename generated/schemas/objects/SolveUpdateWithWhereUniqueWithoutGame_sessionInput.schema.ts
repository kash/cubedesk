import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema';
import { SolveUpdateWithoutGame_sessionInputObjectSchema as SolveUpdateWithoutGame_sessionInputObjectSchema } from './SolveUpdateWithoutGame_sessionInput.schema';
import { SolveUncheckedUpdateWithoutGame_sessionInputObjectSchema as SolveUncheckedUpdateWithoutGame_sessionInputObjectSchema } from './SolveUncheckedUpdateWithoutGame_sessionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SolveUpdateWithoutGame_sessionInputObjectSchema), z.lazy(() => SolveUncheckedUpdateWithoutGame_sessionInputObjectSchema)])
}).strict();
export const SolveUpdateWithWhereUniqueWithoutGame_sessionInputObjectSchema: z.ZodType<Prisma.SolveUpdateWithWhereUniqueWithoutGame_sessionInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpdateWithWhereUniqueWithoutGame_sessionInput>;
export const SolveUpdateWithWhereUniqueWithoutGame_sessionInputObjectZodSchema = makeSchema();
