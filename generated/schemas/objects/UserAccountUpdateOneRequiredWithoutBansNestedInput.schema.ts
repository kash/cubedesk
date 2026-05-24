import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutBansInputObjectSchema as UserAccountCreateWithoutBansInputObjectSchema } from './UserAccountCreateWithoutBansInput.schema';
import { UserAccountUncheckedCreateWithoutBansInputObjectSchema as UserAccountUncheckedCreateWithoutBansInputObjectSchema } from './UserAccountUncheckedCreateWithoutBansInput.schema';
import { UserAccountCreateOrConnectWithoutBansInputObjectSchema as UserAccountCreateOrConnectWithoutBansInputObjectSchema } from './UserAccountCreateOrConnectWithoutBansInput.schema';
import { UserAccountUpsertWithoutBansInputObjectSchema as UserAccountUpsertWithoutBansInputObjectSchema } from './UserAccountUpsertWithoutBansInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutBansInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutBansInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutBansInput.schema';
import { UserAccountUpdateWithoutBansInputObjectSchema as UserAccountUpdateWithoutBansInputObjectSchema } from './UserAccountUpdateWithoutBansInput.schema';
import { UserAccountUncheckedUpdateWithoutBansInputObjectSchema as UserAccountUncheckedUpdateWithoutBansInputObjectSchema } from './UserAccountUncheckedUpdateWithoutBansInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutBansInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutBansInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutBansInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutBansInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutBansInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutBansInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutBansInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneRequiredWithoutBansNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutBansNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutBansNestedInput>;
export const UserAccountUpdateOneRequiredWithoutBansNestedInputObjectZodSchema = makeSchema();
