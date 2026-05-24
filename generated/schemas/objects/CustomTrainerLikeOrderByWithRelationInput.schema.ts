import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserAccountOrderByWithRelationInputObjectSchema as UserAccountOrderByWithRelationInputObjectSchema } from './UserAccountOrderByWithRelationInput.schema';
import { CustomTrainerOrderByWithRelationInputObjectSchema as CustomTrainerOrderByWithRelationInputObjectSchema } from './CustomTrainerOrderByWithRelationInput.schema';
import { CustomTrainerLikeOrderByRelevanceInputObjectSchema as CustomTrainerLikeOrderByRelevanceInputObjectSchema } from './CustomTrainerLikeOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  custom_trainer_id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  creator_id: SortOrderSchema.optional(),
  creator: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  custom_trainer: z.lazy(() => CustomTrainerOrderByWithRelationInputObjectSchema).optional(),
  user: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => CustomTrainerLikeOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const CustomTrainerLikeOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CustomTrainerLikeOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerLikeOrderByWithRelationInput>;
export const CustomTrainerLikeOrderByWithRelationInputObjectZodSchema = makeSchema();
