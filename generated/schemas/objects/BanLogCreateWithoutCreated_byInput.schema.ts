import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateNestedOneWithoutBansInputObjectSchema as UserAccountCreateNestedOneWithoutBansInputObjectSchema } from './UserAccountCreateNestedOneWithoutBansInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  reason: z.string(),
  active: z.boolean().optional(),
  banned_until: z.coerce.date().optional().nullable(),
  minutes: z.number().int().optional().nullable(),
  forever: z.boolean().optional(),
  created_at: z.coerce.date().optional(),
  banned_user: z.lazy(() => UserAccountCreateNestedOneWithoutBansInputObjectSchema)
}).strict();
export const BanLogCreateWithoutCreated_byInputObjectSchema: z.ZodType<Prisma.BanLogCreateWithoutCreated_byInput> = makeSchema() as unknown as z.ZodType<Prisma.BanLogCreateWithoutCreated_byInput>;
export const BanLogCreateWithoutCreated_byInputObjectZodSchema = makeSchema();
