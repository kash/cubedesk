import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  cube_key: z.boolean().optional(),
  user_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional()
}).strict();
export const TrainerFavoriteSelectObjectSchema: z.ZodType<Prisma.TrainerFavoriteSelect> = makeSchema() as unknown as z.ZodType<Prisma.TrainerFavoriteSelect>;
export const TrainerFavoriteSelectObjectZodSchema = makeSchema();
