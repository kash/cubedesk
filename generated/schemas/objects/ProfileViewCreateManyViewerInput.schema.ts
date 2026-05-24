import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  profile_id: z.string(),
  created_at: z.coerce.date().optional(),
  profile_user_id: z.string()
}).strict();
export const ProfileViewCreateManyViewerInputObjectSchema: z.ZodType<Prisma.ProfileViewCreateManyViewerInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileViewCreateManyViewerInput>;
export const ProfileViewCreateManyViewerInputObjectZodSchema = makeSchema();
