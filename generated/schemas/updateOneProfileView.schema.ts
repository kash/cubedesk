import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ProfileViewSelectObjectSchema as ProfileViewSelectObjectSchema } from './objects/ProfileViewSelect.schema';
import { ProfileViewIncludeObjectSchema as ProfileViewIncludeObjectSchema } from './objects/ProfileViewInclude.schema';
import { ProfileViewUpdateInputObjectSchema as ProfileViewUpdateInputObjectSchema } from './objects/ProfileViewUpdateInput.schema';
import { ProfileViewUncheckedUpdateInputObjectSchema as ProfileViewUncheckedUpdateInputObjectSchema } from './objects/ProfileViewUncheckedUpdateInput.schema';
import { ProfileViewWhereUniqueInputObjectSchema as ProfileViewWhereUniqueInputObjectSchema } from './objects/ProfileViewWhereUniqueInput.schema';

export const ProfileViewUpdateOneSchema: z.ZodType<Prisma.ProfileViewUpdateArgs> = z.object({ select: ProfileViewSelectObjectSchema.optional(), include: ProfileViewIncludeObjectSchema.optional(), data: z.union([ProfileViewUpdateInputObjectSchema, ProfileViewUncheckedUpdateInputObjectSchema]), where: ProfileViewWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProfileViewUpdateArgs>;

export const ProfileViewUpdateOneZodSchema = z.object({ select: ProfileViewSelectObjectSchema.optional(), include: ProfileViewIncludeObjectSchema.optional(), data: z.union([ProfileViewUpdateInputObjectSchema, ProfileViewUncheckedUpdateInputObjectSchema]), where: ProfileViewWhereUniqueInputObjectSchema }).strict();