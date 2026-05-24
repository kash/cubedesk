import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema';
import { ProfileArgsObjectSchema as ProfileArgsObjectSchema } from './ProfileArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  url: z.boolean().optional(),
  storage_path: z.boolean().optional(),
  created_at: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional(),
  profile_header_image: z.union([z.boolean(), z.lazy(() => ProfileArgsObjectSchema)]).optional(),
  profile_pfp_image: z.union([z.boolean(), z.lazy(() => ProfileArgsObjectSchema)]).optional()
}).strict();
export const ImageSelectObjectSchema: z.ZodType<Prisma.ImageSelect> = makeSchema() as unknown as z.ZodType<Prisma.ImageSelect>;
export const ImageSelectObjectZodSchema = makeSchema();
