import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ProfileSelectObjectSchema as ProfileSelectObjectSchema } from './objects/ProfileSelect.schema';
import { ProfileIncludeObjectSchema as ProfileIncludeObjectSchema } from './objects/ProfileInclude.schema';
import { ProfileUpdateInputObjectSchema as ProfileUpdateInputObjectSchema } from './objects/ProfileUpdateInput.schema';
import { ProfileUncheckedUpdateInputObjectSchema as ProfileUncheckedUpdateInputObjectSchema } from './objects/ProfileUncheckedUpdateInput.schema';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './objects/ProfileWhereUniqueInput.schema';

export const ProfileUpdateOneSchema: z.ZodType<Prisma.ProfileUpdateArgs> = z.object({ select: ProfileSelectObjectSchema.optional(), include: ProfileIncludeObjectSchema.optional(), data: z.union([ProfileUpdateInputObjectSchema, ProfileUncheckedUpdateInputObjectSchema]), where: ProfileWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProfileUpdateArgs>;

export const ProfileUpdateOneZodSchema = z.object({ select: ProfileSelectObjectSchema.optional(), include: ProfileIncludeObjectSchema.optional(), data: z.union([ProfileUpdateInputObjectSchema, ProfileUncheckedUpdateInputObjectSchema]), where: ProfileWhereUniqueInputObjectSchema }).strict();