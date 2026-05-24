import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutMatches_wonInputObjectSchema as UserAccountCreateWithoutMatches_wonInputObjectSchema } from './UserAccountCreateWithoutMatches_wonInput.schema';
import { UserAccountUncheckedCreateWithoutMatches_wonInputObjectSchema as UserAccountUncheckedCreateWithoutMatches_wonInputObjectSchema } from './UserAccountUncheckedCreateWithoutMatches_wonInput.schema';
import { UserAccountCreateOrConnectWithoutMatches_wonInputObjectSchema as UserAccountCreateOrConnectWithoutMatches_wonInputObjectSchema } from './UserAccountCreateOrConnectWithoutMatches_wonInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutMatches_wonInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutMatches_wonInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutMatches_wonInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutMatches_wonInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutMatches_wonInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutMatches_wonInput>;
export const UserAccountCreateNestedOneWithoutMatches_wonInputObjectZodSchema = makeSchema();
