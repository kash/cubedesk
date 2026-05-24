import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutMatches_wonInputObjectSchema as UserAccountCreateWithoutMatches_wonInputObjectSchema } from './UserAccountCreateWithoutMatches_wonInput.schema';
import { UserAccountUncheckedCreateWithoutMatches_wonInputObjectSchema as UserAccountUncheckedCreateWithoutMatches_wonInputObjectSchema } from './UserAccountUncheckedCreateWithoutMatches_wonInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutMatches_wonInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutMatches_wonInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutMatches_wonInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutMatches_wonInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutMatches_wonInput>;
export const UserAccountCreateOrConnectWithoutMatches_wonInputObjectZodSchema = makeSchema();
