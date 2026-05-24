import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AdViewSelectObjectSchema as AdViewSelectObjectSchema } from './objects/AdViewSelect.schema';
import { AdViewIncludeObjectSchema as AdViewIncludeObjectSchema } from './objects/AdViewInclude.schema';
import { AdViewCreateInputObjectSchema as AdViewCreateInputObjectSchema } from './objects/AdViewCreateInput.schema';
import { AdViewUncheckedCreateInputObjectSchema as AdViewUncheckedCreateInputObjectSchema } from './objects/AdViewUncheckedCreateInput.schema';

export const AdViewCreateOneSchema: z.ZodType<Prisma.AdViewCreateArgs> = z.object({ select: AdViewSelectObjectSchema.optional(), include: AdViewIncludeObjectSchema.optional(), data: z.union([AdViewCreateInputObjectSchema, AdViewUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.AdViewCreateArgs>;

export const AdViewCreateOneZodSchema = z.object({ select: AdViewSelectObjectSchema.optional(), include: AdViewIncludeObjectSchema.optional(), data: z.union([AdViewCreateInputObjectSchema, AdViewUncheckedCreateInputObjectSchema]) }).strict();