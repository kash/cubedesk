import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { BanLogSelectObjectSchema as BanLogSelectObjectSchema } from './objects/BanLogSelect.schema';
import { BanLogIncludeObjectSchema as BanLogIncludeObjectSchema } from './objects/BanLogInclude.schema';
import { BanLogWhereUniqueInputObjectSchema as BanLogWhereUniqueInputObjectSchema } from './objects/BanLogWhereUniqueInput.schema';

export const BanLogDeleteOneSchema: z.ZodType<Prisma.BanLogDeleteArgs> = z.object({ select: BanLogSelectObjectSchema.optional(), include: BanLogIncludeObjectSchema.optional(), where: BanLogWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BanLogDeleteArgs>;

export const BanLogDeleteOneZodSchema = z.object({ select: BanLogSelectObjectSchema.optional(), include: BanLogIncludeObjectSchema.optional(), where: BanLogWhereUniqueInputObjectSchema }).strict();