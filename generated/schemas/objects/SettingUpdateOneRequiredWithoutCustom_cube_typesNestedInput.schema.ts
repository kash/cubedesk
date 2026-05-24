import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SettingCreateWithoutCustom_cube_typesInputObjectSchema as SettingCreateWithoutCustom_cube_typesInputObjectSchema } from './SettingCreateWithoutCustom_cube_typesInput.schema';
import { SettingUncheckedCreateWithoutCustom_cube_typesInputObjectSchema as SettingUncheckedCreateWithoutCustom_cube_typesInputObjectSchema } from './SettingUncheckedCreateWithoutCustom_cube_typesInput.schema';
import { SettingCreateOrConnectWithoutCustom_cube_typesInputObjectSchema as SettingCreateOrConnectWithoutCustom_cube_typesInputObjectSchema } from './SettingCreateOrConnectWithoutCustom_cube_typesInput.schema';
import { SettingUpsertWithoutCustom_cube_typesInputObjectSchema as SettingUpsertWithoutCustom_cube_typesInputObjectSchema } from './SettingUpsertWithoutCustom_cube_typesInput.schema';
import { SettingWhereUniqueInputObjectSchema as SettingWhereUniqueInputObjectSchema } from './SettingWhereUniqueInput.schema';
import { SettingUpdateToOneWithWhereWithoutCustom_cube_typesInputObjectSchema as SettingUpdateToOneWithWhereWithoutCustom_cube_typesInputObjectSchema } from './SettingUpdateToOneWithWhereWithoutCustom_cube_typesInput.schema';
import { SettingUpdateWithoutCustom_cube_typesInputObjectSchema as SettingUpdateWithoutCustom_cube_typesInputObjectSchema } from './SettingUpdateWithoutCustom_cube_typesInput.schema';
import { SettingUncheckedUpdateWithoutCustom_cube_typesInputObjectSchema as SettingUncheckedUpdateWithoutCustom_cube_typesInputObjectSchema } from './SettingUncheckedUpdateWithoutCustom_cube_typesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SettingCreateWithoutCustom_cube_typesInputObjectSchema), z.lazy(() => SettingUncheckedCreateWithoutCustom_cube_typesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SettingCreateOrConnectWithoutCustom_cube_typesInputObjectSchema).optional(),
  upsert: z.lazy(() => SettingUpsertWithoutCustom_cube_typesInputObjectSchema).optional(),
  connect: z.lazy(() => SettingWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => SettingUpdateToOneWithWhereWithoutCustom_cube_typesInputObjectSchema), z.lazy(() => SettingUpdateWithoutCustom_cube_typesInputObjectSchema), z.lazy(() => SettingUncheckedUpdateWithoutCustom_cube_typesInputObjectSchema)]).optional()
}).strict();
export const SettingUpdateOneRequiredWithoutCustom_cube_typesNestedInputObjectSchema: z.ZodType<Prisma.SettingUpdateOneRequiredWithoutCustom_cube_typesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SettingUpdateOneRequiredWithoutCustom_cube_typesNestedInput>;
export const SettingUpdateOneRequiredWithoutCustom_cube_typesNestedInputObjectZodSchema = makeSchema();
