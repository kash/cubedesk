import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const DemoSolveWhereUniqueInputObjectSchema: z.ZodType<Prisma.DemoSolveWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.DemoSolveWhereUniqueInput>;
export const DemoSolveWhereUniqueInputObjectZodSchema = makeSchema();
