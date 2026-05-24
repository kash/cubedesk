import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchUpdateManyMutationInputObjectSchema as MatchUpdateManyMutationInputObjectSchema } from './objects/MatchUpdateManyMutationInput.schema';
import { MatchWhereInputObjectSchema as MatchWhereInputObjectSchema } from './objects/MatchWhereInput.schema';

export const MatchUpdateManySchema: z.ZodType<Prisma.MatchUpdateManyArgs> = z.object({ data: MatchUpdateManyMutationInputObjectSchema, where: MatchWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MatchUpdateManyArgs>;

export const MatchUpdateManyZodSchema = z.object({ data: MatchUpdateManyMutationInputObjectSchema, where: MatchWhereInputObjectSchema.optional() }).strict();