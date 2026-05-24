import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutSolvesInputObjectSchema as UserAccountCreateWithoutSolvesInputObjectSchema } from './UserAccountCreateWithoutSolvesInput.schema';
import { UserAccountUncheckedCreateWithoutSolvesInputObjectSchema as UserAccountUncheckedCreateWithoutSolvesInputObjectSchema } from './UserAccountUncheckedCreateWithoutSolvesInput.schema';
import { UserAccountCreateOrConnectWithoutSolvesInputObjectSchema as UserAccountCreateOrConnectWithoutSolvesInputObjectSchema } from './UserAccountCreateOrConnectWithoutSolvesInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutSolvesInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutSolvesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutSolvesInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutSolvesInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutSolvesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutSolvesInput>;
export const UserAccountCreateNestedOneWithoutSolvesInputObjectZodSchema = makeSchema();
