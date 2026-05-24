import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ReportSelectObjectSchema as ReportSelectObjectSchema } from './objects/ReportSelect.schema';
import { ReportIncludeObjectSchema as ReportIncludeObjectSchema } from './objects/ReportInclude.schema';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './objects/ReportWhereUniqueInput.schema';

export const ReportFindUniqueOrThrowSchema: z.ZodType<Prisma.ReportFindUniqueOrThrowArgs> = z.object({ select: ReportSelectObjectSchema.optional(), include: ReportIncludeObjectSchema.optional(), where: ReportWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ReportFindUniqueOrThrowArgs>;

export const ReportFindUniqueOrThrowZodSchema = z.object({ select: ReportSelectObjectSchema.optional(), include: ReportIncludeObjectSchema.optional(), where: ReportWhereUniqueInputObjectSchema }).strict();