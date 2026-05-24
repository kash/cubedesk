import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloRatingArgsObjectSchema as EloRatingArgsObjectSchema } from './EloRatingArgs.schema';
import { ImageArgsObjectSchema as ImageArgsObjectSchema } from './ImageArgs.schema';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema';
import { ProfileViewFindManySchema as ProfileViewFindManySchema } from '../findManyProfileView.schema';
import { ProfileCountOutputTypeArgsObjectSchema as ProfileCountOutputTypeArgsObjectSchema } from './ProfileCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  elo_rating: z.union([z.boolean(), z.lazy(() => EloRatingArgsObjectSchema)]).optional(),
  header_image: z.union([z.boolean(), z.lazy(() => ImageArgsObjectSchema)]).optional(),
  pfp_image: z.union([z.boolean(), z.lazy(() => ImageArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional(),
  views: z.union([z.boolean(), z.lazy(() => ProfileViewFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ProfileCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ProfileIncludeObjectSchema: z.ZodType<Prisma.ProfileInclude> = makeSchema() as unknown as z.ZodType<Prisma.ProfileInclude>;
export const ProfileIncludeObjectZodSchema = makeSchema();
