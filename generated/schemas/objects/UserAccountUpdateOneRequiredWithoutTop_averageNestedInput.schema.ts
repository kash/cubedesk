import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutTop_averageInputObjectSchema as UserAccountCreateWithoutTop_averageInputObjectSchema } from './UserAccountCreateWithoutTop_averageInput.schema';
import { UserAccountUncheckedCreateWithoutTop_averageInputObjectSchema as UserAccountUncheckedCreateWithoutTop_averageInputObjectSchema } from './UserAccountUncheckedCreateWithoutTop_averageInput.schema';
import { UserAccountCreateOrConnectWithoutTop_averageInputObjectSchema as UserAccountCreateOrConnectWithoutTop_averageInputObjectSchema } from './UserAccountCreateOrConnectWithoutTop_averageInput.schema';
import { UserAccountUpsertWithoutTop_averageInputObjectSchema as UserAccountUpsertWithoutTop_averageInputObjectSchema } from './UserAccountUpsertWithoutTop_averageInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutTop_averageInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutTop_averageInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutTop_averageInput.schema';
import { UserAccountUpdateWithoutTop_averageInputObjectSchema as UserAccountUpdateWithoutTop_averageInputObjectSchema } from './UserAccountUpdateWithoutTop_averageInput.schema';
import { UserAccountUncheckedUpdateWithoutTop_averageInputObjectSchema as UserAccountUncheckedUpdateWithoutTop_averageInputObjectSchema } from './UserAccountUncheckedUpdateWithoutTop_averageInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutTop_averageInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutTop_averageInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutTop_averageInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutTop_averageInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutTop_averageInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutTop_averageInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutTop_averageInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneRequiredWithoutTop_averageNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutTop_averageNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutTop_averageNestedInput>;
export const UserAccountUpdateOneRequiredWithoutTop_averageNestedInputObjectZodSchema = makeSchema();
