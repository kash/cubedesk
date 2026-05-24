import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutBadgesInputObjectSchema as UserAccountCreateWithoutBadgesInputObjectSchema } from './UserAccountCreateWithoutBadgesInput.schema';
import { UserAccountUncheckedCreateWithoutBadgesInputObjectSchema as UserAccountUncheckedCreateWithoutBadgesInputObjectSchema } from './UserAccountUncheckedCreateWithoutBadgesInput.schema';
import { UserAccountCreateOrConnectWithoutBadgesInputObjectSchema as UserAccountCreateOrConnectWithoutBadgesInputObjectSchema } from './UserAccountCreateOrConnectWithoutBadgesInput.schema';
import { UserAccountUpsertWithoutBadgesInputObjectSchema as UserAccountUpsertWithoutBadgesInputObjectSchema } from './UserAccountUpsertWithoutBadgesInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutBadgesInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutBadgesInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutBadgesInput.schema';
import { UserAccountUpdateWithoutBadgesInputObjectSchema as UserAccountUpdateWithoutBadgesInputObjectSchema } from './UserAccountUpdateWithoutBadgesInput.schema';
import { UserAccountUncheckedUpdateWithoutBadgesInputObjectSchema as UserAccountUncheckedUpdateWithoutBadgesInputObjectSchema } from './UserAccountUncheckedUpdateWithoutBadgesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutBadgesInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutBadgesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutBadgesInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutBadgesInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutBadgesInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutBadgesInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutBadgesInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneRequiredWithoutBadgesNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutBadgesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutBadgesNestedInput>;
export const UserAccountUpdateOneRequiredWithoutBadgesNestedInputObjectZodSchema = makeSchema();
