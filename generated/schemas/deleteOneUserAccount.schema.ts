import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { UserAccountSelectObjectSchema as UserAccountSelectObjectSchema } from './objects/UserAccountSelect.schema';
import { UserAccountIncludeObjectSchema as UserAccountIncludeObjectSchema } from './objects/UserAccountInclude.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './objects/UserAccountWhereUniqueInput.schema';

export const UserAccountDeleteOneSchema: z.ZodType<Prisma.UserAccountDeleteArgs> = z.object({ select: UserAccountSelectObjectSchema.optional(), include: UserAccountIncludeObjectSchema.optional(), where: UserAccountWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UserAccountDeleteArgs>;

export const UserAccountDeleteOneZodSchema = z.object({ select: UserAccountSelectObjectSchema.optional(), include: UserAccountIncludeObjectSchema.optional(), where: UserAccountWhereUniqueInputObjectSchema }).strict();