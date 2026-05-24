import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  user_id: z.string(),
  received_welcome_screen: z.boolean().optional(),
  updated_at: z.coerce.date().optional(),
  created_at: z.coerce.date().optional()
}).strict();
export const UserFeatureStateCreateManyInputObjectSchema: z.ZodType<Prisma.UserFeatureStateCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFeatureStateCreateManyInput>;
export const UserFeatureStateCreateManyInputObjectZodSchema = makeSchema();
