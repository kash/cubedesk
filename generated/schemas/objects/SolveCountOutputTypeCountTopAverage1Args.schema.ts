import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageWhereInputObjectSchema as TopAverageWhereInputObjectSchema } from './TopAverageWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopAverageWhereInputObjectSchema).optional()
}).strict();
export const SolveCountOutputTypeCountTopAverage1ArgsObjectSchema = makeSchema();
export const SolveCountOutputTypeCountTopAverage1ArgsObjectZodSchema = makeSchema();
