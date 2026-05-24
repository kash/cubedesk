import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutMatches_wonInputObjectSchema as UserAccountCreateWithoutMatches_wonInputObjectSchema } from './UserAccountCreateWithoutMatches_wonInput.schema';
import { UserAccountUncheckedCreateWithoutMatches_wonInputObjectSchema as UserAccountUncheckedCreateWithoutMatches_wonInputObjectSchema } from './UserAccountUncheckedCreateWithoutMatches_wonInput.schema';
import { UserAccountCreateOrConnectWithoutMatches_wonInputObjectSchema as UserAccountCreateOrConnectWithoutMatches_wonInputObjectSchema } from './UserAccountCreateOrConnectWithoutMatches_wonInput.schema';
import { UserAccountUpsertWithoutMatches_wonInputObjectSchema as UserAccountUpsertWithoutMatches_wonInputObjectSchema } from './UserAccountUpsertWithoutMatches_wonInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutMatches_wonInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutMatches_wonInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutMatches_wonInput.schema';
import { UserAccountUpdateWithoutMatches_wonInputObjectSchema as UserAccountUpdateWithoutMatches_wonInputObjectSchema } from './UserAccountUpdateWithoutMatches_wonInput.schema';
import { UserAccountUncheckedUpdateWithoutMatches_wonInputObjectSchema as UserAccountUncheckedUpdateWithoutMatches_wonInputObjectSchema } from './UserAccountUncheckedUpdateWithoutMatches_wonInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutMatches_wonInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutMatches_wonInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutMatches_wonInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutMatches_wonInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutMatches_wonInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutMatches_wonInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutMatches_wonInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneWithoutMatches_wonNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneWithoutMatches_wonNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneWithoutMatches_wonNestedInput>;
export const UserAccountUpdateOneWithoutMatches_wonNestedInputObjectZodSchema = makeSchema();
