import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchWhereInputObjectSchema as MatchWhereInputObjectSchema } from './objects/MatchWhereInput.schema';

export const MatchDeleteManySchema: z.ZodType<Prisma.MatchDeleteManyArgs> = z.object({ where: MatchWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MatchDeleteManyArgs>;

export const MatchDeleteManyZodSchema = z.object({ where: MatchWhereInputObjectSchema.optional() }).strict();