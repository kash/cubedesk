import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TopAverageSelectObjectSchema as TopAverageSelectObjectSchema } from './objects/TopAverageSelect.schema';
import { TopAverageIncludeObjectSchema as TopAverageIncludeObjectSchema } from './objects/TopAverageInclude.schema';
import { TopAverageWhereUniqueInputObjectSchema as TopAverageWhereUniqueInputObjectSchema } from './objects/TopAverageWhereUniqueInput.schema';
import { TopAverageCreateInputObjectSchema as TopAverageCreateInputObjectSchema } from './objects/TopAverageCreateInput.schema';
import { TopAverageUncheckedCreateInputObjectSchema as TopAverageUncheckedCreateInputObjectSchema } from './objects/TopAverageUncheckedCreateInput.schema';
import { TopAverageUpdateInputObjectSchema as TopAverageUpdateInputObjectSchema } from './objects/TopAverageUpdateInput.schema';
import { TopAverageUncheckedUpdateInputObjectSchema as TopAverageUncheckedUpdateInputObjectSchema } from './objects/TopAverageUncheckedUpdateInput.schema';

export const TopAverageUpsertOneSchema: z.ZodType<Prisma.TopAverageUpsertArgs> = z.object({ select: TopAverageSelectObjectSchema.optional(), include: TopAverageIncludeObjectSchema.optional(), where: TopAverageWhereUniqueInputObjectSchema, create: z.union([ TopAverageCreateInputObjectSchema, TopAverageUncheckedCreateInputObjectSchema ]), update: z.union([ TopAverageUpdateInputObjectSchema, TopAverageUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.TopAverageUpsertArgs>;

export const TopAverageUpsertOneZodSchema = z.object({ select: TopAverageSelectObjectSchema.optional(), include: TopAverageIncludeObjectSchema.optional(), where: TopAverageWhereUniqueInputObjectSchema, create: z.union([ TopAverageCreateInputObjectSchema, TopAverageUncheckedCreateInputObjectSchema ]), update: z.union([ TopAverageUpdateInputObjectSchema, TopAverageUncheckedUpdateInputObjectSchema ]) }).strict();