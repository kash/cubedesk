import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveMethodStepWhereInputObjectSchema as SolveMethodStepWhereInputObjectSchema } from './SolveMethodStepWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveMethodStepWhereInputObjectSchema).optional()
}).strict();
export const SolveCountOutputTypeCountSolveMethodStepsArgsObjectSchema = makeSchema();
export const SolveCountOutputTypeCountSolveMethodStepsArgsObjectZodSchema = makeSchema();
