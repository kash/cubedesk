import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { UserAccountSelectObjectSchema as UserAccountSelectObjectSchema } from './objects/UserAccountSelect.schema';
import { UserAccountIncludeObjectSchema as UserAccountIncludeObjectSchema } from './objects/UserAccountInclude.schema';
import { UserAccountCreateInputObjectSchema as UserAccountCreateInputObjectSchema } from './objects/UserAccountCreateInput.schema';
import { UserAccountUncheckedCreateInputObjectSchema as UserAccountUncheckedCreateInputObjectSchema } from './objects/UserAccountUncheckedCreateInput.schema';

export const UserAccountCreateOneSchema: z.ZodType<Prisma.UserAccountCreateArgs> = z.object({ select: UserAccountSelectObjectSchema.optional(), include: UserAccountIncludeObjectSchema.optional(), data: z.union([UserAccountCreateInputObjectSchema, UserAccountUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.UserAccountCreateArgs>;

export const UserAccountCreateOneZodSchema = z.object({ select: UserAccountSelectObjectSchema.optional(), include: UserAccountIncludeObjectSchema.optional(), data: z.union([UserAccountCreateInputObjectSchema, UserAccountUncheckedCreateInputObjectSchema]) }).strict();