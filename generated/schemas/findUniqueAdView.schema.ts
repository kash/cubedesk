import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AdViewSelectObjectSchema as AdViewSelectObjectSchema } from './objects/AdViewSelect.schema';
import { AdViewIncludeObjectSchema as AdViewIncludeObjectSchema } from './objects/AdViewInclude.schema';
import { AdViewWhereUniqueInputObjectSchema as AdViewWhereUniqueInputObjectSchema } from './objects/AdViewWhereUniqueInput.schema';

export const AdViewFindUniqueSchema: z.ZodType<Prisma.AdViewFindUniqueArgs> = z.object({ select: AdViewSelectObjectSchema.optional(), include: AdViewIncludeObjectSchema.optional(), where: AdViewWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AdViewFindUniqueArgs>;

export const AdViewFindUniqueZodSchema = z.object({ select: AdViewSelectObjectSchema.optional(), include: AdViewIncludeObjectSchema.optional(), where: AdViewWhereUniqueInputObjectSchema }).strict();