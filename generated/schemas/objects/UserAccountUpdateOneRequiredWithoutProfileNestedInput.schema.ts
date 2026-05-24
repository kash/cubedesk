import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutProfileInputObjectSchema as UserAccountCreateWithoutProfileInputObjectSchema } from './UserAccountCreateWithoutProfileInput.schema';
import { UserAccountUncheckedCreateWithoutProfileInputObjectSchema as UserAccountUncheckedCreateWithoutProfileInputObjectSchema } from './UserAccountUncheckedCreateWithoutProfileInput.schema';
import { UserAccountCreateOrConnectWithoutProfileInputObjectSchema as UserAccountCreateOrConnectWithoutProfileInputObjectSchema } from './UserAccountCreateOrConnectWithoutProfileInput.schema';
import { UserAccountUpsertWithoutProfileInputObjectSchema as UserAccountUpsertWithoutProfileInputObjectSchema } from './UserAccountUpsertWithoutProfileInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutProfileInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutProfileInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutProfileInput.schema';
import { UserAccountUpdateWithoutProfileInputObjectSchema as UserAccountUpdateWithoutProfileInputObjectSchema } from './UserAccountUpdateWithoutProfileInput.schema';
import { UserAccountUncheckedUpdateWithoutProfileInputObjectSchema as UserAccountUncheckedUpdateWithoutProfileInputObjectSchema } from './UserAccountUncheckedUpdateWithoutProfileInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutProfileInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutProfileInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutProfileInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutProfileInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutProfileInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutProfileInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutProfileInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneRequiredWithoutProfileNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutProfileNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutProfileNestedInput>;
export const UserAccountUpdateOneRequiredWithoutProfileNestedInputObjectZodSchema = makeSchema();
