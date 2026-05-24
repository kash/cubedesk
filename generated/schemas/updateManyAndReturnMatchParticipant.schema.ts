import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchParticipantSelectObjectSchema as MatchParticipantSelectObjectSchema } from './objects/MatchParticipantSelect.schema';
import { MatchParticipantUpdateManyMutationInputObjectSchema as MatchParticipantUpdateManyMutationInputObjectSchema } from './objects/MatchParticipantUpdateManyMutationInput.schema';
import { MatchParticipantWhereInputObjectSchema as MatchParticipantWhereInputObjectSchema } from './objects/MatchParticipantWhereInput.schema';

export const MatchParticipantUpdateManyAndReturnSchema: z.ZodType<Prisma.MatchParticipantUpdateManyAndReturnArgs> = z.object({ select: MatchParticipantSelectObjectSchema.optional(), data: MatchParticipantUpdateManyMutationInputObjectSchema, where: MatchParticipantWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MatchParticipantUpdateManyAndReturnArgs>;

export const MatchParticipantUpdateManyAndReturnZodSchema = z.object({ select: MatchParticipantSelectObjectSchema.optional(), data: MatchParticipantUpdateManyMutationInputObjectSchema, where: MatchParticipantWhereInputObjectSchema.optional() }).strict();