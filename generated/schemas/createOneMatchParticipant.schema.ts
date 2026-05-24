import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchParticipantSelectObjectSchema as MatchParticipantSelectObjectSchema } from './objects/MatchParticipantSelect.schema';
import { MatchParticipantIncludeObjectSchema as MatchParticipantIncludeObjectSchema } from './objects/MatchParticipantInclude.schema';
import { MatchParticipantCreateInputObjectSchema as MatchParticipantCreateInputObjectSchema } from './objects/MatchParticipantCreateInput.schema';
import { MatchParticipantUncheckedCreateInputObjectSchema as MatchParticipantUncheckedCreateInputObjectSchema } from './objects/MatchParticipantUncheckedCreateInput.schema';

export const MatchParticipantCreateOneSchema: z.ZodType<Prisma.MatchParticipantCreateArgs> = z.object({ select: MatchParticipantSelectObjectSchema.optional(), include: MatchParticipantIncludeObjectSchema.optional(), data: z.union([MatchParticipantCreateInputObjectSchema, MatchParticipantUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.MatchParticipantCreateArgs>;

export const MatchParticipantCreateOneZodSchema = z.object({ select: MatchParticipantSelectObjectSchema.optional(), include: MatchParticipantIncludeObjectSchema.optional(), data: z.union([MatchParticipantCreateInputObjectSchema, MatchParticipantUncheckedCreateInputObjectSchema]) }).strict();