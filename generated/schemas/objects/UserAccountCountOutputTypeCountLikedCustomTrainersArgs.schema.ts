import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerLikeWhereInputObjectSchema as CustomTrainerLikeWhereInputObjectSchema } from './CustomTrainerLikeWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerLikeWhereInputObjectSchema).optional()
}).strict();
export const UserAccountCountOutputTypeCountLikedCustomTrainersArgsObjectSchema = makeSchema();
export const UserAccountCountOutputTypeCountLikedCustomTrainersArgsObjectZodSchema = makeSchema();
