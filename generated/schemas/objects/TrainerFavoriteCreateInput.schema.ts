import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateNestedOneWithoutTrainer_favoriteInputObjectSchema as UserAccountCreateNestedOneWithoutTrainer_favoriteInputObjectSchema } from './UserAccountCreateNestedOneWithoutTrainer_favoriteInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  cube_key: z.string(),
  created_at: z.coerce.date().optional(),
  user: z.lazy(() => UserAccountCreateNestedOneWithoutTrainer_favoriteInputObjectSchema)
}).strict();
export const TrainerFavoriteCreateInputObjectSchema: z.ZodType<Prisma.TrainerFavoriteCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TrainerFavoriteCreateInput>;
export const TrainerFavoriteCreateInputObjectZodSchema = makeSchema();
