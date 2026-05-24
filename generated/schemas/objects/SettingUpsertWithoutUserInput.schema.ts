import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SettingUpdateWithoutUserInputObjectSchema as SettingUpdateWithoutUserInputObjectSchema } from './SettingUpdateWithoutUserInput.schema';
import { SettingUncheckedUpdateWithoutUserInputObjectSchema as SettingUncheckedUpdateWithoutUserInputObjectSchema } from './SettingUncheckedUpdateWithoutUserInput.schema';
import { SettingCreateWithoutUserInputObjectSchema as SettingCreateWithoutUserInputObjectSchema } from './SettingCreateWithoutUserInput.schema';
import { SettingUncheckedCreateWithoutUserInputObjectSchema as SettingUncheckedCreateWithoutUserInputObjectSchema } from './SettingUncheckedCreateWithoutUserInput.schema';
import { SettingWhereInputObjectSchema as SettingWhereInputObjectSchema } from './SettingWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => SettingUpdateWithoutUserInputObjectSchema), z.lazy(() => SettingUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => SettingCreateWithoutUserInputObjectSchema), z.lazy(() => SettingUncheckedCreateWithoutUserInputObjectSchema)]),
  where: z.lazy(() => SettingWhereInputObjectSchema).optional()
}).strict();
export const SettingUpsertWithoutUserInputObjectSchema: z.ZodType<Prisma.SettingUpsertWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SettingUpsertWithoutUserInput>;
export const SettingUpsertWithoutUserInputObjectZodSchema = makeSchema();
