import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  viewer_id: z.string().optional().nullable(),
  profile_id: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const ProfileViewCreateManyProfile_userInputObjectSchema: z.ZodType<Prisma.ProfileViewCreateManyProfile_userInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileViewCreateManyProfile_userInput>;
export const ProfileViewCreateManyProfile_userInputObjectZodSchema = makeSchema();
