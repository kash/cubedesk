import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { UserAccountSelectObjectSchema as UserAccountSelectObjectSchema } from './objects/UserAccountSelect.schema';
import { UserAccountIncludeObjectSchema as UserAccountIncludeObjectSchema } from './objects/UserAccountInclude.schema';
import { UserAccountUpdateInputObjectSchema as UserAccountUpdateInputObjectSchema } from './objects/UserAccountUpdateInput.schema';
import { UserAccountUncheckedUpdateInputObjectSchema as UserAccountUncheckedUpdateInputObjectSchema } from './objects/UserAccountUncheckedUpdateInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './objects/UserAccountWhereUniqueInput.schema';

export const UserAccountUpdateOneSchema: z.ZodType<Prisma.UserAccountUpdateArgs> = z.object({ select: UserAccountSelectObjectSchema.optional(), include: UserAccountIncludeObjectSchema.optional(), data: z.union([UserAccountUpdateInputObjectSchema, UserAccountUncheckedUpdateInputObjectSchema]), where: UserAccountWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UserAccountUpdateArgs>;

export const UserAccountUpdateOneZodSchema = z.object({ select: UserAccountSelectObjectSchema.optional(), include: UserAccountIncludeObjectSchema.optional(), data: z.union([UserAccountUpdateInputObjectSchema, UserAccountUncheckedUpdateInputObjectSchema]), where: UserAccountWhereUniqueInputObjectSchema }).strict();