import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { UserAccountUpdateManyMutationInputObjectSchema as UserAccountUpdateManyMutationInputObjectSchema } from './objects/UserAccountUpdateManyMutationInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './objects/UserAccountWhereInput.schema';

export const UserAccountUpdateManySchema: z.ZodType<Prisma.UserAccountUpdateManyArgs> = z.object({ data: UserAccountUpdateManyMutationInputObjectSchema, where: UserAccountWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UserAccountUpdateManyArgs>;

export const UserAccountUpdateManyZodSchema = z.object({ data: UserAccountUpdateManyMutationInputObjectSchema, where: UserAccountWhereInputObjectSchema.optional() }).strict();