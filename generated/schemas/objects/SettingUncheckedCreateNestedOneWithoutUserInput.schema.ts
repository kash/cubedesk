import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SettingCreateWithoutUserInputObjectSchema as SettingCreateWithoutUserInputObjectSchema } from './SettingCreateWithoutUserInput.schema';
import { SettingUncheckedCreateWithoutUserInputObjectSchema as SettingUncheckedCreateWithoutUserInputObjectSchema } from './SettingUncheckedCreateWithoutUserInput.schema';
import { SettingCreateOrConnectWithoutUserInputObjectSchema as SettingCreateOrConnectWithoutUserInputObjectSchema } from './SettingCreateOrConnectWithoutUserInput.schema';
import { SettingWhereUniqueInputObjectSchema as SettingWhereUniqueInputObjectSchema } from './SettingWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SettingCreateWithoutUserInputObjectSchema), z.lazy(() => SettingUncheckedCreateWithoutUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SettingCreateOrConnectWithoutUserInputObjectSchema).optional(),
  connect: z.lazy(() => SettingWhereUniqueInputObjectSchema).optional()
}).strict();
export const SettingUncheckedCreateNestedOneWithoutUserInputObjectSchema: z.ZodType<Prisma.SettingUncheckedCreateNestedOneWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SettingUncheckedCreateNestedOneWithoutUserInput>;
export const SettingUncheckedCreateNestedOneWithoutUserInputObjectZodSchema = makeSchema();
