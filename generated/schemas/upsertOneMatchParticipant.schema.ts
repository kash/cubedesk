import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchParticipantSelectObjectSchema as MatchParticipantSelectObjectSchema } from './objects/MatchParticipantSelect.schema';
import { MatchParticipantIncludeObjectSchema as MatchParticipantIncludeObjectSchema } from './objects/MatchParticipantInclude.schema';
import { MatchParticipantWhereUniqueInputObjectSchema as MatchParticipantWhereUniqueInputObjectSchema } from './objects/MatchParticipantWhereUniqueInput.schema';
import { MatchParticipantCreateInputObjectSchema as MatchParticipantCreateInputObjectSchema } from './objects/MatchParticipantCreateInput.schema';
import { MatchParticipantUncheckedCreateInputObjectSchema as MatchParticipantUncheckedCreateInputObjectSchema } from './objects/MatchParticipantUncheckedCreateInput.schema';
import { MatchParticipantUpdateInputObjectSchema as MatchParticipantUpdateInputObjectSchema } from './objects/MatchParticipantUpdateInput.schema';
import { MatchParticipantUncheckedUpdateInputObjectSchema as MatchParticipantUncheckedUpdateInputObjectSchema } from './objects/MatchParticipantUncheckedUpdateInput.schema';

export const MatchParticipantUpsertOneSchema: z.ZodType<Prisma.MatchParticipantUpsertArgs> = z.object({ select: MatchParticipantSelectObjectSchema.optional(), include: MatchParticipantIncludeObjectSchema.optional(), where: MatchParticipantWhereUniqueInputObjectSchema, create: z.union([ MatchParticipantCreateInputObjectSchema, MatchParticipantUncheckedCreateInputObjectSchema ]), update: z.union([ MatchParticipantUpdateInputObjectSchema, MatchParticipantUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.MatchParticipantUpsertArgs>;

export const MatchParticipantUpsertOneZodSchema = z.object({ select: MatchParticipantSelectObjectSchema.optional(), include: MatchParticipantIncludeObjectSchema.optional(), where: MatchParticipantWhereUniqueInputObjectSchema, create: z.union([ MatchParticipantCreateInputObjectSchema, MatchParticipantUncheckedCreateInputObjectSchema ]), update: z.union([ MatchParticipantUpdateInputObjectSchema, MatchParticipantUncheckedUpdateInputObjectSchema ]) }).strict();