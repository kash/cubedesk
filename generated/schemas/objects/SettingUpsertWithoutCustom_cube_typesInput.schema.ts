import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SettingUpdateWithoutCustom_cube_typesInputObjectSchema as SettingUpdateWithoutCustom_cube_typesInputObjectSchema } from './SettingUpdateWithoutCustom_cube_typesInput.schema';
import { SettingUncheckedUpdateWithoutCustom_cube_typesInputObjectSchema as SettingUncheckedUpdateWithoutCustom_cube_typesInputObjectSchema } from './SettingUncheckedUpdateWithoutCustom_cube_typesInput.schema';
import { SettingCreateWithoutCustom_cube_typesInputObjectSchema as SettingCreateWithoutCustom_cube_typesInputObjectSchema } from './SettingCreateWithoutCustom_cube_typesInput.schema';
import { SettingUncheckedCreateWithoutCustom_cube_typesInputObjectSchema as SettingUncheckedCreateWithoutCustom_cube_typesInputObjectSchema } from './SettingUncheckedCreateWithoutCustom_cube_typesInput.schema';
import { SettingWhereInputObjectSchema as SettingWhereInputObjectSchema } from './SettingWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => SettingUpdateWithoutCustom_cube_typesInputObjectSchema), z.lazy(() => SettingUncheckedUpdateWithoutCustom_cube_typesInputObjectSchema)]),
  create: z.union([z.lazy(() => SettingCreateWithoutCustom_cube_typesInputObjectSchema), z.lazy(() => SettingUncheckedCreateWithoutCustom_cube_typesInputObjectSchema)]),
  where: z.lazy(() => SettingWhereInputObjectSchema).optional()
}).strict();
export const SettingUpsertWithoutCustom_cube_typesInputObjectSchema: z.ZodType<Prisma.SettingUpsertWithoutCustom_cube_typesInput> = makeSchema() as unknown as z.ZodType<Prisma.SettingUpsertWithoutCustom_cube_typesInput>;
export const SettingUpsertWithoutCustom_cube_typesInputObjectZodSchema = makeSchema();
