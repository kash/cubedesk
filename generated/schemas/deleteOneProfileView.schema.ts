import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ProfileViewSelectObjectSchema as ProfileViewSelectObjectSchema } from './objects/ProfileViewSelect.schema';
import { ProfileViewIncludeObjectSchema as ProfileViewIncludeObjectSchema } from './objects/ProfileViewInclude.schema';
import { ProfileViewWhereUniqueInputObjectSchema as ProfileViewWhereUniqueInputObjectSchema } from './objects/ProfileViewWhereUniqueInput.schema';

export const ProfileViewDeleteOneSchema: z.ZodType<Prisma.ProfileViewDeleteArgs> = z.object({ select: ProfileViewSelectObjectSchema.optional(), include: ProfileViewIncludeObjectSchema.optional(), where: ProfileViewWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProfileViewDeleteArgs>;

export const ProfileViewDeleteOneZodSchema = z.object({ select: ProfileViewSelectObjectSchema.optional(), include: ProfileViewIncludeObjectSchema.optional(), where: ProfileViewWhereUniqueInputObjectSchema }).strict();