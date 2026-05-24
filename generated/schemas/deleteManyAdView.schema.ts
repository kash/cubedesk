import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AdViewWhereInputObjectSchema as AdViewWhereInputObjectSchema } from './objects/AdViewWhereInput.schema';

export const AdViewDeleteManySchema: z.ZodType<Prisma.AdViewDeleteManyArgs> = z.object({ where: AdViewWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AdViewDeleteManyArgs>;

export const AdViewDeleteManyZodSchema = z.object({ where: AdViewWhereInputObjectSchema.optional() }).strict();