import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ProfileScalarRelationFilterObjectSchema as ProfileScalarRelationFilterObjectSchema } from './ProfileScalarRelationFilter.schema';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema';
import { UserAccountScalarRelationFilterObjectSchema as UserAccountScalarRelationFilterObjectSchema } from './UserAccountScalarRelationFilter.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const eloratingwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => EloRatingWhereInputObjectSchema), z.lazy(() => EloRatingWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => EloRatingWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => EloRatingWhereInputObjectSchema), z.lazy(() => EloRatingWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  elo_222_rating: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  elo_333_rating: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  elo_444_rating: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  elo_overall_rating: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  profile_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  games_222_count: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  games_333_count: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  games_444_count: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  games_overall_count: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  profile: z.union([z.lazy(() => ProfileScalarRelationFilterObjectSchema), z.lazy(() => ProfileWhereInputObjectSchema)]).optional(),
  user: z.union([z.lazy(() => UserAccountScalarRelationFilterObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional()
}).strict();
export const EloRatingWhereInputObjectSchema: z.ZodType<Prisma.EloRatingWhereInput> = eloratingwhereinputSchema as unknown as z.ZodType<Prisma.EloRatingWhereInput>;
export const EloRatingWhereInputObjectZodSchema = eloratingwhereinputSchema;
