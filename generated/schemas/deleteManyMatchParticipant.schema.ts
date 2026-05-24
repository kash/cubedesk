import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchParticipantWhereInputObjectSchema as MatchParticipantWhereInputObjectSchema } from './objects/MatchParticipantWhereInput.schema';

export const MatchParticipantDeleteManySchema: z.ZodType<Prisma.MatchParticipantDeleteManyArgs> = z.object({ where: MatchParticipantWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MatchParticipantDeleteManyArgs>;

export const MatchParticipantDeleteManyZodSchema = z.object({ where: MatchParticipantWhereInputObjectSchema.optional() }).strict();