import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchSessionWhereInputObjectSchema as MatchSessionWhereInputObjectSchema } from './MatchSessionWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => MatchSessionWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => MatchSessionWhereInputObjectSchema).optional().nullable()
}).strict();
export const MatchSessionNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.MatchSessionNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionNullableScalarRelationFilter>;
export const MatchSessionNullableScalarRelationFilterObjectZodSchema = makeSchema();
