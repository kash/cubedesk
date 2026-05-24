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
export const CustomCubeTypeUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CustomCubeTypeUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomCubeTypeUncheckedCreateInput>;
export const CustomCubeTypeUncheckedCreateInputObjectZodSchema = makeSchema();
