import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchParticipantSelectObjectSchema as MatchParticipantSelectObjectSchema } from './objects/MatchParticipantSelect.schema';
import { MatchParticipantIncludeObjectSchema as MatchParticipantIncludeObjectSchema } from './objects/MatchParticipantInclude.schema';
import { MatchParticipantWhereUniqueInputObjectSchema as MatchParticipantWhereUniqueInputObjectSchema } from './objects/MatchParticipantWhereUniqueInput.schema';

export const MatchParticipantFindUniqueOrThrowSchema: z.ZodType<Prisma.MatchParticipantFindUniqueOrThrowArgs> = z.object({ select: MatchParticipantSelectObjectSchema.optional(), include: MatchParticipantIncludeObjectSchema.optional(), where: MatchParticipantWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MatchParticipantFindUniqueOrThrowArgs>;

export const MatchParticipantFindUniqueOrThrowZodSchema = z.object({ select: MatchParticipantSelectObjectSchema.optional(), include: MatchParticipantIncludeObjectSchema.optional(), where: MatchParticipantWhereUniqueInputObjectSchema }).strict();