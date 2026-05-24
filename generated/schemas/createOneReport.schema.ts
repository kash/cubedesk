import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ReportSelectObjectSchema as ReportSelectObjectSchema } from './objects/ReportSelect.schema';
import { ReportIncludeObjectSchema as ReportIncludeObjectSchema } from './objects/ReportInclude.schema';
import { ReportCreateInputObjectSchema as ReportCreateInputObjectSchema } from './objects/ReportCreateInput.schema';
import { ReportUncheckedCreateInputObjectSchema as ReportUncheckedCreateInputObjectSchema } from './objects/ReportUncheckedCreateInput.schema';

export const ReportCreateOneSchema: z.ZodType<Prisma.ReportCreateArgs> = z.object({ select: ReportSelectObjectSchema.optional(), include: ReportIncludeObjectSchema.optional(), data: z.union([ReportCreateInputObjectSchema, ReportUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ReportCreateArgs>;

export const ReportCreateOneZodSchema = z.object({ select: ReportSelectObjectSchema.optional(), include: ReportIncludeObjectSchema.optional(), data: z.union([ReportCreateInputObjectSchema, ReportUncheckedCreateInputObjectSchema]) }).strict();