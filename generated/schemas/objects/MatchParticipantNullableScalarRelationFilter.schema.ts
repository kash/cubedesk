import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchParticipantWhereInputObjectSchema as MatchParticipantWhereInputObjectSchema } from './MatchParticipantWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => MatchParticipantWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => MatchParticipantWhereInputObjectSchema).optional().nullable()
}).strict();
export const MatchParticipantNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.MatchParticipantNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.MatchParticipantNullableScalarRelationFilter>;
export const MatchParticipantNullableScalarRelationFilterObjectZodSchema = makeSchema();
