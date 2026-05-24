import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomCubeTypeWhereUniqueInputObjectSchema as CustomCubeTypeWhereUniqueInputObjectSchema } from './CustomCubeTypeWhereUniqueInput.schema';
import { CustomCubeTypeCreateWithoutSettingInputObjectSchema as CustomCubeTypeCreateWithoutSettingInputObjectSchema } from './CustomCubeTypeCreateWithoutSettingInput.schema';
import { CustomCubeTypeUncheckedCreateWithoutSettingInputObjectSchema as CustomCubeTypeUncheckedCreateWithoutSettingInputObjectSchema } from './CustomCubeTypeUncheckedCreateWithoutSettingInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomCubeTypeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CustomCubeTypeCreateWithoutSettingInputObjectSchema), z.lazy(() => CustomCubeTypeUncheckedCreateWithoutSettingInputObjectSchema)])
}).strict();
export const CustomCubeTypeCreateOrConnectWithoutSettingInputObjectSchema: z.ZodType<Prisma.CustomCubeTypeCreateOrConnectWithoutSettingInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomCubeTypeCreateOrConnectWithoutSettingInput>;
export const CustomCubeTypeCreateOrConnectWithoutSettingInputObjectZodSchema = makeSchema();
