import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ProfileViewWhereInputObjectSchema as ProfileViewWhereInputObjectSchema } from './objects/ProfileViewWhereInput.schema';

export const ProfileViewDeleteManySchema: z.ZodType<Prisma.ProfileViewDeleteManyArgs> = z.object({ where: ProfileViewWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProfileViewDeleteManyArgs>;

export const ProfileViewDeleteManyZodSchema = z.object({ where: ProfileViewWhereInputObjectSchema.optional() }).strict();