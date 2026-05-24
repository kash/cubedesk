import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const TopAverageWhereUniqueInputObjectSchema: z.ZodType<Prisma.TopAverageWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageWhereUniqueInput>;
export const TopAverageWhereUniqueInputObjectZodSchema = makeSchema();
