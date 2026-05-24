import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ProfileWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ProfileWhereInputObjectSchema).optional()
}).strict();
export const ProfileScalarRelationFilterObjectSchema: z.ZodType<Prisma.ProfileScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ProfileScalarRelationFilter>;
export const ProfileScalarRelationFilterObjectZodSchema = makeSchema();
