import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchSessionSelectObjectSchema as MatchSessionSelectObjectSchema } from './objects/MatchSessionSelect.schema';
import { MatchSessionUpdateManyMutationInputObjectSchema as MatchSessionUpdateManyMutationInputObjectSchema } from './objects/MatchSessionUpdateManyMutationInput.schema';
import { MatchSessionWhereInputObjectSchema as MatchSessionWhereInputObjectSchema } from './objects/MatchSessionWhereInput.schema';

export const MatchSessionUpdateManyAndReturnSchema: z.ZodType<Prisma.MatchSessionUpdateManyAndReturnArgs> = z.object({ select: MatchSessionSelectObjectSchema.optional(), data: MatchSessionUpdateManyMutationInputObjectSchema, where: MatchSessionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MatchSessionUpdateManyAndReturnArgs>;

export const MatchSessionUpdateManyAndReturnZodSchema = z.object({ select: MatchSessionSelectObjectSchema.optional(), data: MatchSessionUpdateManyMutationInputObjectSchema, where: MatchSessionWhereInputObjectSchema.optional() }).strict();