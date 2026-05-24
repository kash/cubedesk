import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ReportSelectObjectSchema as ReportSelectObjectSchema } from './objects/ReportSelect.schema';
import { ReportIncludeObjectSchema as ReportIncludeObjectSchema } from './objects/ReportInclude.schema';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './objects/ReportWhereUniqueInput.schema';
import { ReportCreateInputObjectSchema as ReportCreateInputObjectSchema } from './objects/ReportCreateInput.schema';
import { ReportUncheckedCreateInputObjectSchema as ReportUncheckedCreateInputObjectSchema } from './objects/ReportUncheckedCreateInput.schema';
import { ReportUpdateInputObjectSchema as ReportUpdateInputObjectSchema } from './objects/ReportUpdateInput.schema';
import { ReportUncheckedUpdateInputObjectSchema as ReportUncheckedUpdateInputObjectSchema } from './objects/ReportUncheckedUpdateInput.schema';

export const ReportUpsertOneSchema: z.ZodType<Prisma.ReportUpsertArgs> = z.object({ select: ReportSelectObjectSchema.optional(), include: ReportIncludeObjectSchema.optional(), where: ReportWhereUniqueInputObjectSchema, create: z.union([ ReportCreateInputObjectSchema, ReportUncheckedCreateInputObjectSchema ]), update: z.union([ ReportUpdateInputObjectSchema, ReportUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ReportUpsertArgs>;

export const ReportUpsertOneZodSchema = z.object({ select: ReportSelectObjectSchema.optional(), include: ReportIncludeObjectSchema.optional(), where: ReportWhereUniqueInputObjectSchema, create: z.union([ ReportCreateInputObjectSchema, ReportUncheckedCreateInputObjectSchema ]), update: z.union([ ReportUpdateInputObjectSchema, ReportUncheckedUpdateInputObjectSchema ]) }).strict();