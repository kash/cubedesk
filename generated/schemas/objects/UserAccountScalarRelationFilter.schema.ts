import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountScalarRelationFilterObjectSchema: z.ZodType<Prisma.UserAccountScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountScalarRelationFilter>;
export const UserAccountScalarRelationFilterObjectZodSchema = makeSchema();
