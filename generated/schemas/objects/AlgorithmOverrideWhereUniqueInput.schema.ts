import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const AlgorithmOverrideWhereUniqueInputObjectSchema: z.ZodType<Prisma.AlgorithmOverrideWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.AlgorithmOverrideWhereUniqueInput>;
export const AlgorithmOverrideWhereUniqueInputObjectZodSchema = makeSchema();
