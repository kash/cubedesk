import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema';
import { ProfileArgsObjectSchema as ProfileArgsObjectSchema } from './ProfileArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional(),
  profile_header_image: z.union([z.boolean(), z.lazy(() => ProfileArgsObjectSchema)]).optional(),
  profile_pfp_image: z.union([z.boolean(), z.lazy(() => ProfileArgsObjectSchema)]).optional()
}).strict();
export const ImageIncludeObjectSchema: z.ZodType<Prisma.ImageInclude> = makeSchema() as unknown as z.ZodType<Prisma.ImageInclude>;
export const ImageIncludeObjectZodSchema = makeSchema();
