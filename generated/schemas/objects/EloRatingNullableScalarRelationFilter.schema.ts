import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloRatingWhereInputObjectSchema as EloRatingWhereInputObjectSchema } from './EloRatingWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => EloRatingWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => EloRatingWhereInputObjectSchema).optional().nullable()
}).strict();
export const EloRatingNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.EloRatingNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.EloRatingNullableScalarRelationFilter>;
export const EloRatingNullableScalarRelationFilterObjectZodSchema = makeSchema();
