import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomCubeTypeCreateWithoutSettingInputObjectSchema as CustomCubeTypeCreateWithoutSettingInputObjectSchema } from './CustomCubeTypeCreateWithoutSettingInput.schema';
import { CustomCubeTypeUncheckedCreateWithoutSettingInputObjectSchema as CustomCubeTypeUncheckedCreateWithoutSettingInputObjectSchema } from './CustomCubeTypeUncheckedCreateWithoutSettingInput.schema';
import { CustomCubeTypeCreateOrConnectWithoutSettingInputObjectSchema as CustomCubeTypeCreateOrConnectWithoutSettingInputObjectSchema } from './CustomCubeTypeCreateOrConnectWithoutSettingInput.schema';
import { CustomCubeTypeUpsertWithWhereUniqueWithoutSettingInputObjectSchema as CustomCubeTypeUpsertWithWhereUniqueWithoutSettingInputObjectSchema } from './CustomCubeTypeUpsertWithWhereUniqueWithoutSettingInput.schema';
import { CustomCubeTypeCreateManySettingInputEnvelopeObjectSchema as CustomCubeTypeCreateManySettingInputEnvelopeObjectSchema } from './CustomCubeTypeCreateManySettingInputEnvelope.schema';
import { CustomCubeTypeWhereUniqueInputObjectSchema as CustomCubeTypeWhereUniqueInputObjectSchema } from './CustomCubeTypeWhereUniqueInput.schema';
import { CustomCubeTypeUpdateWithWhereUniqueWithoutSettingInputObjectSchema as CustomCubeTypeUpdateWithWhereUniqueWithoutSettingInputObjectSchema } from './CustomCubeTypeUpdateWithWhereUniqueWithoutSettingInput.schema';
import { CustomCubeTypeUpdateManyWithWhereWithoutSettingInputObjectSchema as CustomCubeTypeUpdateManyWithWhereWithoutSettingInputObjectSchema } from './CustomCubeTypeUpdateManyWithWhereWithoutSettingInput.schema';
import { CustomCubeTypeScalarWhereInputObjectSchema as CustomCubeTypeScalarWhereInputObjectSchema } from './CustomCubeTypeScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomCubeTypeCreateWithoutSettingInputObjectSchema), z.lazy(() => CustomCubeTypeCreateWithoutSettingInputObjectSchema).array(), z.lazy(() => CustomCubeTypeUncheckedCreateWithoutSettingInputObjectSchema), z.lazy(() => CustomCubeTypeUncheckedCreateWithoutSettingInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CustomCubeTypeCreateOrConnectWithoutSettingInputObjectSchema), z.lazy(() => CustomCubeTypeCreateOrConnectWithoutSettingInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CustomCubeTypeUpsertWithWhereUniqueWithoutSettingInputObjectSchema), z.lazy(() => CustomCubeTypeUpsertWithWhereUniqueWithoutSettingInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CustomCubeTypeCreateManySettingInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CustomCubeTypeWhereUniqueInputObjectSchema), z.lazy(() => CustomCubeTypeWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CustomCubeTypeWhereUniqueInputObjectSchema), z.lazy(() => CustomCubeTypeWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CustomCubeTypeWhereUniqueInputObjectSchema), z.lazy(() => CustomCubeTypeWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CustomCubeTypeWhereUniqueInputObjectSchema), z.lazy(() => CustomCubeTypeWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CustomCubeTypeUpdateWithWhereUniqueWithoutSettingInputObjectSchema), z.lazy(() => CustomCubeTypeUpdateWithWhereUniqueWithoutSettingInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CustomCubeTypeUpdateManyWithWhereWithoutSettingInputObjectSchema), z.lazy(() => CustomCubeTypeUpdateManyWithWhereWithoutSettingInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CustomCubeTypeScalarWhereInputObjectSchema), z.lazy(() => CustomCubeTypeScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CustomCubeTypeUncheckedUpdateManyWithoutSettingNestedInputObjectSchema: z.ZodType<Prisma.CustomCubeTypeUncheckedUpdateManyWithoutSettingNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomCubeTypeUncheckedUpdateManyWithoutSettingNestedInput>;
export const CustomCubeTypeUncheckedUpdateManyWithoutSettingNestedInputObjectZodSchema = makeSchema();
