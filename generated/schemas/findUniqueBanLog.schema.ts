import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { BanLogSelectObjectSchema as BanLogSelectObjectSchema } from './objects/BanLogSelect.schema';
import { BanLogIncludeObjectSchema as BanLogIncludeObjectSchema } from './objects/BanLogInclude.schema';
import { BanLogWhereUniqueInputObjectSchema as BanLogWhereUniqueInputObjectSchema } from './objects/BanLogWhereUniqueInput.schema';

export const BanLogFindUniqueSchema: z.ZodType<Prisma.BanLogFindUniqueArgs> = z.object({ select: BanLogSelectObjectSchema.optional(), include: BanLogIncludeObjectSchema.optional(), where: BanLogWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BanLogFindUniqueArgs>;

export const BanLogFindUniqueZodSchema = z.object({ select: BanLogSelectObjectSchema.optional(), include: BanLogIncludeObjectSchema.optional(), where: BanLogWhereUniqueInputObjectSchema }).strict();