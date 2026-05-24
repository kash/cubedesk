import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  url: z.string().optional().nullable(),
  storage_path: z.string().optional().nullable(),
  created_at: z.coerce.date().optional()
}).strict();
export const ImageCreateManyUserInputObjectSchema: z.ZodType<Prisma.ImageCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageCreateManyUserInput>;
export const ImageCreateManyUserInputObjectZodSchema = makeSchema();
