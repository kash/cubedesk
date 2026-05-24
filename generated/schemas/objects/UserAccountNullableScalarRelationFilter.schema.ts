import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => UserAccountWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => UserAccountWhereInputObjectSchema).optional().nullable()
}).strict();
export const UserAccountNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.UserAccountNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountNullableScalarRelationFilter>;
export const UserAccountNullableScalarRelationFilterObjectZodSchema = makeSchema();
