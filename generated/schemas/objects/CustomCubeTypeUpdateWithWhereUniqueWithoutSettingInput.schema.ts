import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomCubeTypeWhereUniqueInputObjectSchema as CustomCubeTypeWhereUniqueInputObjectSchema } from './CustomCubeTypeWhereUniqueInput.schema';
import { CustomCubeTypeUpdateWithoutSettingInputObjectSchema as CustomCubeTypeUpdateWithoutSettingInputObjectSchema } from './CustomCubeTypeUpdateWithoutSettingInput.schema';
import { CustomCubeTypeUncheckedUpdateWithoutSettingInputObjectSchema as CustomCubeTypeUncheckedUpdateWithoutSettingInputObjectSchema } from './CustomCubeTypeUncheckedUpdateWithoutSettingInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomCubeTypeWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CustomCubeTypeUpdateWithoutSettingInputObjectSchema), z.lazy(() => CustomCubeTypeUncheckedUpdateWithoutSettingInputObjectSchema)])
}).strict();
export const CustomCubeTypeUpdateWithWhereUniqueWithoutSettingInputObjectSchema: z.ZodType<Prisma.CustomCubeTypeUpdateWithWhereUniqueWithoutSettingInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomCubeTypeUpdateWithWhereUniqueWithoutSettingInput>;
export const CustomCubeTypeUpdateWithWhereUniqueWithoutSettingInputObjectZodSchema = makeSchema();
