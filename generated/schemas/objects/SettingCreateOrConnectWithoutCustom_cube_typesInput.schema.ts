import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SettingWhereUniqueInputObjectSchema as SettingWhereUniqueInputObjectSchema } from './SettingWhereUniqueInput.schema';
import { SettingCreateWithoutCustom_cube_typesInputObjectSchema as SettingCreateWithoutCustom_cube_typesInputObjectSchema } from './SettingCreateWithoutCustom_cube_typesInput.schema';
import { SettingUncheckedCreateWithoutCustom_cube_typesInputObjectSchema as SettingUncheckedCreateWithoutCustom_cube_typesInputObjectSchema } from './SettingUncheckedCreateWithoutCustom_cube_typesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SettingWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SettingCreateWithoutCustom_cube_typesInputObjectSchema), z.lazy(() => SettingUncheckedCreateWithoutCustom_cube_typesInputObjectSchema)])
}).strict();
export const SettingCreateOrConnectWithoutCustom_cube_typesInputObjectSchema: z.ZodType<Prisma.SettingCreateOrConnectWithoutCustom_cube_typesInput> = makeSchema() as unknown as z.ZodType<Prisma.SettingCreateOrConnectWithoutCustom_cube_typesInput>;
export const SettingCreateOrConnectWithoutCustom_cube_typesInputObjectZodSchema = makeSchema();
