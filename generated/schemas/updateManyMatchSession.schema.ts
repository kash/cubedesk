import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchSessionUpdateManyMutationInputObjectSchema as MatchSessionUpdateManyMutationInputObjectSchema } from './objects/MatchSessionUpdateManyMutationInput.schema';
import { MatchSessionWhereInputObjectSchema as MatchSessionWhereInputObjectSchema } from './objects/MatchSessionWhereInput.schema';

export const MatchSessionUpdateManySchema: z.ZodType<Prisma.MatchSessionUpdateManyArgs> = z.object({ data: MatchSessionUpdateManyMutationInputObjectSchema, where: MatchSessionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MatchSessionUpdateManyArgs>;

export const MatchSessionUpdateManyZodSchema = z.object({ data: MatchSessionUpdateManyMutationInputObjectSchema, where: MatchSessionWhereInputObjectSchema.optional() }).strict();