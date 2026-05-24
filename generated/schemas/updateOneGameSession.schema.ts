import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { GameSessionSelectObjectSchema as GameSessionSelectObjectSchema } from './objects/GameSessionSelect.schema';
import { GameSessionIncludeObjectSchema as GameSessionIncludeObjectSchema } from './objects/GameSessionInclude.schema';
import { GameSessionUpdateInputObjectSchema as GameSessionUpdateInputObjectSchema } from './objects/GameSessionUpdateInput.schema';
import { GameSessionUncheckedUpdateInputObjectSchema as GameSessionUncheckedUpdateInputObjectSchema } from './objects/GameSessionUncheckedUpdateInput.schema';
import { GameSessionWhereUniqueInputObjectSchema as GameSessionWhereUniqueInputObjectSchema } from './objects/GameSessionWhereUniqueInput.schema';

export const GameSessionUpdateOneSchema: z.ZodType<Prisma.GameSessionUpdateArgs> = z.object({ select: GameSessionSelectObjectSchema.optional(), include: GameSessionIncludeObjectSchema.optional(), data: z.union([GameSessionUpdateInputObjectSchema, GameSessionUncheckedUpdateInputObjectSchema]), where: GameSessionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.GameSessionUpdateArgs>;

export const GameSessionUpdateOneZodSchema = z.object({ select: GameSessionSelectObjectSchema.optional(), include: GameSessionIncludeObjectSchema.optional(), data: z.union([GameSessionUpdateInputObjectSchema, GameSessionUncheckedUpdateInputObjectSchema]), where: GameSessionWhereUniqueInputObjectSchema }).strict();