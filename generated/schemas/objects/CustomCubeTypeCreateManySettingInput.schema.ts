import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  created_at: z.coerce.date().optional(),
  scramble: z.string(),
  private: z.boolean().optional()
}).strict();
export const CustomCubeTypeCreateManySettingInputObjectSchema: z.ZodType<Prisma.CustomCubeTypeCreateManySettingInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomCubeTypeCreateManySettingInput>;
export const CustomCubeTypeCreateManySettingInputObjectZodSchema = makeSchema();
