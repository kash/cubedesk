import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerCountOutputTypeSelectObjectSchema as CustomTrainerCountOutputTypeSelectObjectSchema } from './CustomTrainerCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CustomTrainerCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const CustomTrainerCountOutputTypeArgsObjectSchema = makeSchema();
export const CustomTrainerCountOutputTypeArgsObjectZodSchema = makeSchema();
