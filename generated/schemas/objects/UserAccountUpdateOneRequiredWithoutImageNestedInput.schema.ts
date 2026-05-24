import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutImageInputObjectSchema as UserAccountCreateWithoutImageInputObjectSchema } from './UserAccountCreateWithoutImageInput.schema';
import { UserAccountUncheckedCreateWithoutImageInputObjectSchema as UserAccountUncheckedCreateWithoutImageInputObjectSchema } from './UserAccountUncheckedCreateWithoutImageInput.schema';
import { UserAccountCreateOrConnectWithoutImageInputObjectSchema as UserAccountCreateOrConnectWithoutImageInputObjectSchema } from './UserAccountCreateOrConnectWithoutImageInput.schema';
import { UserAccountUpsertWithoutImageInputObjectSchema as UserAccountUpsertWithoutImageInputObjectSchema } from './UserAccountUpsertWithoutImageInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutImageInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutImageInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutImageInput.schema';
import { UserAccountUpdateWithoutImageInputObjectSchema as UserAccountUpdateWithoutImageInputObjectSchema } from './UserAccountUpdateWithoutImageInput.schema';
import { UserAccountUncheckedUpdateWithoutImageInputObjectSchema as UserAccountUncheckedUpdateWithoutImageInputObjectSchema } from './UserAccountUncheckedUpdateWithoutImageInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutImageInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutImageInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutImageInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutImageInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutImageInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutImageInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutImageInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneRequiredWithoutImageNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutImageNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutImageNestedInput>;
export const UserAccountUpdateOneRequiredWithoutImageNestedInputObjectZodSchema = makeSchema();
