import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  action_type: z.string(),
  action_details: z.string().optional().nullable(),
  created_at: z.coerce.date().optional()
}).strict();
export const ActionLogUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.ActionLogUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ActionLogUncheckedCreateWithoutUserInput>;
export const ActionLogUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
