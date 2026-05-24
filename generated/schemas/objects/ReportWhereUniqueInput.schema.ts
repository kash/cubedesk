import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const ReportWhereUniqueInputObjectSchema: z.ZodType<Prisma.ReportWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportWhereUniqueInput>;
export const ReportWhereUniqueInputObjectZodSchema = makeSchema();
