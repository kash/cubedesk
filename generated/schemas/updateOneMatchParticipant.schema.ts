import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchParticipantSelectObjectSchema as MatchParticipantSelectObjectSchema } from './objects/MatchParticipantSelect.schema';
import { MatchParticipantIncludeObjectSchema as MatchParticipantIncludeObjectSchema } from './objects/MatchParticipantInclude.schema';
import { MatchParticipantUpdateInputObjectSchema as MatchParticipantUpdateInputObjectSchema } from './objects/MatchParticipantUpdateInput.schema';
import { MatchParticipantUncheckedUpdateInputObjectSchema as MatchParticipantUncheckedUpdateInputObjectSchema } from './objects/MatchParticipantUncheckedUpdateInput.schema';
import { MatchParticipantWhereUniqueInputObjectSchema as MatchParticipantWhereUniqueInputObjectSchema } from './objects/MatchParticipantWhereUniqueInput.schema';

export const MatchParticipantUpdateOneSchema: z.ZodType<Prisma.MatchParticipantUpdateArgs> = z.object({ select: MatchParticipantSelectObjectSchema.optional(), include: MatchParticipantIncludeObjectSchema.optional(), data: z.union([MatchParticipantUpdateInputObjectSchema, MatchParticipantUncheckedUpdateInputObjectSchema]), where: MatchParticipantWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MatchParticipantUpdateArgs>;

export const MatchParticipantUpdateOneZodSchema = z.object({ select: MatchParticipantSelectObjectSchema.optional(), include: MatchParticipantIncludeObjectSchema.optional(), data: z.union([MatchParticipantUpdateInputObjectSchema, MatchParticipantUncheckedUpdateInputObjectSchema]), where: MatchParticipantWhereUniqueInputObjectSchema }).strict();