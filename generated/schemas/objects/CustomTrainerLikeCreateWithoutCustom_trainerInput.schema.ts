import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateNestedOneWithoutCustom_trainer_likesInputObjectSchema as UserAccountCreateNestedOneWithoutCustom_trainer_likesInputObjectSchema } from './UserAccountCreateNestedOneWithoutCustom_trainer_likesInput.schema';
import { UserAccountCreateNestedOneWithoutLiked_custom_trainersInputObjectSchema as UserAccountCreateNestedOneWithoutLiked_custom_trainersInputObjectSchema } from './UserAccountCreateNestedOneWithoutLiked_custom_trainersInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  creator: z.lazy(() => UserAccountCreateNestedOneWithoutCustom_trainer_likesInputObjectSchema),
  user: z.lazy(() => UserAccountCreateNestedOneWithoutLiked_custom_trainersInputObjectSchema)
}).strict();
export const CustomTrainerLikeCreateWithoutCustom_trainerInputObjectSchema: z.ZodType<Prisma.CustomTrainerLikeCreateWithoutCustom_trainerInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerLikeCreateWithoutCustom_trainerInput>;
export const CustomTrainerLikeCreateWithoutCustom_trainerInputObjectZodSchema = makeSchema();
