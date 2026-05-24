import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TrainerFavoriteWhereInputObjectSchema as TrainerFavoriteWhereInputObjectSchema } from './TrainerFavoriteWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TrainerFavoriteWhereInputObjectSchema).optional()
}).strict();
export const UserAccountCountOutputTypeCountTrainerFavoriteArgsObjectSchema = makeSchema();
export const UserAccountCountOutputTypeCountTrainerFavoriteArgsObjectZodSchema = makeSchema();
