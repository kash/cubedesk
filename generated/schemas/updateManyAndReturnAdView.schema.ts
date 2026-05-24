import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AdViewSelectObjectSchema as AdViewSelectObjectSchema } from './objects/AdViewSelect.schema';
import { AdViewUpdateManyMutationInputObjectSchema as AdViewUpdateManyMutationInputObjectSchema } from './objects/AdViewUpdateManyMutationInput.schema';
import { AdViewWhereInputObjectSchema as AdViewWhereInputObjectSchema } from './objects/AdViewWhereInput.schema';

export const AdViewUpdateManyAndReturnSchema: z.ZodType<Prisma.AdViewUpdateManyAndReturnArgs> = z.object({ select: AdViewSelectObjectSchema.optional(), data: AdViewUpdateManyMutationInputObjectSchema, where: AdViewWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AdViewUpdateManyAndReturnArgs>;

export const AdViewUpdateManyAndReturnZodSchema = z.object({ select: AdViewSelectObjectSchema.optional(), data: AdViewUpdateManyMutationInputObjectSchema, where: AdViewWhereInputObjectSchema.optional() }).strict();