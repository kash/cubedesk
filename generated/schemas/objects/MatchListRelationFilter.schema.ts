import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchWhereInputObjectSchema as MatchWhereInputObjectSchema } from './MatchWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => MatchWhereInputObjectSchema).optional(),
  some: z.lazy(() => MatchWhereInputObjectSchema).optional(),
  none: z.lazy(() => MatchWhereInputObjectSchema).optional()
}).strict();
export const MatchListRelationFilterObjectSchema: z.ZodType<Prisma.MatchListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.MatchListRelationFilter>;
export const MatchListRelationFilterObjectZodSchema = makeSchema();
