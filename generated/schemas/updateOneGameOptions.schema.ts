import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { GameOptionsSelectObjectSchema as GameOptionsSelectObjectSchema } from './objects/GameOptionsSelect.schema';
import { GameOptionsIncludeObjectSchema as GameOptionsIncludeObjectSchema } from './objects/GameOptionsInclude.schema';
import { GameOptionsUpdateInputObjectSchema as GameOptionsUpdateInputObjectSchema } from './objects/GameOptionsUpdateInput.schema';
import { GameOptionsUncheckedUpdateInputObjectSchema as GameOptionsUncheckedUpdateInputObjectSchema } from './objects/GameOptionsUncheckedUpdateInput.schema';
import { GameOptionsWhereUniqueInputObjectSchema as GameOptionsWhereUniqueInputObjectSchema } from './objects/GameOptionsWhereUniqueInput.schema';

export const GameOptionsUpdateOneSchema: z.ZodType<Prisma.GameOptionsUpdateArgs> = z.object({ select: GameOptionsSelectObjectSchema.optional(), include: GameOptionsIncludeObjectSchema.optional(), data: z.union([GameOptionsUpdateInputObjectSchema, GameOptionsUncheckedUpdateInputObjectSchema]), where: GameOptionsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.GameOptionsUpdateArgs>;

export const GameOptionsUpdateOneZodSchema = z.object({ select: GameOptionsSelectObjectSchema.optional(), include: GameOptionsIncludeObjectSchema.optional(), data: z.union([GameOptionsUpdateInputObjectSchema, GameOptionsUncheckedUpdateInputObjectSchema]), where: GameOptionsWhereUniqueInputObjectSchema }).strict();