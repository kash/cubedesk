import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AdViewSelectObjectSchema as AdViewSelectObjectSchema } from './objects/AdViewSelect.schema';
import { AdViewIncludeObjectSchema as AdViewIncludeObjectSchema } from './objects/AdViewInclude.schema';
import { AdViewWhereUniqueInputObjectSchema as AdViewWhereUniqueInputObjectSchema } from './objects/AdViewWhereUniqueInput.schema';

export const AdViewDeleteOneSchema: z.ZodType<Prisma.AdViewDeleteArgs> = z.object({ select: AdViewSelectObjectSchema.optional(), include: AdViewIncludeObjectSchema.optional(), where: AdViewWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AdViewDeleteArgs>;

export const AdViewDeleteOneZodSchema = z.object({ select: AdViewSelectObjectSchema.optional(), include: AdViewIncludeObjectSchema.optional(), where: AdViewWhereUniqueInputObjectSchema }).strict();