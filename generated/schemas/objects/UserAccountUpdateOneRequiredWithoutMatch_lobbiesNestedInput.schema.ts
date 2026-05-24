import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutMatch_lobbiesInputObjectSchema as UserAccountCreateWithoutMatch_lobbiesInputObjectSchema } from './UserAccountCreateWithoutMatch_lobbiesInput.schema';
import { UserAccountUncheckedCreateWithoutMatch_lobbiesInputObjectSchema as UserAccountUncheckedCreateWithoutMatch_lobbiesInputObjectSchema } from './UserAccountUncheckedCreateWithoutMatch_lobbiesInput.schema';
import { UserAccountCreateOrConnectWithoutMatch_lobbiesInputObjectSchema as UserAccountCreateOrConnectWithoutMatch_lobbiesInputObjectSchema } from './UserAccountCreateOrConnectWithoutMatch_lobbiesInput.schema';
import { UserAccountUpsertWithoutMatch_lobbiesInputObjectSchema as UserAccountUpsertWithoutMatch_lobbiesInputObjectSchema } from './UserAccountUpsertWithoutMatch_lobbiesInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutMatch_lobbiesInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutMatch_lobbiesInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutMatch_lobbiesInput.schema';
import { UserAccountUpdateWithoutMatch_lobbiesInputObjectSchema as UserAccountUpdateWithoutMatch_lobbiesInputObjectSchema } from './UserAccountUpdateWithoutMatch_lobbiesInput.schema';
import { UserAccountUncheckedUpdateWithoutMatch_lobbiesInputObjectSchema as UserAccountUncheckedUpdateWithoutMatch_lobbiesInputObjectSchema } from './UserAccountUncheckedUpdateWithoutMatch_lobbiesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutMatch_lobbiesInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutMatch_lobbiesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutMatch_lobbiesInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutMatch_lobbiesInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutMatch_lobbiesInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutMatch_lobbiesInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutMatch_lobbiesInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneRequiredWithoutMatch_lobbiesNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutMatch_lobbiesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutMatch_lobbiesNestedInput>;
export const UserAccountUpdateOneRequiredWithoutMatch_lobbiesNestedInputObjectZodSchema = makeSchema();
