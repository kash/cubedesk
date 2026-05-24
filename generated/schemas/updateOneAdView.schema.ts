import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AdViewSelectObjectSchema as AdViewSelectObjectSchema } from './objects/AdViewSelect.schema';
import { AdViewIncludeObjectSchema as AdViewIncludeObjectSchema } from './objects/AdViewInclude.schema';
import { AdViewUpdateInputObjectSchema as AdViewUpdateInputObjectSchema } from './objects/AdViewUpdateInput.schema';
import { AdViewUncheckedUpdateInputObjectSchema as AdViewUncheckedUpdateInputObjectSchema } from './objects/AdViewUncheckedUpdateInput.schema';
import { AdViewWhereUniqueInputObjectSchema as AdViewWhereUniqueInputObjectSchema } from './objects/AdViewWhereUniqueInput.schema';

export const AdViewUpdateOneSchema: z.ZodType<Prisma.AdViewUpdateArgs> = z.object({ select: AdViewSelectObjectSchema.optional(), include: AdViewIncludeObjectSchema.optional(), data: z.union([AdViewUpdateInputObjectSchema, AdViewUncheckedUpdateInputObjectSchema]), where: AdViewWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AdViewUpdateArgs>;

export const AdViewUpdateOneZodSchema = z.object({ select: AdViewSelectObjectSchema.optional(), include: AdViewIncludeObjectSchema.optional(), data: z.union([AdViewUpdateInputObjectSchema, AdViewUncheckedUpdateInputObjectSchema]), where: AdViewWhereUniqueInputObjectSchema }).strict();