import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const SolveMethodStepWhereUniqueInputObjectSchema: z.ZodType<Prisma.SolveMethodStepWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveMethodStepWhereUniqueInput>;
export const SolveMethodStepWhereUniqueInputObjectZodSchema = makeSchema();
