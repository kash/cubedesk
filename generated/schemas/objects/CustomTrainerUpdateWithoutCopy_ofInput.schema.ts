import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { CustomTrainerUpdateManyWithoutCopy_ofNestedInputObjectSchema as CustomTrainerUpdateManyWithoutCopy_ofNestedInputObjectSchema } from './CustomTrainerUpdateManyWithoutCopy_ofNestedInput.schema';
import { UserAccountUpdateOneRequiredWithoutCustom_trainerNestedInputObjectSchema as UserAccountUpdateOneRequiredWithoutCustom_trainerNestedInputObjectSchema } from './UserAccountUpdateOneRequiredWithoutCustom_trainerNestedInput.schema';
import { CustomTrainerDownloadUpdateManyWithoutNew_trainerNestedInputObjectSchema as CustomTrainerDownloadUpdateManyWithoutNew_trainerNestedInputObjectSchema } from './CustomTrainerDownloadUpdateManyWithoutNew_trainerNestedInput.schema';
import { CustomTrainerDownloadUpdateManyWithoutSource_trainerNestedInputObjectSchema as CustomTrainerDownloadUpdateManyWithoutSource_trainerNestedInputObjectSchema } from './CustomTrainerDownloadUpdateManyWithoutSource_trainerNestedInput.schema';
import { CustomTrainerLikeUpdateManyWithoutCustom_trainerNestedInputObjectSchema as CustomTrainerLikeUpdateManyWithoutCustom_trainerNestedInputObjectSchema } from './CustomTrainerLikeUpdateManyWithoutCustom_trainerNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  colors: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  cube_type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  key: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  like_count: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  private: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  downloaded: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  group_name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  scrambles: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  solution: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  alt_solutions: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  three_d: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  algo_type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  copies: z.lazy(() => CustomTrainerUpdateManyWithoutCopy_ofNestedInputObjectSchema).optional(),
  user: z.lazy(() => UserAccountUpdateOneRequiredWithoutCustom_trainerNestedInputObjectSchema).optional(),
  download_of: z.lazy(() => CustomTrainerDownloadUpdateManyWithoutNew_trainerNestedInputObjectSchema).optional(),
  downloads: z.lazy(() => CustomTrainerDownloadUpdateManyWithoutSource_trainerNestedInputObjectSchema).optional(),
  likes: z.lazy(() => CustomTrainerLikeUpdateManyWithoutCustom_trainerNestedInputObjectSchema).optional()
}).strict();
export const CustomTrainerUpdateWithoutCopy_ofInputObjectSchema: z.ZodType<Prisma.CustomTrainerUpdateWithoutCopy_ofInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerUpdateWithoutCopy_ofInput>;
export const CustomTrainerUpdateWithoutCopy_ofInputObjectZodSchema = makeSchema();
