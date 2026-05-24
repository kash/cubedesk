import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerCreateNestedOneWithoutCopiesInputObjectSchema as CustomTrainerCreateNestedOneWithoutCopiesInputObjectSchema } from './CustomTrainerCreateNestedOneWithoutCopiesInput.schema';
import { CustomTrainerCreateNestedManyWithoutCopy_ofInputObjectSchema as CustomTrainerCreateNestedManyWithoutCopy_ofInputObjectSchema } from './CustomTrainerCreateNestedManyWithoutCopy_ofInput.schema';
import { UserAccountCreateNestedOneWithoutCustom_trainerInputObjectSchema as UserAccountCreateNestedOneWithoutCustom_trainerInputObjectSchema } from './UserAccountCreateNestedOneWithoutCustom_trainerInput.schema';
import { CustomTrainerDownloadCreateNestedManyWithoutNew_trainerInputObjectSchema as CustomTrainerDownloadCreateNestedManyWithoutNew_trainerInputObjectSchema } from './CustomTrainerDownloadCreateNestedManyWithoutNew_trainerInput.schema';
import { CustomTrainerLikeCreateNestedManyWithoutCustom_trainerInputObjectSchema as CustomTrainerLikeCreateNestedManyWithoutCustom_trainerInputObjectSchema } from './CustomTrainerLikeCreateNestedManyWithoutCustom_trainerInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  colors: z.string().optional().nullable(),
  cube_type: z.string(),
  key: z.string(),
  created_at: z.coerce.date().optional(),
  name: z.string(),
  like_count: z.number().int().optional(),
  private: z.boolean().optional(),
  description: z.string().optional().nullable(),
  downloaded: z.boolean().optional(),
  group_name: z.string().optional().nullable(),
  scrambles: z.string().optional().nullable(),
  solution: z.string().optional().nullable(),
  alt_solutions: z.string().optional().nullable(),
  three_d: z.boolean().optional(),
  algo_type: z.string().optional(),
  copy_of: z.lazy(() => CustomTrainerCreateNestedOneWithoutCopiesInputObjectSchema).optional(),
  copies: z.lazy(() => CustomTrainerCreateNestedManyWithoutCopy_ofInputObjectSchema).optional(),
  user: z.lazy(() => UserAccountCreateNestedOneWithoutCustom_trainerInputObjectSchema),
  download_of: z.lazy(() => CustomTrainerDownloadCreateNestedManyWithoutNew_trainerInputObjectSchema).optional(),
  likes: z.lazy(() => CustomTrainerLikeCreateNestedManyWithoutCustom_trainerInputObjectSchema).optional()
}).strict();
export const CustomTrainerCreateWithoutDownloadsInputObjectSchema: z.ZodType<Prisma.CustomTrainerCreateWithoutDownloadsInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerCreateWithoutDownloadsInput>;
export const CustomTrainerCreateWithoutDownloadsInputObjectZodSchema = makeSchema();
