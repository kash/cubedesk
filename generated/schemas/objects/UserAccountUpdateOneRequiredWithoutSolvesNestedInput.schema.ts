import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutSolvesInputObjectSchema as UserAccountCreateWithoutSolvesInputObjectSchema } from './UserAccountCreateWithoutSolvesInput.schema';
import { UserAccountUncheckedCreateWithoutSolvesInputObjectSchema as UserAccountUncheckedCreateWithoutSolvesInputObjectSchema } from './UserAccountUncheckedCreateWithoutSolvesInput.schema';
import { UserAccountCreateOrConnectWithoutSolvesInputObjectSchema as UserAccountCreateOrConnectWithoutSolvesInputObjectSchema } from './UserAccountCreateOrConnectWithoutSolvesInput.schema';
import { UserAccountUpsertWithoutSolvesInputObjectSchema as UserAccountUpsertWithoutSolvesInputObjectSchema } from './UserAccountUpsertWithoutSolvesInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutSolvesInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutSolvesInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutSolvesInput.schema';
import { UserAccountUpdateWithoutSolvesInputObjectSchema as UserAccountUpdateWithoutSolvesInputObjectSchema } from './UserAccountUpdateWithoutSolvesInput.schema';
import { UserAccountUncheckedUpdateWithoutSolvesInputObjectSchema as UserAccountUncheckedUpdateWithoutSolvesInputObjectSchema } from './UserAccountUncheckedUpdateWithoutSolvesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutSolvesInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutSolvesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutSolvesInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutSolvesInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutSolvesInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutSolvesInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutSolvesInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneRequiredWithoutSolvesNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutSolvesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutSolvesNestedInput>;
export const UserAccountUpdateOneRequiredWithoutSolvesNestedInputObjectZodSchema = makeSchema();
