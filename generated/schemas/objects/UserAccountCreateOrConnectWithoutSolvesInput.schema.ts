import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutSolvesInputObjectSchema as UserAccountCreateWithoutSolvesInputObjectSchema } from './UserAccountCreateWithoutSolvesInput.schema';
import { UserAccountUncheckedCreateWithoutSolvesInputObjectSchema as UserAccountUncheckedCreateWithoutSolvesInputObjectSchema } from './UserAccountUncheckedCreateWithoutSolvesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutSolvesInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutSolvesInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutSolvesInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutSolvesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutSolvesInput>;
export const UserAccountCreateOrConnectWithoutSolvesInputObjectZodSchema = makeSchema();
