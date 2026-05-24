import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutElo_ratingInputObjectSchema as UserAccountCreateWithoutElo_ratingInputObjectSchema } from './UserAccountCreateWithoutElo_ratingInput.schema';
import { UserAccountUncheckedCreateWithoutElo_ratingInputObjectSchema as UserAccountUncheckedCreateWithoutElo_ratingInputObjectSchema } from './UserAccountUncheckedCreateWithoutElo_ratingInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutElo_ratingInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutElo_ratingInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutElo_ratingInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutElo_ratingInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutElo_ratingInput>;
export const UserAccountCreateOrConnectWithoutElo_ratingInputObjectZodSchema = makeSchema();
