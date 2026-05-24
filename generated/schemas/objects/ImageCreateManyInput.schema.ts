import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  user_id: z.string(),
  url: z.string().optional().nullable(),
  storage_path: z.string().optional().nullable(),
  created_at: z.coerce.date().optional()
}).strict();
export const ImageCreateManyInputObjectSchema: z.ZodType<Prisma.ImageCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageCreateManyInput>;
export const ImageCreateManyInputObjectZodSchema = makeSchema();
