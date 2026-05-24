import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ReportSelectObjectSchema as ReportSelectObjectSchema } from './objects/ReportSelect.schema';
import { ReportCreateManyInputObjectSchema as ReportCreateManyInputObjectSchema } from './objects/ReportCreateManyInput.schema';

export const ReportCreateManyAndReturnSchema: z.ZodType<Prisma.ReportCreateManyAndReturnArgs> = z.object({ select: ReportSelectObjectSchema.optional(), data: z.union([ ReportCreateManyInputObjectSchema, z.array(ReportCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ReportCreateManyAndReturnArgs>;

export const ReportCreateManyAndReturnZodSchema = z.object({ select: ReportSelectObjectSchema.optional(), data: z.union([ ReportCreateManyInputObjectSchema, z.array(ReportCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();