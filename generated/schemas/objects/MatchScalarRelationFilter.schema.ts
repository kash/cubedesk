import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchWhereInputObjectSchema as MatchWhereInputObjectSchema } from './MatchWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => MatchWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => MatchWhereInputObjectSchema).optional()
}).strict();
export const MatchScalarRelationFilterObjectSchema: z.ZodType<Prisma.MatchScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.MatchScalarRelationFilter>;
export const MatchScalarRelationFilterObjectZodSchema = makeSchema();
