import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchParticipantSelectObjectSchema as MatchParticipantSelectObjectSchema } from './objects/MatchParticipantSelect.schema';
import { MatchParticipantIncludeObjectSchema as MatchParticipantIncludeObjectSchema } from './objects/MatchParticipantInclude.schema';
import { MatchParticipantWhereUniqueInputObjectSchema as MatchParticipantWhereUniqueInputObjectSchema } from './objects/MatchParticipantWhereUniqueInput.schema';

export const MatchParticipantDeleteOneSchema: z.ZodType<Prisma.MatchParticipantDeleteArgs> = z.object({ select: MatchParticipantSelectObjectSchema.optional(), include: MatchParticipantIncludeObjectSchema.optional(), where: MatchParticipantWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MatchParticipantDeleteArgs>;

export const MatchParticipantDeleteOneZodSchema = z.object({ select: MatchParticipantSelectObjectSchema.optional(), include: MatchParticipantIncludeObjectSchema.optional(), where: MatchParticipantWhereUniqueInputObjectSchema }).strict();