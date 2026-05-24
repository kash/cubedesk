import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchParticipantSelectObjectSchema as MatchParticipantSelectObjectSchema } from './objects/MatchParticipantSelect.schema';
import { MatchParticipantCreateManyInputObjectSchema as MatchParticipantCreateManyInputObjectSchema } from './objects/MatchParticipantCreateManyInput.schema';

export const MatchParticipantCreateManyAndReturnSchema: z.ZodType<Prisma.MatchParticipantCreateManyAndReturnArgs> = z.object({ select: MatchParticipantSelectObjectSchema.optional(), data: z.union([ MatchParticipantCreateManyInputObjectSchema, z.array(MatchParticipantCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.MatchParticipantCreateManyAndReturnArgs>;

export const MatchParticipantCreateManyAndReturnZodSchema = z.object({ select: MatchParticipantSelectObjectSchema.optional(), data: z.union([ MatchParticipantCreateManyInputObjectSchema, z.array(MatchParticipantCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();