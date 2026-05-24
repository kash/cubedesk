import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ProfileWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => ProfileWhereInputObjectSchema).optional().nullable()
}).strict();
export const ProfileNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.ProfileNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ProfileNullableScalarRelationFilter>;
export const ProfileNullableScalarRelationFilterObjectZodSchema = makeSchema();
