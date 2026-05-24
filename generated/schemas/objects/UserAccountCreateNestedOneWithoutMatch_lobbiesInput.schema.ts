import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutMatch_lobbiesInputObjectSchema as UserAccountCreateWithoutMatch_lobbiesInputObjectSchema } from './UserAccountCreateWithoutMatch_lobbiesInput.schema';
import { UserAccountUncheckedCreateWithoutMatch_lobbiesInputObjectSchema as UserAccountUncheckedCreateWithoutMatch_lobbiesInputObjectSchema } from './UserAccountUncheckedCreateWithoutMatch_lobbiesInput.schema';
import { UserAccountCreateOrConnectWithoutMatch_lobbiesInputObjectSchema as UserAccountCreateOrConnectWithoutMatch_lobbiesInputObjectSchema } from './UserAccountCreateOrConnectWithoutMatch_lobbiesInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutMatch_lobbiesInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutMatch_lobbiesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutMatch_lobbiesInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutMatch_lobbiesInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutMatch_lobbiesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutMatch_lobbiesInput>;
export const UserAccountCreateNestedOneWithoutMatch_lobbiesInputObjectZodSchema = makeSchema();
