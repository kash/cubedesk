import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { BanLogWhereInputObjectSchema as BanLogWhereInputObjectSchema } from './objects/BanLogWhereInput.schema';

export const BanLogDeleteManySchema: z.ZodType<Prisma.BanLogDeleteManyArgs> = z.object({ where: BanLogWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BanLogDeleteManyArgs>;

export const BanLogDeleteManyZodSchema = z.object({ where: BanLogWhereInputObjectSchema.optional() }).strict();