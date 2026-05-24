import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './objects/UserAccountWhereInput.schema';

export const UserAccountDeleteManySchema: z.ZodType<Prisma.UserAccountDeleteManyArgs> = z.object({ where: UserAccountWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UserAccountDeleteManyArgs>;

export const UserAccountDeleteManyZodSchema = z.object({ where: UserAccountWhereInputObjectSchema.optional() }).strict();