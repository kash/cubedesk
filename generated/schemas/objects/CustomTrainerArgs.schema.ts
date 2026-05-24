import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerSelectObjectSchema as CustomTrainerSelectObjectSchema } from './CustomTrainerSelect.schema';
import { CustomTrainerIncludeObjectSchema as CustomTrainerIncludeObjectSchema } from './CustomTrainerInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CustomTrainerSelectObjectSchema).optional(),
  include: z.lazy(() => CustomTrainerIncludeObjectSchema).optional()
}).strict();
export const CustomTrainerArgsObjectSchema = makeSchema();
export const CustomTrainerArgsObjectZodSchema = makeSchema();
