import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { BanLogSelectObjectSchema as BanLogSelectObjectSchema } from './objects/BanLogSelect.schema';
import { BanLogUpdateManyMutationInputObjectSchema as BanLogUpdateManyMutationInputObjectSchema } from './objects/BanLogUpdateManyMutationInput.schema';
import { BanLogWhereInputObjectSchema as BanLogWhereInputObjectSchema } from './objects/BanLogWhereInput.schema';

export const BanLogUpdateManyAndReturnSchema: z.ZodType<Prisma.BanLogUpdateManyAndReturnArgs> = z.object({ select: BanLogSelectObjectSchema.optional(), data: BanLogUpdateManyMutationInputObjectSchema, where: BanLogWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BanLogUpdateManyAndReturnArgs>;

export const BanLogUpdateManyAndReturnZodSchema = z.object({ select: BanLogSelectObjectSchema.optional(), data: BanLogUpdateManyMutationInputObjectSchema, where: BanLogWhereInputObjectSchema.optional() }).strict();