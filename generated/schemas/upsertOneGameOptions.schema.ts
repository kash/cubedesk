import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { GameOptionsSelectObjectSchema as GameOptionsSelectObjectSchema } from './objects/GameOptionsSelect.schema';
import { GameOptionsIncludeObjectSchema as GameOptionsIncludeObjectSchema } from './objects/GameOptionsInclude.schema';
import { GameOptionsWhereUniqueInputObjectSchema as GameOptionsWhereUniqueInputObjectSchema } from './objects/GameOptionsWhereUniqueInput.schema';
import { GameOptionsCreateInputObjectSchema as GameOptionsCreateInputObjectSchema } from './objects/GameOptionsCreateInput.schema';
import { GameOptionsUncheckedCreateInputObjectSchema as GameOptionsUncheckedCreateInputObjectSchema } from './objects/GameOptionsUncheckedCreateInput.schema';
import { GameOptionsUpdateInputObjectSchema as GameOptionsUpdateInputObjectSchema } from './objects/GameOptionsUpdateInput.schema';
import { GameOptionsUncheckedUpdateInputObjectSchema as GameOptionsUncheckedUpdateInputObjectSchema } from './objects/GameOptionsUncheckedUpdateInput.schema';

export const GameOptionsUpsertOneSchema: z.ZodType<Prisma.GameOptionsUpsertArgs> = z.object({ select: GameOptionsSelectObjectSchema.optional(), include: GameOptionsIncludeObjectSchema.optional(), where: GameOptionsWhereUniqueInputObjectSchema, create: z.union([ GameOptionsCreateInputObjectSchema, GameOptionsUncheckedCreateInputObjectSchema ]), update: z.union([ GameOptionsUpdateInputObjectSchema, GameOptionsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.GameOptionsUpsertArgs>;

export const GameOptionsUpsertOneZodSchema = z.object({ select: GameOptionsSelectObjectSchema.optional(), include: GameOptionsIncludeObjectSchema.optional(), where: GameOptionsWhereUniqueInputObjectSchema, create: z.union([ GameOptionsCreateInputObjectSchema, GameOptionsUncheckedCreateInputObjectSchema ]), update: z.union([ GameOptionsUpdateInputObjectSchema, GameOptionsUncheckedUpdateInputObjectSchema ]) }).strict();