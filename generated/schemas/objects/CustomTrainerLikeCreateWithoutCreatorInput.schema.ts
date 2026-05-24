import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerCreateNestedOneWithoutLikesInputObjectSchema as CustomTrainerCreateNestedOneWithoutLikesInputObjectSchema } from './CustomTrainerCreateNestedOneWithoutLikesInput.schema';
import { UserAccountCreateNestedOneWithoutLiked_custom_trainersInputObjectSchema as UserAccountCreateNestedOneWithoutLiked_custom_trainersInputObjectSchema } from './UserAccountCreateNestedOneWithoutLiked_custom_trainersInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  custom_trainer: z.lazy(() => CustomTrainerCreateNestedOneWithoutLikesInputObjectSchema),
  user: z.lazy(() => UserAccountCreateNestedOneWithoutLiked_custom_trainersInputObjectSchema)
}).strict();
export const CustomTrainerLikeCreateWithoutCreatorInputObjectSchema: z.ZodType<Prisma.CustomTrainerLikeCreateWithoutCreatorInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerLikeCreateWithoutCreatorInput>;
export const CustomTrainerLikeCreateWithoutCreatorInputObjectZodSchema = makeSchema();
