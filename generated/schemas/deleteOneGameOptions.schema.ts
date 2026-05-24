import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { GameOptionsSelectObjectSchema as GameOptionsSelectObjectSchema } from './objects/GameOptionsSelect.schema';
import { GameOptionsIncludeObjectSchema as GameOptionsIncludeObjectSchema } from './objects/GameOptionsInclude.schema';
import { GameOptionsWhereUniqueInputObjectSchema as GameOptionsWhereUniqueInputObjectSchema } from './objects/GameOptionsWhereUniqueInput.schema';

export const GameOptionsDeleteOneSchema: z.ZodType<Prisma.GameOptionsDeleteArgs> = z.object({ select: GameOptionsSelectObjectSchema.optional(), include: GameOptionsIncludeObjectSchema.optional(), where: GameOptionsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.GameOptionsDeleteArgs>;

export const GameOptionsDeleteOneZodSchema = z.object({ select: GameOptionsSelectObjectSchema.optional(), include: GameOptionsIncludeObjectSchema.optional(), where: GameOptionsWhereUniqueInputObjectSchema }).strict();