import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SettingWhereInputObjectSchema as SettingWhereInputObjectSchema } from './SettingWhereInput.schema';
import { SettingUpdateWithoutCustom_cube_typesInputObjectSchema as SettingUpdateWithoutCustom_cube_typesInputObjectSchema } from './SettingUpdateWithoutCustom_cube_typesInput.schema';
import { SettingUncheckedUpdateWithoutCustom_cube_typesInputObjectSchema as SettingUncheckedUpdateWithoutCustom_cube_typesInputObjectSchema } from './SettingUncheckedUpdateWithoutCustom_cube_typesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SettingWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => SettingUpdateWithoutCustom_cube_typesInputObjectSchema), z.lazy(() => SettingUncheckedUpdateWithoutCustom_cube_typesInputObjectSchema)])
}).strict();
export const SettingUpdateToOneWithWhereWithoutCustom_cube_typesInputObjectSchema: z.ZodType<Prisma.SettingUpdateToOneWithWhereWithoutCustom_cube_typesInput> = makeSchema() as unknown as z.ZodType<Prisma.SettingUpdateToOneWithWhereWithoutCustom_cube_typesInput>;
export const SettingUpdateToOneWithWhereWithoutCustom_cube_typesInputObjectZodSchema = makeSchema();
