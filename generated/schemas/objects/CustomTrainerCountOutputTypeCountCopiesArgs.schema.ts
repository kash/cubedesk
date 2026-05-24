import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerWhereInputObjectSchema as CustomTrainerWhereInputObjectSchema } from './CustomTrainerWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerWhereInputObjectSchema).optional()
}).strict();
export const CustomTrainerCountOutputTypeCountCopiesArgsObjectSchema = makeSchema();
export const CustomTrainerCountOutputTypeCountCopiesArgsObjectZodSchema = makeSchema();
