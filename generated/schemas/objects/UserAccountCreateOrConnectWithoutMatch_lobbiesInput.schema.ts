import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutMatch_lobbiesInputObjectSchema as UserAccountCreateWithoutMatch_lobbiesInputObjectSchema } from './UserAccountCreateWithoutMatch_lobbiesInput.schema';
import { UserAccountUncheckedCreateWithoutMatch_lobbiesInputObjectSchema as UserAccountUncheckedCreateWithoutMatch_lobbiesInputObjectSchema } from './UserAccountUncheckedCreateWithoutMatch_lobbiesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutMatch_lobbiesInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutMatch_lobbiesInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutMatch_lobbiesInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutMatch_lobbiesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutMatch_lobbiesInput>;
export const UserAccountCreateOrConnectWithoutMatch_lobbiesInputObjectZodSchema = makeSchema();
