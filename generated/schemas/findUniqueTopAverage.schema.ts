import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TopAverageSelectObjectSchema as TopAverageSelectObjectSchema } from './objects/TopAverageSelect.schema';
import { TopAverageIncludeObjectSchema as TopAverageIncludeObjectSchema } from './objects/TopAverageInclude.schema';
import { TopAverageWhereUniqueInputObjectSchema as TopAverageWhereUniqueInputObjectSchema } from './objects/TopAverageWhereUniqueInput.schema';

export const TopAverageFindUniqueSchema: z.ZodType<Prisma.TopAverageFindUniqueArgs> = z.object({ select: TopAverageSelectObjectSchema.optional(), include: TopAverageIncludeObjectSchema.optional(), where: TopAverageWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TopAverageFindUniqueArgs>;

export const TopAverageFindUniqueZodSchema = z.object({ select: TopAverageSelectObjectSchema.optional(), include: TopAverageIncludeObjectSchema.optional(), where: TopAverageWhereUniqueInputObjectSchema }).strict();