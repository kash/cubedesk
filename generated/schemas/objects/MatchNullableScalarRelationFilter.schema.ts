import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchWhereInputObjectSchema as MatchWhereInputObjectSchema } from './MatchWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => MatchWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => MatchWhereInputObjectSchema).optional().nullable()
}).strict();
export const MatchNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.MatchNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.MatchNullableScalarRelationFilter>;
export const MatchNullableScalarRelationFilterObjectZodSchema = makeSchema();
