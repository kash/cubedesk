import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageWhereUniqueInputObjectSchema as TopAverageWhereUniqueInputObjectSchema } from './TopAverageWhereUniqueInput.schema';
import { TopAverageUpdateWithoutSolve_4InputObjectSchema as TopAverageUpdateWithoutSolve_4InputObjectSchema } from './TopAverageUpdateWithoutSolve_4Input.schema';
import { TopAverageUncheckedUpdateWithoutSolve_4InputObjectSchema as TopAverageUncheckedUpdateWithoutSolve_4InputObjectSchema } from './TopAverageUncheckedUpdateWithoutSolve_4Input.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopAverageWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TopAverageUpdateWithoutSolve_4InputObjectSchema), z.lazy(() => TopAverageUncheckedUpdateWithoutSolve_4InputObjectSchema)])
}).strict();
export const TopAverageUpdateWithWhereUniqueWithoutSolve_4InputObjectSchema: z.ZodType<Prisma.TopAverageUpdateWithWhereUniqueWithoutSolve_4Input> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageUpdateWithWhereUniqueWithoutSolve_4Input>;
export const TopAverageUpdateWithWhereUniqueWithoutSolve_4InputObjectZodSchema = makeSchema();
