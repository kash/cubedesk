import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SettingWhereUniqueInputObjectSchema as SettingWhereUniqueInputObjectSchema } from './SettingWhereUniqueInput.schema';
import { SettingCreateWithoutUserInputObjectSchema as SettingCreateWithoutUserInputObjectSchema } from './SettingCreateWithoutUserInput.schema';
import { SettingUncheckedCreateWithoutUserInputObjectSchema as SettingUncheckedCreateWithoutUserInputObjectSchema } from './SettingUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SettingWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SettingCreateWithoutUserInputObjectSchema), z.lazy(() => SettingUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const SettingCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.SettingCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SettingCreateOrConnectWithoutUserInput>;
export const SettingCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
