import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserAccountOrderByWithRelationInputObjectSchema as UserAccountOrderByWithRelationInputObjectSchema } from './UserAccountOrderByWithRelationInput.schema';
import { CustomTrainerOrderByWithRelationInputObjectSchema as CustomTrainerOrderByWithRelationInputObjectSchema } from './CustomTrainerOrderByWithRelationInput.schema';
import { CustomTrainerDownloadOrderByRelevanceInputObjectSchema as CustomTrainerDownloadOrderByRelevanceInputObjectSchema } from './CustomTrainerDownloadOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  creator_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  new_trainer_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  source_trainer_id: SortOrderSchema.optional(),
  creator: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  new_trainer: z.lazy(() => CustomTrainerOrderByWithRelationInputObjectSchema).optional(),
  source_trainer: z.lazy(() => CustomTrainerOrderByWithRelationInputObjectSchema).optional(),
  user: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => CustomTrainerDownloadOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const CustomTrainerDownloadOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadOrderByWithRelationInput>;
export const CustomTrainerDownloadOrderByWithRelationInputObjectZodSchema = makeSchema();
