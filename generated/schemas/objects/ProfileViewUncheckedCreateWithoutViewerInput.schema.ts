import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  profile_id: z.string(),
  created_at: z.coerce.date().optional(),
  profile_user_id: z.string()
}).strict();
export const ProfileViewUncheckedCreateWithoutViewerInputObjectSchema: z.ZodType<Prisma.ProfileViewUncheckedCreateWithoutViewerInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileViewUncheckedCreateWithoutViewerInput>;
export const ProfileViewUncheckedCreateWithoutViewerInputObjectZodSchema = makeSchema();
