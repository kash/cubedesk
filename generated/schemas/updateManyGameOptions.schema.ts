import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { GameOptionsUpdateManyMutationInputObjectSchema as GameOptionsUpdateManyMutationInputObjectSchema } from './objects/GameOptionsUpdateManyMutationInput.schema';
import { GameOptionsWhereInputObjectSchema as GameOptionsWhereInputObjectSchema } from './objects/GameOptionsWhereInput.schema';

export const GameOptionsUpdateManySchema: z.ZodType<Prisma.GameOptionsUpdateManyArgs> = z.object({ data: GameOptionsUpdateManyMutationInputObjectSchema, where: GameOptionsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GameOptionsUpdateManyArgs>;

export const GameOptionsUpdateManyZodSchema = z.object({ data: GameOptionsUpdateManyMutationInputObjectSchema, where: GameOptionsWhereInputObjectSchema.optional() }).strict();