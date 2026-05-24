import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { GameSessionSelectObjectSchema as GameSessionSelectObjectSchema } from './objects/GameSessionSelect.schema';
import { GameSessionIncludeObjectSchema as GameSessionIncludeObjectSchema } from './objects/GameSessionInclude.schema';
import { GameSessionCreateInputObjectSchema as GameSessionCreateInputObjectSchema } from './objects/GameSessionCreateInput.schema';
import { GameSessionUncheckedCreateInputObjectSchema as GameSessionUncheckedCreateInputObjectSchema } from './objects/GameSessionUncheckedCreateInput.schema';

export const GameSessionCreateOneSchema: z.ZodType<Prisma.GameSessionCreateArgs> = z.object({ select: GameSessionSelectObjectSchema.optional(), include: GameSessionIncludeObjectSchema.optional(), data: z.union([GameSessionCreateInputObjectSchema, GameSessionUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.GameSessionCreateArgs>;

export const GameSessionCreateOneZodSchema = z.object({ select: GameSessionSelectObjectSchema.optional(), include: GameSessionIncludeObjectSchema.optional(), data: z.union([GameSessionCreateInputObjectSchema, GameSessionUncheckedCreateInputObjectSchema]) }).strict();