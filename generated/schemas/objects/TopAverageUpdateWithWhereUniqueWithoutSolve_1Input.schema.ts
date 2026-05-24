import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageWhereUniqueInputObjectSchema as TopAverageWhereUniqueInputObjectSchema } from './TopAverageWhereUniqueInput.schema';
import { TopAverageUpdateWithoutSolve_1InputObjectSchema as TopAverageUpdateWithoutSolve_1InputObjectSchema } from './TopAverageUpdateWithoutSolve_1Input.schema';
import { TopAverageUncheckedUpdateWithoutSolve_1InputObjectSchema as TopAverageUncheckedUpdateWithoutSolve_1InputObjectSchema } from './TopAverageUncheckedUpdateWithoutSolve_1Input.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopAverageWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TopAverageUpdateWithoutSolve_1InputObjectSchema), z.lazy(() => TopAverageUncheckedUpdateWithoutSolve_1InputObjectSchema)])
}).strict();
export const TopAverageUpdateWithWhereUniqueWithoutSolve_1InputObjectSchema: z.ZodType<Prisma.TopAverageUpdateWithWhereUniqueWithoutSolve_1Input> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageUpdateWithWhereUniqueWithoutSolve_1Input>;
export const TopAverageUpdateWithWhereUniqueWithoutSolve_1InputObjectZodSchema = makeSchema();
