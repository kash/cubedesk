import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { CustomTrainerUncheckedUpdateManyWithoutCopy_ofNestedInputObjectSchema as CustomTrainerUncheckedUpdateManyWithoutCopy_ofNestedInputObjectSchema } from './CustomTrainerUncheckedUpdateManyWithoutCopy_ofNestedInput.schema';
import { CustomTrainerDownloadUncheckedUpdateManyWithoutNew_trainerNestedInputObjectSchema as CustomTrainerDownloadUncheckedUpdateManyWithoutNew_trainerNestedInputObjectSchema } from './CustomTrainerDownloadUncheckedUpdateManyWithoutNew_trainerNestedInput.schema';
import { CustomTrainerDownloadUncheckedUpdateManyWithoutSource_trainerNestedInputObjectSchema as CustomTrainerDownloadUncheckedUpdateManyWithoutSource_trainerNestedInputObjectSchema } from './CustomTrainerDownloadUncheckedUpdateManyWithoutSource_trainerNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  colors: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  cube_type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  key: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  user_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  like_count: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  private: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  copy_of_id: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  downloaded: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  group_name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  scrambles: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  solution: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  alt_solutions: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  three_d: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  algo_type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  copies: z.lazy(() => CustomTrainerUncheckedUpdateManyWithoutCopy_ofNestedInputObjectSchema).optional(),
  download_of: z.lazy(() => CustomTrainerDownloadUncheckedUpdateManyWithoutNew_trainerNestedInputObjectSchema).optional(),
  downloads: z.lazy(() => CustomTrainerDownloadUncheckedUpdateManyWithoutSource_trainerNestedInputObjectSchema).optional()
}).strict();
export const CustomTrainerUncheckedUpdateWithoutLikesInputObjectSchema: z.ZodType<Prisma.CustomTrainerUncheckedUpdateWithoutLikesInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerUncheckedUpdateWithoutLikesInput>;
export const CustomTrainerUncheckedUpdateWithoutLikesInputObjectZodSchema = makeSchema();
