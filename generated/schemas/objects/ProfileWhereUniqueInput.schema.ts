import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  user_id: z.string().optional(),
  header_image_id: z.string().optional(),
  pfp_image_id: z.string().optional()
}).strict();
export const ProfileWhereUniqueInputObjectSchema: z.ZodType<Prisma.ProfileWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileWhereUniqueInput>;
export const ProfileWhereUniqueInputObjectZodSchema = makeSchema();
