import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchSessionWhereInputObjectSchema as MatchSessionWhereInputObjectSchema } from './MatchSessionWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => MatchSessionWhereInputObjectSchema).optional(),
  some: z.lazy(() => MatchSessionWhereInputObjectSchema).optional(),
  none: z.lazy(() => MatchSessionWhereInputObjectSchema).optional()
}).strict();
export const MatchSessionListRelationFilterObjectSchema: z.ZodType<Prisma.MatchSessionListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionListRelationFilter>;
export const MatchSessionListRelationFilterObjectZodSchema = makeSchema();
