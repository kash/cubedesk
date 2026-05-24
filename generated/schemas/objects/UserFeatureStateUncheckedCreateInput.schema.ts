import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  user_id: z.string(),
  received_welcome_screen: z.boolean().optional(),
  created_at: z.coerce.date().optional()
}).strict();
export const UserFeatureStateUncheckedCreateInputObjectSchema: z.ZodType<Prisma.UserFeatureStateUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFeatureStateUncheckedCreateInput>;
export const UserFeatureStateUncheckedCreateInputObjectZodSchema = makeSchema();
