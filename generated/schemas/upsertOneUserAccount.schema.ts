import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { UserAccountSelectObjectSchema as UserAccountSelectObjectSchema } from './objects/UserAccountSelect.schema';
import { UserAccountIncludeObjectSchema as UserAccountIncludeObjectSchema } from './objects/UserAccountInclude.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './objects/UserAccountWhereUniqueInput.schema';
import { UserAccountCreateInputObjectSchema as UserAccountCreateInputObjectSchema } from './objects/UserAccountCreateInput.schema';
import { UserAccountUncheckedCreateInputObjectSchema as UserAccountUncheckedCreateInputObjectSchema } from './objects/UserAccountUncheckedCreateInput.schema';
import { UserAccountUpdateInputObjectSchema as UserAccountUpdateInputObjectSchema } from './objects/UserAccountUpdateInput.schema';
import { UserAccountUncheckedUpdateInputObjectSchema as UserAccountUncheckedUpdateInputObjectSchema } from './objects/UserAccountUncheckedUpdateInput.schema';

export const UserAccountUpsertOneSchema: z.ZodType<Prisma.UserAccountUpsertArgs> = z.object({ select: UserAccountSelectObjectSchema.optional(), include: UserAccountIncludeObjectSchema.optional(), where: UserAccountWhereUniqueInputObjectSchema, create: z.union([ UserAccountCreateInputObjectSchema, UserAccountUncheckedCreateInputObjectSchema ]), update: z.union([ UserAccountUpdateInputObjectSchema, UserAccountUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.UserAccountUpsertArgs>;

export const UserAccountUpsertOneZodSchema = z.object({ select: UserAccountSelectObjectSchema.optional(), include: UserAccountIncludeObjectSchema.optional(), where: UserAccountWhereUniqueInputObjectSchema, create: z.union([ UserAccountCreateInputObjectSchema, UserAccountUncheckedCreateInputObjectSchema ]), update: z.union([ UserAccountUpdateInputObjectSchema, UserAccountUncheckedUpdateInputObjectSchema ]) }).strict();