import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SettingArgsObjectSchema as SettingArgsObjectSchema } from './SettingArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  name: z.boolean().optional(),
  created_at: z.boolean().optional(),
  scramble: z.boolean().optional(),
  private: z.boolean().optional(),
  setting: z.union([z.boolean(), z.lazy(() => SettingArgsObjectSchema)]).optional()
}).strict();
export const CustomCubeTypeSelectObjectSchema: z.ZodType<Prisma.CustomCubeTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.CustomCubeTypeSelect>;
export const CustomCubeTypeSelectObjectZodSchema = makeSchema();
