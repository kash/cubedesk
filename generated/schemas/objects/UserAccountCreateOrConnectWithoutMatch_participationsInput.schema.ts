import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutMatch_participationsInputObjectSchema as UserAccountCreateWithoutMatch_participationsInputObjectSchema } from './UserAccountCreateWithoutMatch_participationsInput.schema';
import { UserAccountUncheckedCreateWithoutMatch_participationsInputObjectSchema as UserAccountUncheckedCreateWithoutMatch_participationsInputObjectSchema } from './UserAccountUncheckedCreateWithoutMatch_participationsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutMatch_participationsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutMatch_participationsInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutMatch_participationsInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutMatch_participationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutMatch_participationsInput>;
export const UserAccountCreateOrConnectWithoutMatch_participationsInputObjectZodSchema = makeSchema();
