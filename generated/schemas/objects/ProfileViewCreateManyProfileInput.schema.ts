import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  viewer_id: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  profile_user_id: z.string()
}).strict();
export const ProfileViewCreateManyProfileInputObjectSchema: z.ZodType<Prisma.ProfileViewCreateManyProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileViewCreateManyProfileInput>;
export const ProfileViewCreateManyProfileInputObjectZodSchema = makeSchema();
