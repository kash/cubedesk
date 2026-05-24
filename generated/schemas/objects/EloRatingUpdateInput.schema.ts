import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ProfileUpdateOneRequiredWithoutElo_ratingNestedInputObjectSchema as ProfileUpdateOneRequiredWithoutElo_ratingNestedInputObjectSchema } from './ProfileUpdateOneRequiredWithoutElo_ratingNestedInput.schema';
import { UserAccountUpdateOneRequiredWithoutElo_ratingNestedInputObjectSchema as UserAccountUpdateOneRequiredWithoutElo_ratingNestedInputObjectSchema } from './UserAccountUpdateOneRequiredWithoutElo_ratingNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  elo_222_rating: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  elo_333_rating: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  elo_444_rating: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  elo_overall_rating: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  games_222_count: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  games_333_count: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  games_444_count: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  games_overall_count: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  profile: z.lazy(() => ProfileUpdateOneRequiredWithoutElo_ratingNestedInputObjectSchema).optional(),
  user: z.lazy(() => UserAccountUpdateOneRequiredWithoutElo_ratingNestedInputObjectSchema).optional()
}).strict();
export const EloRatingUpdateInputObjectSchema: z.ZodType<Prisma.EloRatingUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.EloRatingUpdateInput>;
export const EloRatingUpdateInputObjectZodSchema = makeSchema();
