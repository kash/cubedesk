import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { BanLogSelectObjectSchema as BanLogSelectObjectSchema } from './objects/BanLogSelect.schema';
import { BanLogIncludeObjectSchema as BanLogIncludeObjectSchema } from './objects/BanLogInclude.schema';
import { BanLogCreateInputObjectSchema as BanLogCreateInputObjectSchema } from './objects/BanLogCreateInput.schema';
import { BanLogUncheckedCreateInputObjectSchema as BanLogUncheckedCreateInputObjectSchema } from './objects/BanLogUncheckedCreateInput.schema';

export const BanLogCreateOneSchema: z.ZodType<Prisma.BanLogCreateArgs> = z.object({ select: BanLogSelectObjectSchema.optional(), include: BanLogIncludeObjectSchema.optional(), data: z.union([BanLogCreateInputObjectSchema, BanLogUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.BanLogCreateArgs>;

export const BanLogCreateOneZodSchema = z.object({ select: BanLogSelectObjectSchema.optional(), include: BanLogIncludeObjectSchema.optional(), data: z.union([BanLogCreateInputObjectSchema, BanLogUncheckedCreateInputObjectSchema]) }).strict();