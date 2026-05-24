import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const SolveViewWhereUniqueInputObjectSchema: z.ZodType<Prisma.SolveViewWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveViewWhereUniqueInput>;
export const SolveViewWhereUniqueInputObjectZodSchema = makeSchema();
