import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchSelectObjectSchema as MatchSelectObjectSchema } from './objects/MatchSelect.schema';
import { MatchUpdateManyMutationInputObjectSchema as MatchUpdateManyMutationInputObjectSchema } from './objects/MatchUpdateManyMutationInput.schema';
import { MatchWhereInputObjectSchema as MatchWhereInputObjectSchema } from './objects/MatchWhereInput.schema';

export const MatchUpdateManyAndReturnSchema: z.ZodType<Prisma.MatchUpdateManyAndReturnArgs> = z.object({ select: MatchSelectObjectSchema.optional(), data: MatchUpdateManyMutationInputObjectSchema, where: MatchWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MatchUpdateManyAndReturnArgs>;

export const MatchUpdateManyAndReturnZodSchema = z.object({ select: MatchSelectObjectSchema.optional(), data: MatchUpdateManyMutationInputObjectSchema, where: MatchWhereInputObjectSchema.optional() }).strict();