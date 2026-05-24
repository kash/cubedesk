import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileViewWhereInputObjectSchema as ProfileViewWhereInputObjectSchema } from './ProfileViewWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileViewWhereInputObjectSchema).optional()
}).strict();
export const UserAccountCountOutputTypeCountViewedProfilesArgsObjectSchema = makeSchema();
export const UserAccountCountOutputTypeCountViewedProfilesArgsObjectZodSchema = makeSchema();
