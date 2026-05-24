import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AdViewSelectObjectSchema as AdViewSelectObjectSchema } from './objects/AdViewSelect.schema';
import { AdViewIncludeObjectSchema as AdViewIncludeObjectSchema } from './objects/AdViewInclude.schema';
import { AdViewWhereUniqueInputObjectSchema as AdViewWhereUniqueInputObjectSchema } from './objects/AdViewWhereUniqueInput.schema';

export const AdViewFindUniqueOrThrowSchema: z.ZodType<Prisma.AdViewFindUniqueOrThrowArgs> = z.object({ select: AdViewSelectObjectSchema.optional(), include: AdViewIncludeObjectSchema.optional(), where: AdViewWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AdViewFindUniqueOrThrowArgs>;

export const AdViewFindUniqueOrThrowZodSchema = z.object({ select: AdViewSelectObjectSchema.optional(), include: AdViewIncludeObjectSchema.optional(), where: AdViewWhereUniqueInputObjectSchema }).strict();