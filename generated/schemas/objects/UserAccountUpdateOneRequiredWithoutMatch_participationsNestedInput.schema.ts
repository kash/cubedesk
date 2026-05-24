import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutMatch_participationsInputObjectSchema as UserAccountCreateWithoutMatch_participationsInputObjectSchema } from './UserAccountCreateWithoutMatch_participationsInput.schema';
import { UserAccountUncheckedCreateWithoutMatch_participationsInputObjectSchema as UserAccountUncheckedCreateWithoutMatch_participationsInputObjectSchema } from './UserAccountUncheckedCreateWithoutMatch_participationsInput.schema';
import { UserAccountCreateOrConnectWithoutMatch_participationsInputObjectSchema as UserAccountCreateOrConnectWithoutMatch_participationsInputObjectSchema } from './UserAccountCreateOrConnectWithoutMatch_participationsInput.schema';
import { UserAccountUpsertWithoutMatch_participationsInputObjectSchema as UserAccountUpsertWithoutMatch_participationsInputObjectSchema } from './UserAccountUpsertWithoutMatch_participationsInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutMatch_participationsInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutMatch_participationsInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutMatch_participationsInput.schema';
import { UserAccountUpdateWithoutMatch_participationsInputObjectSchema as UserAccountUpdateWithoutMatch_participationsInputObjectSchema } from './UserAccountUpdateWithoutMatch_participationsInput.schema';
import { UserAccountUncheckedUpdateWithoutMatch_participationsInputObjectSchema as UserAccountUncheckedUpdateWithoutMatch_participationsInputObjectSchema } from './UserAccountUncheckedUpdateWithoutMatch_participationsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutMatch_participationsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutMatch_participationsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutMatch_participationsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutMatch_participationsInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutMatch_participationsInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutMatch_participationsInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutMatch_participationsInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneRequiredWithoutMatch_participationsNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutMatch_participationsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutMatch_participationsNestedInput>;
export const UserAccountUpdateOneRequiredWithoutMatch_participationsNestedInputObjectZodSchema = makeSchema();
