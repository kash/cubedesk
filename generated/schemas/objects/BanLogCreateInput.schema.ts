import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateNestedOneWithoutBansInputObjectSchema as UserAccountCreateNestedOneWithoutBansInputObjectSchema } from './UserAccountCreateNestedOneWithoutBansInput.schema';
import { UserAccountCreateNestedOneWithoutCreated_bansInputObjectSchema as UserAccountCreateNestedOneWithoutCreated_bansInputObjectSchema } from './UserAccountCreateNestedOneWithoutCreated_bansInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  reason: z.string(),
  active: z.boolean().optional(),
  banned_until: z.coerce.date().optional().nullable(),
  minutes: z.number().int().optional().nullable(),
  forever: z.boolean().optional(),
  created_at: z.coerce.date().optional(),
  banned_user: z.lazy(() => UserAccountCreateNestedOneWithoutBansInputObjectSchema),
  created_by: z.lazy(() => UserAccountCreateNestedOneWithoutCreated_bansInputObjectSchema)
}).strict();
export const BanLogCreateInputObjectSchema: z.ZodType<Prisma.BanLogCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.BanLogCreateInput>;
export const BanLogCreateInputObjectZodSchema = makeSchema();
