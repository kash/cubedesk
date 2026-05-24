import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchSessionWhereInputObjectSchema as MatchSessionWhereInputObjectSchema } from './objects/MatchSessionWhereInput.schema';

export const MatchSessionDeleteManySchema: z.ZodType<Prisma.MatchSessionDeleteManyArgs> = z.object({ where: MatchSessionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MatchSessionDeleteManyArgs>;

export const MatchSessionDeleteManyZodSchema = z.object({ where: MatchSessionWhereInputObjectSchema.optional() }).strict();