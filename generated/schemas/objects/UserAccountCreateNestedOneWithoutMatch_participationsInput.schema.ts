import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutMatch_participationsInputObjectSchema as UserAccountCreateWithoutMatch_participationsInputObjectSchema } from './UserAccountCreateWithoutMatch_participationsInput.schema';
import { UserAccountUncheckedCreateWithoutMatch_participationsInputObjectSchema as UserAccountUncheckedCreateWithoutMatch_participationsInputObjectSchema } from './UserAccountUncheckedCreateWithoutMatch_participationsInput.schema';
import { UserAccountCreateOrConnectWithoutMatch_participationsInputObjectSchema as UserAccountCreateOrConnectWithoutMatch_participationsInputObjectSchema } from './UserAccountCreateOrConnectWithoutMatch_participationsInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutMatch_participationsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutMatch_participationsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutMatch_participationsInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutMatch_participationsInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutMatch_participationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutMatch_participationsInput>;
export const UserAccountCreateNestedOneWithoutMatch_participationsInputObjectZodSchema = makeSchema();
