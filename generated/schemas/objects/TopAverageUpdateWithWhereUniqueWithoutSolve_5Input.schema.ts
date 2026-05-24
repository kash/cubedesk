import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageWhereUniqueInputObjectSchema as TopAverageWhereUniqueInputObjectSchema } from './TopAverageWhereUniqueInput.schema';
import { TopAverageUpdateWithoutSolve_5InputObjectSchema as TopAverageUpdateWithoutSolve_5InputObjectSchema } from './TopAverageUpdateWithoutSolve_5Input.schema';
import { TopAverageUncheckedUpdateWithoutSolve_5InputObjectSchema as TopAverageUncheckedUpdateWithoutSolve_5InputObjectSchema } from './TopAverageUncheckedUpdateWithoutSolve_5Input.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopAverageWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TopAverageUpdateWithoutSolve_5InputObjectSchema), z.lazy(() => TopAverageUncheckedUpdateWithoutSolve_5InputObjectSchema)])
}).strict();
export const TopAverageUpdateWithWhereUniqueWithoutSolve_5InputObjectSchema: z.ZodType<Prisma.TopAverageUpdateWithWhereUniqueWithoutSolve_5Input> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageUpdateWithWhereUniqueWithoutSolve_5Input>;
export const TopAverageUpdateWithWhereUniqueWithoutSolve_5InputObjectZodSchema = makeSchema();
