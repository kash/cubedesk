import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchParticipantCreateManyInputObjectSchema as MatchParticipantCreateManyInputObjectSchema } from './objects/MatchParticipantCreateManyInput.schema';

export const MatchParticipantCreateManySchema: z.ZodType<Prisma.MatchParticipantCreateManyArgs> = z.object({ data: z.union([ MatchParticipantCreateManyInputObjectSchema, z.array(MatchParticipantCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.MatchParticipantCreateManyArgs>;

export const MatchParticipantCreateManyZodSchema = z.object({ data: z.union([ MatchParticipantCreateManyInputObjectSchema, z.array(MatchParticipantCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();