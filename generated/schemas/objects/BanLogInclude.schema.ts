import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema'

const makeSchema = () => z.object({
  banned_user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional(),
  created_by: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional()
}).strict();
export const BanLogIncludeObjectSchema: z.ZodType<Prisma.BanLogInclude> = makeSchema() as unknown as z.ZodType<Prisma.BanLogInclude>;
export const BanLogIncludeObjectZodSchema = makeSchema();
