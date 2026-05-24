import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserAccountOrderByWithRelationInputObjectSchema as UserAccountOrderByWithRelationInputObjectSchema } from './UserAccountOrderByWithRelationInput.schema';
import { ProfileOrderByWithRelationInputObjectSchema as ProfileOrderByWithRelationInputObjectSchema } from './ProfileOrderByWithRelationInput.schema';
import { ImageOrderByRelevanceInputObjectSchema as ImageOrderByRelevanceInputObjectSchema } from './ImageOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  url: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  storage_path: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: SortOrderSchema.optional(),
  user: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  profile_header_image: z.lazy(() => ProfileOrderByWithRelationInputObjectSchema).optional(),
  profile_pfp_image: z.lazy(() => ProfileOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => ImageOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const ImageOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ImageOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageOrderByWithRelationInput>;
export const ImageOrderByWithRelationInputObjectZodSchema = makeSchema();
