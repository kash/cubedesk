import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserAccountUpdateOneRequiredWithoutCustom_trainer_downloadsNestedInputObjectSchema as UserAccountUpdateOneRequiredWithoutCustom_trainer_downloadsNestedInputObjectSchema } from './UserAccountUpdateOneRequiredWithoutCustom_trainer_downloadsNestedInput.schema';
import { CustomTrainerUpdateOneWithoutDownload_ofNestedInputObjectSchema as CustomTrainerUpdateOneWithoutDownload_ofNestedInputObjectSchema } from './CustomTrainerUpdateOneWithoutDownload_ofNestedInput.schema';
import { CustomTrainerUpdateOneRequiredWithoutDownloadsNestedInputObjectSchema as CustomTrainerUpdateOneRequiredWithoutDownloadsNestedInputObjectSchema } from './CustomTrainerUpdateOneRequiredWithoutDownloadsNestedInput.schema';
import { UserAccountUpdateOneRequiredWithoutCustom_trainer_downloadedNestedInputObjectSchema as UserAccountUpdateOneRequiredWithoutCustom_trainer_downloadedNestedInputObjectSchema } from './UserAccountUpdateOneRequiredWithoutCustom_trainer_downloadedNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  creator: z.lazy(() => UserAccountUpdateOneRequiredWithoutCustom_trainer_downloadsNestedInputObjectSchema).optional(),
  new_trainer: z.lazy(() => CustomTrainerUpdateOneWithoutDownload_ofNestedInputObjectSchema).optional(),
  source_trainer: z.lazy(() => CustomTrainerUpdateOneRequiredWithoutDownloadsNestedInputObjectSchema).optional(),
  user: z.lazy(() => UserAccountUpdateOneRequiredWithoutCustom_trainer_downloadedNestedInputObjectSchema).optional()
}).strict();
export const CustomTrainerDownloadUpdateInputObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadUpdateInput>;
export const CustomTrainerDownloadUpdateInputObjectZodSchema = makeSchema();
