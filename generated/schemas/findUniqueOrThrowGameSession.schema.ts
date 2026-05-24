import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { GameSessionSelectObjectSchema as GameSessionSelectObjectSchema } from './objects/GameSessionSelect.schema';
import { GameSessionIncludeObjectSchema as GameSessionIncludeObjectSchema } from './objects/GameSessionInclude.schema';
import { GameSessionWhereUniqueInputObjectSchema as GameSessionWhereUniqueInputObjectSchema } from './objects/GameSessionWhereUniqueInput.schema';

export const GameSessionFindUniqueOrThrowSchema: z.ZodType<Prisma.GameSessionFindUniqueOrThrowArgs> = z.object({ select: GameSessionSelectObjectSchema.optional(), include: GameSessionIncludeObjectSchema.optional(), where: GameSessionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.GameSessionFindUniqueOrThrowArgs>;

export const GameSessionFindUniqueOrThrowZodSchema = z.object({ select: GameSessionSelectObjectSchema.optional(), include: GameSessionIncludeObjectSchema.optional(), where: GameSessionWhereUniqueInputObjectSchema }).strict();