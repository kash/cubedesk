import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchSessionWhereInputObjectSchema as MatchSessionWhereInputObjectSchema } from './MatchSessionWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => MatchSessionWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => MatchSessionWhereInputObjectSchema).optional()
}).strict();
export const MatchSessionScalarRelationFilterObjectSchema: z.ZodType<Prisma.MatchSessionScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionScalarRelationFilter>;
export const MatchSessionScalarRelationFilterObjectZodSchema = makeSchema();
