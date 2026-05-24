import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserFeatureStateWhereInputObjectSchema as UserFeatureStateWhereInputObjectSchema } from './UserFeatureStateWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => UserFeatureStateWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => UserFeatureStateWhereInputObjectSchema).optional().nullable()
}).strict();
export const UserFeatureStateNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.UserFeatureStateNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.UserFeatureStateNullableScalarRelationFilter>;
export const UserFeatureStateNullableScalarRelationFilterObjectZodSchema = makeSchema();
