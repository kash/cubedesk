import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateNestedOneWithoutCustom_trainer_downloadsInputObjectSchema as UserAccountCreateNestedOneWithoutCustom_trainer_downloadsInputObjectSchema } from './UserAccountCreateNestedOneWithoutCustom_trainer_downloadsInput.schema';
import { CustomTrainerCreateNestedOneWithoutDownloadsInputObjectSchema as CustomTrainerCreateNestedOneWithoutDownloadsInputObjectSchema } from './CustomTrainerCreateNestedOneWithoutDownloadsInput.schema';
import { UserAccountCreateNestedOneWithoutCustom_trainer_downloadedInputObjectSchema as UserAccountCreateNestedOneWithoutCustom_trainer_downloadedInputObjectSchema } from './UserAccountCreateNestedOneWithoutCustom_trainer_downloadedInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  creator: z.lazy(() => UserAccountCreateNestedOneWithoutCustom_trainer_downloadsInputObjectSchema),
  source_trainer: z.lazy(() => CustomTrainerCreateNestedOneWithoutDownloadsInputObjectSchema),
  user: z.lazy(() => UserAccountCreateNestedOneWithoutCustom_trainer_downloadedInputObjectSchema)
}).strict();
export const CustomTrainerDownloadCreateWithoutNew_trainerInputObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadCreateWithoutNew_trainerInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadCreateWithoutNew_trainerInput>;
export const CustomTrainerDownloadCreateWithoutNew_trainerInputObjectZodSchema = makeSchema();
