import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  share_code: z.string().optional()
}).strict();
export const SolveWhereUniqueInputObjectSchema: z.ZodType<Prisma.SolveWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveWhereUniqueInput>;
export const SolveWhereUniqueInputObjectZodSchema = makeSchema();
