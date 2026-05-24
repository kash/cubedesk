import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageWhereUniqueInputObjectSchema as TopAverageWhereUniqueInputObjectSchema } from './TopAverageWhereUniqueInput.schema';
import { TopAverageUpdateWithoutSolve_2InputObjectSchema as TopAverageUpdateWithoutSolve_2InputObjectSchema } from './TopAverageUpdateWithoutSolve_2Input.schema';
import { TopAverageUncheckedUpdateWithoutSolve_2InputObjectSchema as TopAverageUncheckedUpdateWithoutSolve_2InputObjectSchema } from './TopAverageUncheckedUpdateWithoutSolve_2Input.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopAverageWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TopAverageUpdateWithoutSolve_2InputObjectSchema), z.lazy(() => TopAverageUncheckedUpdateWithoutSolve_2InputObjectSchema)])
}).strict();
export const TopAverageUpdateWithWhereUniqueWithoutSolve_2InputObjectSchema: z.ZodType<Prisma.TopAverageUpdateWithWhereUniqueWithoutSolve_2Input> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageUpdateWithWhereUniqueWithoutSolve_2Input>;
export const TopAverageUpdateWithWhereUniqueWithoutSolve_2InputObjectZodSchema = makeSchema();
