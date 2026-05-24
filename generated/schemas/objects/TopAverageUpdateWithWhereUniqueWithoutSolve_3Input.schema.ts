import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageWhereUniqueInputObjectSchema as TopAverageWhereUniqueInputObjectSchema } from './TopAverageWhereUniqueInput.schema';
import { TopAverageUpdateWithoutSolve_3InputObjectSchema as TopAverageUpdateWithoutSolve_3InputObjectSchema } from './TopAverageUpdateWithoutSolve_3Input.schema';
import { TopAverageUncheckedUpdateWithoutSolve_3InputObjectSchema as TopAverageUncheckedUpdateWithoutSolve_3InputObjectSchema } from './TopAverageUncheckedUpdateWithoutSolve_3Input.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopAverageWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TopAverageUpdateWithoutSolve_3InputObjectSchema), z.lazy(() => TopAverageUncheckedUpdateWithoutSolve_3InputObjectSchema)])
}).strict();
export const TopAverageUpdateWithWhereUniqueWithoutSolve_3InputObjectSchema: z.ZodType<Prisma.TopAverageUpdateWithWhereUniqueWithoutSolve_3Input> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageUpdateWithWhereUniqueWithoutSolve_3Input>;
export const TopAverageUpdateWithWhereUniqueWithoutSolve_3InputObjectZodSchema = makeSchema();
