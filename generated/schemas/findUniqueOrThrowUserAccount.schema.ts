import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { UserAccountSelectObjectSchema as UserAccountSelectObjectSchema } from './objects/UserAccountSelect.schema';
import { UserAccountIncludeObjectSchema as UserAccountIncludeObjectSchema } from './objects/UserAccountInclude.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './objects/UserAccountWhereUniqueInput.schema';

export const UserAccountFindUniqueOrThrowSchema: z.ZodType<Prisma.UserAccountFindUniqueOrThrowArgs> = z.object({ select: UserAccountSelectObjectSchema.optional(), include: UserAccountIncludeObjectSchema.optional(), where: UserAccountWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UserAccountFindUniqueOrThrowArgs>;

export const UserAccountFindUniqueOrThrowZodSchema = z.object({ select: UserAccountSelectObjectSchema.optional(), include: UserAccountIncludeObjectSchema.optional(), where: UserAccountWhereUniqueInputObjectSchema }).strict();