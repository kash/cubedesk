import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SettingCreateWithoutCustom_cube_typesInputObjectSchema as SettingCreateWithoutCustom_cube_typesInputObjectSchema } from './SettingCreateWithoutCustom_cube_typesInput.schema';
import { SettingUncheckedCreateWithoutCustom_cube_typesInputObjectSchema as SettingUncheckedCreateWithoutCustom_cube_typesInputObjectSchema } from './SettingUncheckedCreateWithoutCustom_cube_typesInput.schema';
import { SettingCreateOrConnectWithoutCustom_cube_typesInputObjectSchema as SettingCreateOrConnectWithoutCustom_cube_typesInputObjectSchema } from './SettingCreateOrConnectWithoutCustom_cube_typesInput.schema';
import { SettingWhereUniqueInputObjectSchema as SettingWhereUniqueInputObjectSchema } from './SettingWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SettingCreateWithoutCustom_cube_typesInputObjectSchema), z.lazy(() => SettingUncheckedCreateWithoutCustom_cube_typesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SettingCreateOrConnectWithoutCustom_cube_typesInputObjectSchema).optional(),
  connect: z.lazy(() => SettingWhereUniqueInputObjectSchema).optional()
}).strict();
export const SettingCreateNestedOneWithoutCustom_cube_typesInputObjectSchema: z.ZodType<Prisma.SettingCreateNestedOneWithoutCustom_cube_typesInput> = makeSchema() as unknown as z.ZodType<Prisma.SettingCreateNestedOneWithoutCustom_cube_typesInput>;
export const SettingCreateNestedOneWithoutCustom_cube_typesInputObjectZodSchema = makeSchema();
