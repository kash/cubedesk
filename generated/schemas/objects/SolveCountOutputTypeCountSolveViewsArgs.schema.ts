import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveViewWhereInputObjectSchema as SolveViewWhereInputObjectSchema } from './SolveViewWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveViewWhereInputObjectSchema).optional()
}).strict();
export const SolveCountOutputTypeCountSolveViewsArgsObjectSchema = makeSchema();
export const SolveCountOutputTypeCountSolveViewsArgsObjectZodSchema = makeSchema();
