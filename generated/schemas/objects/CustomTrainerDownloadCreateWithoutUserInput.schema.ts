import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateNestedOneWithoutCustom_trainer_downloadsInputObjectSchema as UserAccountCreateNestedOneWithoutCustom_trainer_downloadsInputObjectSchema } from './UserAccountCreateNestedOneWithoutCustom_trainer_downloadsInput.schema';
import { CustomTrainerCreateNestedOneWithoutDownload_ofInputObjectSchema as CustomTrainerCreateNestedOneWithoutDownload_ofInputObjectSchema } from './CustomTrainerCreateNestedOneWithoutDownload_ofInput.schema';
import { CustomTrainerCreateNestedOneWithoutDownloadsInputObjectSchema as CustomTrainerCreateNestedOneWithoutDownloadsInputObjectSchema } from './CustomTrainerCreateNestedOneWithoutDownloadsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  creator: z.lazy(() => UserAccountCreateNestedOneWithoutCustom_trainer_downloadsInputObjectSchema),
  new_trainer: z.lazy(() => CustomTrainerCreateNestedOneWithoutDownload_ofInputObjectSchema).optional(),
  source_trainer: z.lazy(() => CustomTrainerCreateNestedOneWithoutDownloadsInputObjectSchema)
}).strict();
export const CustomTrainerDownloadCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadCreateWithoutUserInput>;
export const CustomTrainerDownloadCreateWithoutUserInputObjectZodSchema = makeSchema();
