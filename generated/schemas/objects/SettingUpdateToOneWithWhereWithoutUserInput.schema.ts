import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SettingWhereInputObjectSchema as SettingWhereInputObjectSchema } from './SettingWhereInput.schema';
import { SettingUpdateWithoutUserInputObjectSchema as SettingUpdateWithoutUserInputObjectSchema } from './SettingUpdateWithoutUserInput.schema';
import { SettingUncheckedUpdateWithoutUserInputObjectSchema as SettingUncheckedUpdateWithoutUserInputObjectSchema } from './SettingUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SettingWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => SettingUpdateWithoutUserInputObjectSchema), z.lazy(() => SettingUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const SettingUpdateToOneWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.SettingUpdateToOneWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SettingUpdateToOneWithWhereWithoutUserInput>;
export const SettingUpdateToOneWithWhereWithoutUserInputObjectZodSchema = makeSchema();
