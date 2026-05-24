import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { GameOptionsSelectObjectSchema as GameOptionsSelectObjectSchema } from './objects/GameOptionsSelect.schema';
import { GameOptionsIncludeObjectSchema as GameOptionsIncludeObjectSchema } from './objects/GameOptionsInclude.schema';
import { GameOptionsCreateInputObjectSchema as GameOptionsCreateInputObjectSchema } from './objects/GameOptionsCreateInput.schema';
import { GameOptionsUncheckedCreateInputObjectSchema as GameOptionsUncheckedCreateInputObjectSchema } from './objects/GameOptionsUncheckedCreateInput.schema';

export const GameOptionsCreateOneSchema: z.ZodType<Prisma.GameOptionsCreateArgs> = z.object({ select: GameOptionsSelectObjectSchema.optional(), include: GameOptionsIncludeObjectSchema.optional(), data: z.union([GameOptionsCreateInputObjectSchema, GameOptionsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.GameOptionsCreateArgs>;

export const GameOptionsCreateOneZodSchema = z.object({ select: GameOptionsSelectObjectSchema.optional(), include: GameOptionsIncludeObjectSchema.optional(), data: z.union([GameOptionsCreateInputObjectSchema, GameOptionsUncheckedCreateInputObjectSchema]) }).strict();