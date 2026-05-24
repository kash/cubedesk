import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { UserAccountSelectObjectSchema as UserAccountSelectObjectSchema } from './objects/UserAccountSelect.schema';
import { UserAccountUpdateManyMutationInputObjectSchema as UserAccountUpdateManyMutationInputObjectSchema } from './objects/UserAccountUpdateManyMutationInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './objects/UserAccountWhereInput.schema';

export const UserAccountUpdateManyAndReturnSchema: z.ZodType<Prisma.UserAccountUpdateManyAndReturnArgs> = z.object({ select: UserAccountSelectObjectSchema.optional(), data: UserAccountUpdateManyMutationInputObjectSchema, where: UserAccountWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UserAccountUpdateManyAndReturnArgs>;

export const UserAccountUpdateManyAndReturnZodSchema = z.object({ select: UserAccountSelectObjectSchema.optional(), data: UserAccountUpdateManyMutationInputObjectSchema, where: UserAccountWhereInputObjectSchema.optional() }).strict();