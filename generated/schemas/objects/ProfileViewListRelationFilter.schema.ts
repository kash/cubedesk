import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileViewWhereInputObjectSchema as ProfileViewWhereInputObjectSchema } from './ProfileViewWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ProfileViewWhereInputObjectSchema).optional(),
  some: z.lazy(() => ProfileViewWhereInputObjectSchema).optional(),
  none: z.lazy(() => ProfileViewWhereInputObjectSchema).optional()
}).strict();
export const ProfileViewListRelationFilterObjectSchema: z.ZodType<Prisma.ProfileViewListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ProfileViewListRelationFilter>;
export const ProfileViewListRelationFilterObjectZodSchema = makeSchema();
