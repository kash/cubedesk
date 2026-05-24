import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ProfileUpdateManyMutationInputObjectSchema as ProfileUpdateManyMutationInputObjectSchema } from './objects/ProfileUpdateManyMutationInput.schema';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './objects/ProfileWhereInput.schema';

export const ProfileUpdateManySchema: z.ZodType<Prisma.ProfileUpdateManyArgs> = z.object({ data: ProfileUpdateManyMutationInputObjectSchema, where: ProfileWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProfileUpdateManyArgs>;

export const ProfileUpdateManyZodSchema = z.object({ data: ProfileUpdateManyMutationInputObjectSchema, where: ProfileWhereInputObjectSchema.optional() }).strict();