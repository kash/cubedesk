import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  received_welcome_screen: z.boolean().optional(),
  updated_at: z.coerce.date().optional(),
  created_at: z.coerce.date().optional()
}).strict();
export const UserFeatureStateUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.UserFeatureStateUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFeatureStateUncheckedCreateWithoutUserInput>;
export const UserFeatureStateUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
