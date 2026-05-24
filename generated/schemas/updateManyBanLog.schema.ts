import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { BanLogUpdateManyMutationInputObjectSchema as BanLogUpdateManyMutationInputObjectSchema } from './objects/BanLogUpdateManyMutationInput.schema';
import { BanLogWhereInputObjectSchema as BanLogWhereInputObjectSchema } from './objects/BanLogWhereInput.schema';

export const BanLogUpdateManySchema: z.ZodType<Prisma.BanLogUpdateManyArgs> = z.object({ data: BanLogUpdateManyMutationInputObjectSchema, where: BanLogWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BanLogUpdateManyArgs>;

export const BanLogUpdateManyZodSchema = z.object({ data: BanLogUpdateManyMutationInputObjectSchema, where: BanLogWhereInputObjectSchema.optional() }).strict();