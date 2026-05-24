import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateNestedOneWithoutCreated_bansInputObjectSchema as UserAccountCreateNestedOneWithoutCreated_bansInputObjectSchema } from './UserAccountCreateNestedOneWithoutCreated_bansInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  reason: z.string(),
  active: z.boolean().optional(),
  banned_until: z.coerce.date().optional().nullable(),
  minutes: z.number().int().optional().nullable(),
  forever: z.boolean().optional(),
  created_at: z.coerce.date().optional(),
  created_by: z.lazy(() => UserAccountCreateNestedOneWithoutCreated_bansInputObjectSchema)
}).strict();
export const BanLogCreateWithoutBanned_userInputObjectSchema: z.ZodType<Prisma.BanLogCreateWithoutBanned_userInput> = makeSchema() as unknown as z.ZodType<Prisma.BanLogCreateWithoutBanned_userInput>;
export const BanLogCreateWithoutBanned_userInputObjectZodSchema = makeSchema();
