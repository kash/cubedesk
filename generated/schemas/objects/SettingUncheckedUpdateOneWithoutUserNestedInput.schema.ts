import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SettingCreateWithoutUserInputObjectSchema as SettingCreateWithoutUserInputObjectSchema } from './SettingCreateWithoutUserInput.schema';
import { SettingUncheckedCreateWithoutUserInputObjectSchema as SettingUncheckedCreateWithoutUserInputObjectSchema } from './SettingUncheckedCreateWithoutUserInput.schema';
import { SettingCreateOrConnectWithoutUserInputObjectSchema as SettingCreateOrConnectWithoutUserInputObjectSchema } from './SettingCreateOrConnectWithoutUserInput.schema';
import { SettingUpsertWithoutUserInputObjectSchema as SettingUpsertWithoutUserInputObjectSchema } from './SettingUpsertWithoutUserInput.schema';
import { SettingWhereInputObjectSchema as SettingWhereInputObjectSchema } from './SettingWhereInput.schema';
import { SettingWhereUniqueInputObjectSchema as SettingWhereUniqueInputObjectSchema } from './SettingWhereUniqueInput.schema';
import { SettingUpdateToOneWithWhereWithoutUserInputObjectSchema as SettingUpdateToOneWithWhereWithoutUserInputObjectSchema } from './SettingUpdateToOneWithWhereWithoutUserInput.schema';
import { SettingUpdateWithoutUserInputObjectSchema as SettingUpdateWithoutUserInputObjectSchema } from './SettingUpdateWithoutUserInput.schema';
import { SettingUncheckedUpdateWithoutUserInputObjectSchema as SettingUncheckedUpdateWithoutUserInputObjectSchema } from './SettingUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SettingCreateWithoutUserInputObjectSchema), z.lazy(() => SettingUncheckedCreateWithoutUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SettingCreateOrConnectWithoutUserInputObjectSchema).optional(),
  upsert: z.lazy(() => SettingUpsertWithoutUserInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => SettingWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => SettingWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => SettingWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => SettingUpdateToOneWithWhereWithoutUserInputObjectSchema), z.lazy(() => SettingUpdateWithoutUserInputObjectSchema), z.lazy(() => SettingUncheckedUpdateWithoutUserInputObjectSchema)]).optional()
}).strict();
export const SettingUncheckedUpdateOneWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.SettingUncheckedUpdateOneWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SettingUncheckedUpdateOneWithoutUserNestedInput>;
export const SettingUncheckedUpdateOneWithoutUserNestedInputObjectZodSchema = makeSchema();
