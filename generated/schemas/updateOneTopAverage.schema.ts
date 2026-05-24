import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TopAverageSelectObjectSchema as TopAverageSelectObjectSchema } from './objects/TopAverageSelect.schema';
import { TopAverageIncludeObjectSchema as TopAverageIncludeObjectSchema } from './objects/TopAverageInclude.schema';
import { TopAverageUpdateInputObjectSchema as TopAverageUpdateInputObjectSchema } from './objects/TopAverageUpdateInput.schema';
import { TopAverageUncheckedUpdateInputObjectSchema as TopAverageUncheckedUpdateInputObjectSchema } from './objects/TopAverageUncheckedUpdateInput.schema';
import { TopAverageWhereUniqueInputObjectSchema as TopAverageWhereUniqueInputObjectSchema } from './objects/TopAverageWhereUniqueInput.schema';

export const TopAverageUpdateOneSchema: z.ZodType<Prisma.TopAverageUpdateArgs> = z.object({ select: TopAverageSelectObjectSchema.optional(), include: TopAverageIncludeObjectSchema.optional(), data: z.union([TopAverageUpdateInputObjectSchema, TopAverageUncheckedUpdateInputObjectSchema]), where: TopAverageWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TopAverageUpdateArgs>;

export const TopAverageUpdateOneZodSchema = z.object({ select: TopAverageSelectObjectSchema.optional(), include: TopAverageIncludeObjectSchema.optional(), data: z.union([TopAverageUpdateInputObjectSchema, TopAverageUncheckedUpdateInputObjectSchema]), where: TopAverageWhereUniqueInputObjectSchema }).strict();