import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomCubeTypeCreateWithoutSettingInputObjectSchema as CustomCubeTypeCreateWithoutSettingInputObjectSchema } from './CustomCubeTypeCreateWithoutSettingInput.schema';
import { CustomCubeTypeUncheckedCreateWithoutSettingInputObjectSchema as CustomCubeTypeUncheckedCreateWithoutSettingInputObjectSchema } from './CustomCubeTypeUncheckedCreateWithoutSettingInput.schema';
import { CustomCubeTypeCreateOrConnectWithoutSettingInputObjectSchema as CustomCubeTypeCreateOrConnectWithoutSettingInputObjectSchema } from './CustomCubeTypeCreateOrConnectWithoutSettingInput.schema';
import { CustomCubeTypeCreateManySettingInputEnvelopeObjectSchema as CustomCubeTypeCreateManySettingInputEnvelopeObjectSchema } from './CustomCubeTypeCreateManySettingInputEnvelope.schema';
import { CustomCubeTypeWhereUniqueInputObjectSchema as CustomCubeTypeWhereUniqueInputObjectSchema } from './CustomCubeTypeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomCubeTypeCreateWithoutSettingInputObjectSchema), z.lazy(() => CustomCubeTypeCreateWithoutSettingInputObjectSchema).array(), z.lazy(() => CustomCubeTypeUncheckedCreateWithoutSettingInputObjectSchema), z.lazy(() => CustomCubeTypeUncheckedCreateWithoutSettingInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CustomCubeTypeCreateOrConnectWithoutSettingInputObjectSchema), z.lazy(() => CustomCubeTypeCreateOrConnectWithoutSettingInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CustomCubeTypeCreateManySettingInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CustomCubeTypeWhereUniqueInputObjectSchema), z.lazy(() => CustomCubeTypeWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CustomCubeTypeCreateNestedManyWithoutSettingInputObjectSchema: z.ZodType<Prisma.CustomCubeTypeCreateNestedManyWithoutSettingInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomCubeTypeCreateNestedManyWithoutSettingInput>;
export const CustomCubeTypeCreateNestedManyWithoutSettingInputObjectZodSchema = makeSchema();
