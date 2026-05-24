import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SessionWhereInputObjectSchema as SessionWhereInputObjectSchema } from './SessionWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => SessionWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => SessionWhereInputObjectSchema).optional().nullable()
}).strict();
export const SessionNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.SessionNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.SessionNullableScalarRelationFilter>;
export const SessionNullableScalarRelationFilterObjectZodSchema = makeSchema();
