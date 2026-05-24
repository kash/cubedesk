import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutElo_ratingInputObjectSchema as UserAccountCreateWithoutElo_ratingInputObjectSchema } from './UserAccountCreateWithoutElo_ratingInput.schema';
import { UserAccountUncheckedCreateWithoutElo_ratingInputObjectSchema as UserAccountUncheckedCreateWithoutElo_ratingInputObjectSchema } from './UserAccountUncheckedCreateWithoutElo_ratingInput.schema';
import { UserAccountCreateOrConnectWithoutElo_ratingInputObjectSchema as UserAccountCreateOrConnectWithoutElo_ratingInputObjectSchema } from './UserAccountCreateOrConnectWithoutElo_ratingInput.schema';
import { UserAccountUpsertWithoutElo_ratingInputObjectSchema as UserAccountUpsertWithoutElo_ratingInputObjectSchema } from './UserAccountUpsertWithoutElo_ratingInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutElo_ratingInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutElo_ratingInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutElo_ratingInput.schema';
import { UserAccountUpdateWithoutElo_ratingInputObjectSchema as UserAccountUpdateWithoutElo_ratingInputObjectSchema } from './UserAccountUpdateWithoutElo_ratingInput.schema';
import { UserAccountUncheckedUpdateWithoutElo_ratingInputObjectSchema as UserAccountUncheckedUpdateWithoutElo_ratingInputObjectSchema } from './UserAccountUncheckedUpdateWithoutElo_ratingInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutElo_ratingInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutElo_ratingInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutElo_ratingInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutElo_ratingInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutElo_ratingInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutElo_ratingInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutElo_ratingInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneRequiredWithoutElo_ratingNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutElo_ratingNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutElo_ratingNestedInput>;
export const UserAccountUpdateOneRequiredWithoutElo_ratingNestedInputObjectZodSchema = makeSchema();
