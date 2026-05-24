import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema';
import { CustomTrainerArgsObjectSchema as CustomTrainerArgsObjectSchema } from './CustomTrainerArgs.schema'

const makeSchema = () => z.object({
  creator: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional(),
  custom_trainer: z.union([z.boolean(), z.lazy(() => CustomTrainerArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional()
}).strict();
export const CustomTrainerLikeIncludeObjectSchema: z.ZodType<Prisma.CustomTrainerLikeInclude> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerLikeInclude>;
export const CustomTrainerLikeIncludeObjectZodSchema = makeSchema();
