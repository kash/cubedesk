import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchParticipantWhereInputObjectSchema as MatchParticipantWhereInputObjectSchema } from './MatchParticipantWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => MatchParticipantWhereInputObjectSchema).optional(),
  some: z.lazy(() => MatchParticipantWhereInputObjectSchema).optional(),
  none: z.lazy(() => MatchParticipantWhereInputObjectSchema).optional()
}).strict();
export const MatchParticipantListRelationFilterObjectSchema: z.ZodType<Prisma.MatchParticipantListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.MatchParticipantListRelationFilter>;
export const MatchParticipantListRelationFilterObjectZodSchema = makeSchema();
