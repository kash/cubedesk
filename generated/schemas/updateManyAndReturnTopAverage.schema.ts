import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TopAverageSelectObjectSchema as TopAverageSelectObjectSchema } from './objects/TopAverageSelect.schema';
import { TopAverageUpdateManyMutationInputObjectSchema as TopAverageUpdateManyMutationInputObjectSchema } from './objects/TopAverageUpdateManyMutationInput.schema';
import { TopAverageWhereInputObjectSchema as TopAverageWhereInputObjectSchema } from './objects/TopAverageWhereInput.schema';

export const TopAverageUpdateManyAndReturnSchema: z.ZodType<Prisma.TopAverageUpdateManyAndReturnArgs> = z.object({ select: TopAverageSelectObjectSchema.optional(), data: TopAverageUpdateManyMutationInputObjectSchema, where: TopAverageWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TopAverageUpdateManyAndReturnArgs>;

export const TopAverageUpdateManyAndReturnZodSchema = z.object({ select: TopAverageSelectObjectSchema.optional(), data: TopAverageUpdateManyMutationInputObjectSchema, where: TopAverageWhereInputObjectSchema.optional() }).strict();