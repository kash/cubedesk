import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { GameOptionsSelectObjectSchema as GameOptionsSelectObjectSchema } from './objects/GameOptionsSelect.schema';
import { GameOptionsUpdateManyMutationInputObjectSchema as GameOptionsUpdateManyMutationInputObjectSchema } from './objects/GameOptionsUpdateManyMutationInput.schema';
import { GameOptionsWhereInputObjectSchema as GameOptionsWhereInputObjectSchema } from './objects/GameOptionsWhereInput.schema';

export const GameOptionsUpdateManyAndReturnSchema: z.ZodType<Prisma.GameOptionsUpdateManyAndReturnArgs> = z.object({ select: GameOptionsSelectObjectSchema.optional(), data: GameOptionsUpdateManyMutationInputObjectSchema, where: GameOptionsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GameOptionsUpdateManyAndReturnArgs>;

export const GameOptionsUpdateManyAndReturnZodSchema = z.object({ select: GameOptionsSelectObjectSchema.optional(), data: GameOptionsUpdateManyMutationInputObjectSchema, where: GameOptionsWhereInputObjectSchema.optional() }).strict();