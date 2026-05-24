import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutTimer_backgroundInputObjectSchema as UserAccountCreateWithoutTimer_backgroundInputObjectSchema } from './UserAccountCreateWithoutTimer_backgroundInput.schema';
import { UserAccountUncheckedCreateWithoutTimer_backgroundInputObjectSchema as UserAccountUncheckedCreateWithoutTimer_backgroundInputObjectSchema } from './UserAccountUncheckedCreateWithoutTimer_backgroundInput.schema';
import { UserAccountCreateOrConnectWithoutTimer_backgroundInputObjectSchema as UserAccountCreateOrConnectWithoutTimer_backgroundInputObjectSchema } from './UserAccountCreateOrConnectWithoutTimer_backgroundInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutTimer_backgroundInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutTimer_backgroundInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutTimer_backgroundInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutTimer_backgroundInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutTimer_backgroundInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutTimer_backgroundInput>;
export const UserAccountCreateNestedOneWithoutTimer_backgroundInputObjectZodSchema = makeSchema();
