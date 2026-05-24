import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomCubeTypeScalarWhereInputObjectSchema as CustomCubeTypeScalarWhereInputObjectSchema } from './CustomCubeTypeScalarWhereInput.schema';
import { CustomCubeTypeUpdateManyMutationInputObjectSchema as CustomCubeTypeUpdateManyMutationInputObjectSchema } from './CustomCubeTypeUpdateManyMutationInput.schema';
import { CustomCubeTypeUncheckedUpdateManyWithoutSettingInputObjectSchema as CustomCubeTypeUncheckedUpdateManyWithoutSettingInputObjectSchema } from './CustomCubeTypeUncheckedUpdateManyWithoutSettingInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomCubeTypeScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CustomCubeTypeUpdateManyMutationInputObjectSchema), z.lazy(() => CustomCubeTypeUncheckedUpdateManyWithoutSettingInputObjectSchema)])
}).strict();
export const CustomCubeTypeUpdateManyWithWhereWithoutSettingInputObjectSchema: z.ZodType<Prisma.CustomCubeTypeUpdateManyWithWhereWithoutSettingInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomCubeTypeUpdateManyWithWhereWithoutSettingInput>;
export const CustomCubeTypeUpdateManyWithWhereWithoutSettingInputObjectZodSchema = makeSchema();
