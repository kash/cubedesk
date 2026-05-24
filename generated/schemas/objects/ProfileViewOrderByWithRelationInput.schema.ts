import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ProfileOrderByWithRelationInputObjectSchema as ProfileOrderByWithRelationInputObjectSchema } from './ProfileOrderByWithRelationInput.schema';
import { UserAccountOrderByWithRelationInputObjectSchema as UserAccountOrderByWithRelationInputObjectSchema } from './UserAccountOrderByWithRelationInput.schema';
import { ProfileViewOrderByRelevanceInputObjectSchema as ProfileViewOrderByRelevanceInputObjectSchema } from './ProfileViewOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  viewer_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  profile_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  profile_user_id: SortOrderSchema.optional(),
  profile: z.lazy(() => ProfileOrderByWithRelationInputObjectSchema).optional(),
  profile_user: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  viewer: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => ProfileViewOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const ProfileViewOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ProfileViewOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileViewOrderByWithRelationInput>;
export const ProfileViewOrderByWithRelationInputObjectZodSchema = makeSchema();
