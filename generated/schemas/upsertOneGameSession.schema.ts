import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { GameSessionSelectObjectSchema as GameSessionSelectObjectSchema } from './objects/GameSessionSelect.schema';
import { GameSessionIncludeObjectSchema as GameSessionIncludeObjectSchema } from './objects/GameSessionInclude.schema';
import { GameSessionWhereUniqueInputObjectSchema as GameSessionWhereUniqueInputObjectSchema } from './objects/GameSessionWhereUniqueInput.schema';
import { GameSessionCreateInputObjectSchema as GameSessionCreateInputObjectSchema } from './objects/GameSessionCreateInput.schema';
import { GameSessionUncheckedCreateInputObjectSchema as GameSessionUncheckedCreateInputObjectSchema } from './objects/GameSessionUncheckedCreateInput.schema';
import { GameSessionUpdateInputObjectSchema as GameSessionUpdateInputObjectSchema } from './objects/GameSessionUpdateInput.schema';
import { GameSessionUncheckedUpdateInputObjectSchema as GameSessionUncheckedUpdateInputObjectSchema } from './objects/GameSessionUncheckedUpdateInput.schema';

export const GameSessionUpsertOneSchema: z.ZodType<Prisma.GameSessionUpsertArgs> = z.object({ select: GameSessionSelectObjectSchema.optional(), include: GameSessionIncludeObjectSchema.optional(), where: GameSessionWhereUniqueInputObjectSchema, create: z.union([ GameSessionCreateInputObjectSchema, GameSessionUncheckedCreateInputObjectSchema ]), update: z.union([ GameSessionUpdateInputObjectSchema, GameSessionUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.GameSessionUpsertArgs>;

export const GameSessionUpsertOneZodSchema = z.object({ select: GameSessionSelectObjectSchema.optional(), include: GameSessionIncludeObjectSchema.optional(), where: GameSessionWhereUniqueInputObjectSchema, create: z.union([ GameSessionCreateInputObjectSchema, GameSessionUncheckedCreateInputObjectSchema ]), update: z.union([ GameSessionUpdateInputObjectSchema, GameSessionUncheckedUpdateInputObjectSchema ]) }).strict();