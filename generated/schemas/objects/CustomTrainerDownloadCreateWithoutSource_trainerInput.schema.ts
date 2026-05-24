import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateNestedOneWithoutCustom_trainer_downloadsInputObjectSchema as UserAccountCreateNestedOneWithoutCustom_trainer_downloadsInputObjectSchema } from './UserAccountCreateNestedOneWithoutCustom_trainer_downloadsInput.schema';
import { CustomTrainerCreateNestedOneWithoutDownload_ofInputObjectSchema as CustomTrainerCreateNestedOneWithoutDownload_ofInputObjectSchema } from './CustomTrainerCreateNestedOneWithoutDownload_ofInput.schema';
import { UserAccountCreateNestedOneWithoutCustom_trainer_downloadedInputObjectSchema as UserAccountCreateNestedOneWithoutCustom_trainer_downloadedInputObjectSchema } from './UserAccountCreateNestedOneWithoutCustom_trainer_downloadedInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  creator: z.lazy(() => UserAccountCreateNestedOneWithoutCustom_trainer_downloadsInputObjectSchema),
  new_trainer: z.lazy(() => CustomTrainerCreateNestedOneWithoutDownload_ofInputObjectSchema).optional(),
  user: z.lazy(() => UserAccountCreateNestedOneWithoutCustom_trainer_downloadedInputObjectSchema)
}).strict();
export const CustomTrainerDownloadCreateWithoutSource_trainerInputObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadCreateWithoutSource_trainerInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadCreateWithoutSource_trainerInput>;
export const CustomTrainerDownloadCreateWithoutSource_trainerInputObjectZodSchema = makeSchema();
