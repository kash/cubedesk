import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SettingCreateNestedOneWithoutCustom_cube_typesInputObjectSchema as SettingCreateNestedOneWithoutCustom_cube_typesInputObjectSchema } from './SettingCreateNestedOneWithoutCustom_cube_typesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  created_at: z.coerce.date().optional(),
  scramble: z.string(),
  private: z.boolean().optional(),
  setting: z.lazy(() => SettingCreateNestedOneWithoutCustom_cube_typesInputObjectSchema)
}).strict();
export const CustomCubeTypeCreateInputObjectSchema: z.ZodType<Prisma.CustomCubeTypeCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomCubeTypeCreateInput>;
export const CustomCubeTypeCreateInputObjectZodSchema = makeSchema();
