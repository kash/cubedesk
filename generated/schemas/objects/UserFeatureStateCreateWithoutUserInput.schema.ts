import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  received_welcome_screen: z.boolean().optional(),
  updated_at: z.coerce.date().optional(),
  created_at: z.coerce.date().optional()
}).strict();
export const UserFeatureStateCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.UserFeatureStateCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFeatureStateCreateWithoutUserInput>;
export const UserFeatureStateCreateWithoutUserInputObjectZodSchema = makeSchema();
