import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomCubeTypeWhereUniqueInputObjectSchema as CustomCubeTypeWhereUniqueInputObjectSchema } from './CustomCubeTypeWhereUniqueInput.schema';
import { CustomCubeTypeUpdateWithoutSettingInputObjectSchema as CustomCubeTypeUpdateWithoutSettingInputObjectSchema } from './CustomCubeTypeUpdateWithoutSettingInput.schema';
import { CustomCubeTypeUncheckedUpdateWithoutSettingInputObjectSchema as CustomCubeTypeUncheckedUpdateWithoutSettingInputObjectSchema } from './CustomCubeTypeUncheckedUpdateWithoutSettingInput.schema';
import { CustomCubeTypeCreateWithoutSettingInputObjectSchema as CustomCubeTypeCreateWithoutSettingInputObjectSchema } from './CustomCubeTypeCreateWithoutSettingInput.schema';
import { CustomCubeTypeUncheckedCreateWithoutSettingInputObjectSchema as CustomCubeTypeUncheckedCreateWithoutSettingInputObjectSchema } from './CustomCubeTypeUncheckedCreateWithoutSettingInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomCubeTypeWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CustomCubeTypeUpdateWithoutSettingInputObjectSchema), z.lazy(() => CustomCubeTypeUncheckedUpdateWithoutSettingInputObjectSchema)]),
  create: z.union([z.lazy(() => CustomCubeTypeCreateWithoutSettingInputObjectSchema), z.lazy(() => CustomCubeTypeUncheckedCreateWithoutSettingInputObjectSchema)])
}).strict();
export const CustomCubeTypeUpsertWithWhereUniqueWithoutSettingInputObjectSchema: z.ZodType<Prisma.CustomCubeTypeUpsertWithWhereUniqueWithoutSettingInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomCubeTypeUpsertWithWhereUniqueWithoutSettingInput>;
export const CustomCubeTypeUpsertWithWhereUniqueWithoutSettingInputObjectZodSchema = makeSchema();
