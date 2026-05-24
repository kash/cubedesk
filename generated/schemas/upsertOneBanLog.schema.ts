import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { BanLogSelectObjectSchema as BanLogSelectObjectSchema } from './objects/BanLogSelect.schema';
import { BanLogIncludeObjectSchema as BanLogIncludeObjectSchema } from './objects/BanLogInclude.schema';
import { BanLogWhereUniqueInputObjectSchema as BanLogWhereUniqueInputObjectSchema } from './objects/BanLogWhereUniqueInput.schema';
import { BanLogCreateInputObjectSchema as BanLogCreateInputObjectSchema } from './objects/BanLogCreateInput.schema';
import { BanLogUncheckedCreateInputObjectSchema as BanLogUncheckedCreateInputObjectSchema } from './objects/BanLogUncheckedCreateInput.schema';
import { BanLogUpdateInputObjectSchema as BanLogUpdateInputObjectSchema } from './objects/BanLogUpdateInput.schema';
import { BanLogUncheckedUpdateInputObjectSchema as BanLogUncheckedUpdateInputObjectSchema } from './objects/BanLogUncheckedUpdateInput.schema';

export const BanLogUpsertOneSchema: z.ZodType<Prisma.BanLogUpsertArgs> = z.object({ select: BanLogSelectObjectSchema.optional(), include: BanLogIncludeObjectSchema.optional(), where: BanLogWhereUniqueInputObjectSchema, create: z.union([ BanLogCreateInputObjectSchema, BanLogUncheckedCreateInputObjectSchema ]), update: z.union([ BanLogUpdateInputObjectSchema, BanLogUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.BanLogUpsertArgs>;

export const BanLogUpsertOneZodSchema = z.object({ select: BanLogSelectObjectSchema.optional(), include: BanLogIncludeObjectSchema.optional(), where: BanLogWhereUniqueInputObjectSchema, create: z.union([ BanLogCreateInputObjectSchema, BanLogUncheckedCreateInputObjectSchema ]), update: z.union([ BanLogUpdateInputObjectSchema, BanLogUncheckedUpdateInputObjectSchema ]) }).strict();