import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopSolveWhereInputObjectSchema as TopSolveWhereInputObjectSchema } from './TopSolveWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopSolveWhereInputObjectSchema).optional()
}).strict();
export const SolveCountOutputTypeCountTopSolveArgsObjectSchema = makeSchema();
export const SolveCountOutputTypeCountTopSolveArgsObjectZodSchema = makeSchema();
