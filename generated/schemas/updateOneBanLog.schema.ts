import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { BanLogSelectObjectSchema as BanLogSelectObjectSchema } from './objects/BanLogSelect.schema';
import { BanLogIncludeObjectSchema as BanLogIncludeObjectSchema } from './objects/BanLogInclude.schema';
import { BanLogUpdateInputObjectSchema as BanLogUpdateInputObjectSchema } from './objects/BanLogUpdateInput.schema';
import { BanLogUncheckedUpdateInputObjectSchema as BanLogUncheckedUpdateInputObjectSchema } from './objects/BanLogUncheckedUpdateInput.schema';
import { BanLogWhereUniqueInputObjectSchema as BanLogWhereUniqueInputObjectSchema } from './objects/BanLogWhereUniqueInput.schema';

export const BanLogUpdateOneSchema: z.ZodType<Prisma.BanLogUpdateArgs> = z.object({ select: BanLogSelectObjectSchema.optional(), include: BanLogIncludeObjectSchema.optional(), data: z.union([BanLogUpdateInputObjectSchema, BanLogUncheckedUpdateInputObjectSchema]), where: BanLogWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BanLogUpdateArgs>;

export const BanLogUpdateOneZodSchema = z.object({ select: BanLogSelectObjectSchema.optional(), include: BanLogIncludeObjectSchema.optional(), data: z.union([BanLogUpdateInputObjectSchema, BanLogUncheckedUpdateInputObjectSchema]), where: BanLogWhereUniqueInputObjectSchema }).strict();