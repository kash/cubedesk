import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ReportSelectObjectSchema as ReportSelectObjectSchema } from './objects/ReportSelect.schema';
import { ReportIncludeObjectSchema as ReportIncludeObjectSchema } from './objects/ReportInclude.schema';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './objects/ReportWhereUniqueInput.schema';

export const ReportFindUniqueSchema: z.ZodType<Prisma.ReportFindUniqueArgs> = z.object({ select: ReportSelectObjectSchema.optional(), include: ReportIncludeObjectSchema.optional(), where: ReportWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ReportFindUniqueArgs>;

export const ReportFindUniqueZodSchema = z.object({ select: ReportSelectObjectSchema.optional(), include: ReportIncludeObjectSchema.optional(), where: ReportWhereUniqueInputObjectSchema }).strict();