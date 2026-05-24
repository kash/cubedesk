import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ProfileViewUpdateManyMutationInputObjectSchema as ProfileViewUpdateManyMutationInputObjectSchema } from './objects/ProfileViewUpdateManyMutationInput.schema';
import { ProfileViewWhereInputObjectSchema as ProfileViewWhereInputObjectSchema } from './objects/ProfileViewWhereInput.schema';

export const ProfileViewUpdateManySchema: z.ZodType<Prisma.ProfileViewUpdateManyArgs> = z.object({ data: ProfileViewUpdateManyMutationInputObjectSchema, where: ProfileViewWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProfileViewUpdateManyArgs>;

export const ProfileViewUpdateManyZodSchema = z.object({ data: ProfileViewUpdateManyMutationInputObjectSchema, where: ProfileViewWhereInputObjectSchema.optional() }).strict();