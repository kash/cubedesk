import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TopAverageSelectObjectSchema as TopAverageSelectObjectSchema } from './objects/TopAverageSelect.schema';
import { TopAverageIncludeObjectSchema as TopAverageIncludeObjectSchema } from './objects/TopAverageInclude.schema';
import { TopAverageCreateInputObjectSchema as TopAverageCreateInputObjectSchema } from './objects/TopAverageCreateInput.schema';
import { TopAverageUncheckedCreateInputObjectSchema as TopAverageUncheckedCreateInputObjectSchema } from './objects/TopAverageUncheckedCreateInput.schema';

export const TopAverageCreateOneSchema: z.ZodType<Prisma.TopAverageCreateArgs> = z.object({ select: TopAverageSelectObjectSchema.optional(), include: TopAverageIncludeObjectSchema.optional(), data: z.union([TopAverageCreateInputObjectSchema, TopAverageUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.TopAverageCreateArgs>;

export const TopAverageCreateOneZodSchema = z.object({ select: TopAverageSelectObjectSchema.optional(), include: TopAverageIncludeObjectSchema.optional(), data: z.union([TopAverageCreateInputObjectSchema, TopAverageUncheckedCreateInputObjectSchema]) }).strict();