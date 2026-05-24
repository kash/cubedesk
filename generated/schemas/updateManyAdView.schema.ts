import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AdViewUpdateManyMutationInputObjectSchema as AdViewUpdateManyMutationInputObjectSchema } from './objects/AdViewUpdateManyMutationInput.schema';
import { AdViewWhereInputObjectSchema as AdViewWhereInputObjectSchema } from './objects/AdViewWhereInput.schema';

export const AdViewUpdateManySchema: z.ZodType<Prisma.AdViewUpdateManyArgs> = z.object({ data: AdViewUpdateManyMutationInputObjectSchema, where: AdViewWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AdViewUpdateManyArgs>;

export const AdViewUpdateManyZodSchema = z.object({ data: AdViewUpdateManyMutationInputObjectSchema, where: AdViewWhereInputObjectSchema.optional() }).strict();