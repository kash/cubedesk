import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveWhereInputObjectSchema as SolveWhereInputObjectSchema } from './SolveWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveWhereInputObjectSchema).optional()
}).strict();
export const SessionCountOutputTypeCountSolvesArgsObjectSchema = makeSchema();
export const SessionCountOutputTypeCountSolvesArgsObjectZodSchema = makeSchema();
