import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  viewer_id: z.string().optional().nullable(),
  profile_id: z.string(),
  created_at: z.coerce.date().optional(),
  profile_user_id: z.string()
}).strict();
export const ProfileViewUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ProfileViewUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileViewUncheckedCreateInput>;
export const ProfileViewUncheckedCreateInputObjectZodSchema = makeSchema();
