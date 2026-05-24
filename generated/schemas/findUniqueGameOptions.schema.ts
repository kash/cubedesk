import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { GameOptionsSelectObjectSchema as GameOptionsSelectObjectSchema } from './objects/GameOptionsSelect.schema';
import { GameOptionsIncludeObjectSchema as GameOptionsIncludeObjectSchema } from './objects/GameOptionsInclude.schema';
import { GameOptionsWhereUniqueInputObjectSchema as GameOptionsWhereUniqueInputObjectSchema } from './objects/GameOptionsWhereUniqueInput.schema';

export const GameOptionsFindUniqueSchema: z.ZodType<Prisma.GameOptionsFindUniqueArgs> = z.object({ select: GameOptionsSelectObjectSchema.optional(), include: GameOptionsIncludeObjectSchema.optional(), where: GameOptionsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.GameOptionsFindUniqueArgs>;

export const GameOptionsFindUniqueZodSchema = z.object({ select: GameOptionsSelectObjectSchema.optional(), include: GameOptionsIncludeObjectSchema.optional(), where: GameOptionsWhereUniqueInputObjectSchema }).strict();