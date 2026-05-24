import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const MetricLogWhereUniqueInputObjectSchema: z.ZodType<Prisma.MetricLogWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.MetricLogWhereUniqueInput>;
export const MetricLogWhereUniqueInputObjectZodSchema = makeSchema();
