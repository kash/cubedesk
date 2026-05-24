import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutElo_ratingInputObjectSchema as UserAccountCreateWithoutElo_ratingInputObjectSchema } from './UserAccountCreateWithoutElo_ratingInput.schema';
import { UserAccountUncheckedCreateWithoutElo_ratingInputObjectSchema as UserAccountUncheckedCreateWithoutElo_ratingInputObjectSchema } from './UserAccountUncheckedCreateWithoutElo_ratingInput.schema';
import { UserAccountCreateOrConnectWithoutElo_ratingInputObjectSchema as UserAccountCreateOrConnectWithoutElo_ratingInputObjectSchema } from './UserAccountCreateOrConnectWithoutElo_ratingInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutElo_ratingInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutElo_ratingInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutElo_ratingInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutElo_ratingInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutElo_ratingInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutElo_ratingInput>;
export const UserAccountCreateNestedOneWithoutElo_ratingInputObjectZodSchema = makeSchema();
