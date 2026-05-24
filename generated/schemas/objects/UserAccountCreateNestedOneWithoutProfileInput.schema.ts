import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutProfileInputObjectSchema as UserAccountCreateWithoutProfileInputObjectSchema } from './UserAccountCreateWithoutProfileInput.schema';
import { UserAccountUncheckedCreateWithoutProfileInputObjectSchema as UserAccountUncheckedCreateWithoutProfileInputObjectSchema } from './UserAccountUncheckedCreateWithoutProfileInput.schema';
import { UserAccountCreateOrConnectWithoutProfileInputObjectSchema as UserAccountCreateOrConnectWithoutProfileInputObjectSchema } from './UserAccountCreateOrConnectWithoutProfileInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutProfileInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutProfileInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutProfileInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutProfileInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutProfileInput>;
export const UserAccountCreateNestedOneWithoutProfileInputObjectZodSchema = makeSchema();
