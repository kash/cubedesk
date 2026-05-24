import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutCreated_bansInputObjectSchema as UserAccountCreateWithoutCreated_bansInputObjectSchema } from './UserAccountCreateWithoutCreated_bansInput.schema';
import { UserAccountUncheckedCreateWithoutCreated_bansInputObjectSchema as UserAccountUncheckedCreateWithoutCreated_bansInputObjectSchema } from './UserAccountUncheckedCreateWithoutCreated_bansInput.schema';
import { UserAccountCreateOrConnectWithoutCreated_bansInputObjectSchema as UserAccountCreateOrConnectWithoutCreated_bansInputObjectSchema } from './UserAccountCreateOrConnectWithoutCreated_bansInput.schema';
import { UserAccountUpsertWithoutCreated_bansInputObjectSchema as UserAccountUpsertWithoutCreated_bansInputObjectSchema } from './UserAccountUpsertWithoutCreated_bansInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutCreated_bansInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutCreated_bansInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutCreated_bansInput.schema';
import { UserAccountUpdateWithoutCreated_bansInputObjectSchema as UserAccountUpdateWithoutCreated_bansInputObjectSchema } from './UserAccountUpdateWithoutCreated_bansInput.schema';
import { UserAccountUncheckedUpdateWithoutCreated_bansInputObjectSchema as UserAccountUncheckedUpdateWithoutCreated_bansInputObjectSchema } from './UserAccountUncheckedUpdateWithoutCreated_bansInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutCreated_bansInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutCreated_bansInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutCreated_bansInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutCreated_bansInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutCreated_bansInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutCreated_bansInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutCreated_bansInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneRequiredWithoutCreated_bansNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutCreated_bansNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutCreated_bansNestedInput>;
export const UserAccountUpdateOneRequiredWithoutCreated_bansNestedInputObjectZodSchema = makeSchema();
