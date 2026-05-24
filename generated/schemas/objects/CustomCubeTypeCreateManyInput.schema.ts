import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  user_id: z.string(),
  name: z.string(),
  created_at: z.coerce.date().optional(),
  scramble: z.string(),
  private: z.boolean().optional()
}).strict();
export const CustomCubeTypeCreateManyInputObjectSchema: z.ZodType<Prisma.CustomCubeTypeCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomCubeTypeCreateManyInput>;
export const CustomCubeTypeCreateManyInputObjectZodSchema = makeSchema();
