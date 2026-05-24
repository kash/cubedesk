import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchParticipantUpdateManyMutationInputObjectSchema as MatchParticipantUpdateManyMutationInputObjectSchema } from './objects/MatchParticipantUpdateManyMutationInput.schema';
import { MatchParticipantWhereInputObjectSchema as MatchParticipantWhereInputObjectSchema } from './objects/MatchParticipantWhereInput.schema';

export const MatchParticipantUpdateManySchema: z.ZodType<Prisma.MatchParticipantUpdateManyArgs> = z.object({ data: MatchParticipantUpdateManyMutationInputObjectSchema, where: MatchParticipantWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MatchParticipantUpdateManyArgs>;

export const MatchParticipantUpdateManyZodSchema = z.object({ data: MatchParticipantUpdateManyMutationInputObjectSchema, where: MatchParticipantWhereInputObjectSchema.optional() }).strict();