import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ReportCreateManyInputObjectSchema as ReportCreateManyInputObjectSchema } from './objects/ReportCreateManyInput.schema';

export const ReportCreateManySchema: z.ZodType<Prisma.ReportCreateManyArgs> = z.object({ data: z.union([ ReportCreateManyInputObjectSchema, z.array(ReportCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ReportCreateManyArgs>;

export const ReportCreateManyZodSchema = z.object({ data: z.union([ ReportCreateManyInputObjectSchema, z.array(ReportCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();