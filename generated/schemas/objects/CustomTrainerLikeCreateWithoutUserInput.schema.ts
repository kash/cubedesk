import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateNestedOneWithoutCustom_trainer_likesInputObjectSchema as UserAccountCreateNestedOneWithoutCustom_trainer_likesInputObjectSchema } from './UserAccountCreateNestedOneWithoutCustom_trainer_likesInput.schema';
import { CustomTrainerCreateNestedOneWithoutLikesInputObjectSchema as CustomTrainerCreateNestedOneWithoutLikesInputObjectSchema } from './CustomTrainerCreateNestedOneWithoutLikesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  creator: z.lazy(() => UserAccountCreateNestedOneWithoutCustom_trainer_likesInputObjectSchema),
  custom_trainer: z.lazy(() => CustomTrainerCreateNestedOneWithoutLikesInputObjectSchema)
}).strict();
export const CustomTrainerLikeCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.CustomTrainerLikeCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerLikeCreateWithoutUserInput>;
export const CustomTrainerLikeCreateWithoutUserInputObjectZodSchema = makeSchema();
