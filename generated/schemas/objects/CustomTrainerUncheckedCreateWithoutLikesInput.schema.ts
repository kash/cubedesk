import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerUncheckedCreateNestedManyWithoutCopy_ofInputObjectSchema as CustomTrainerUncheckedCreateNestedManyWithoutCopy_ofInputObjectSchema } from './CustomTrainerUncheckedCreateNestedManyWithoutCopy_ofInput.schema';
import { CustomTrainerDownloadUncheckedCreateNestedManyWithoutNew_trainerInputObjectSchema as CustomTrainerDownloadUncheckedCreateNestedManyWithoutNew_trainerInputObjectSchema } from './CustomTrainerDownloadUncheckedCreateNestedManyWithoutNew_trainerInput.schema';
import { CustomTrainerDownloadUncheckedCreateNestedManyWithoutSource_trainerInputObjectSchema as CustomTrainerDownloadUncheckedCreateNestedManyWithoutSource_trainerInputObjectSchema } from './CustomTrainerDownloadUncheckedCreateNestedManyWithoutSource_trainerInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  colors: z.string().optional().nullable(),
  cube_type: z.string(),
  key: z.string(),
  user_id: z.string(),
  created_at: z.coerce.date().optional(),
  name: z.string(),
  like_count: z.number().int().optional(),
  private: z.boolean().optional(),
  copy_of_id: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  downloaded: z.boolean().optional(),
  group_name: z.string().optional().nullable(),
  scrambles: z.string().optional().nullable(),
  solution: z.string().optional().nullable(),
  alt_solutions: z.string().optional().nullable(),
  three_d: z.boolean().optional(),
  algo_type: z.string().optional(),
  copies: z.lazy(() => CustomTrainerUncheckedCreateNestedManyWithoutCopy_ofInputObjectSchema).optional(),
  download_of: z.lazy(() => CustomTrainerDownloadUncheckedCreateNestedManyWithoutNew_trainerInputObjectSchema).optional(),
  downloads: z.lazy(() => CustomTrainerDownloadUncheckedCreateNestedManyWithoutSource_trainerInputObjectSchema).optional()
}).strict();
export const CustomTrainerUncheckedCreateWithoutLikesInputObjectSchema: z.ZodType<Prisma.CustomTrainerUncheckedCreateWithoutLikesInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerUncheckedCreateWithoutLikesInput>;
export const CustomTrainerUncheckedCreateWithoutLikesInputObjectZodSchema = makeSchema();
