import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ProfileViewSelectObjectSchema as ProfileViewSelectObjectSchema } from './objects/ProfileViewSelect.schema';
import { ProfileViewIncludeObjectSchema as ProfileViewIncludeObjectSchema } from './objects/ProfileViewInclude.schema';
import { ProfileViewWhereUniqueInputObjectSchema as ProfileViewWhereUniqueInputObjectSchema } from './objects/ProfileViewWhereUniqueInput.schema';
import { ProfileViewCreateInputObjectSchema as ProfileViewCreateInputObjectSchema } from './objects/ProfileViewCreateInput.schema';
import { ProfileViewUncheckedCreateInputObjectSchema as ProfileViewUncheckedCreateInputObjectSchema } from './objects/ProfileViewUncheckedCreateInput.schema';
import { ProfileViewUpdateInputObjectSchema as ProfileViewUpdateInputObjectSchema } from './objects/ProfileViewUpdateInput.schema';
import { ProfileViewUncheckedUpdateInputObjectSchema as ProfileViewUncheckedUpdateInputObjectSchema } from './objects/ProfileViewUncheckedUpdateInput.schema';

export const ProfileViewUpsertOneSchema: z.ZodType<Prisma.ProfileViewUpsertArgs> = z.object({ select: ProfileViewSelectObjectSchema.optional(), include: ProfileViewIncludeObjectSchema.optional(), where: ProfileViewWhereUniqueInputObjectSchema, create: z.union([ ProfileViewCreateInputObjectSchema, ProfileViewUncheckedCreateInputObjectSchema ]), update: z.union([ ProfileViewUpdateInputObjectSchema, ProfileViewUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ProfileViewUpsertArgs>;

export const ProfileViewUpsertOneZodSchema = z.object({ select: ProfileViewSelectObjectSchema.optional(), include: ProfileViewIncludeObjectSchema.optional(), where: ProfileViewWhereUniqueInputObjectSchema, create: z.union([ ProfileViewCreateInputObjectSchema, ProfileViewUncheckedCreateInputObjectSchema ]), update: z.union([ ProfileViewUpdateInputObjectSchema, ProfileViewUncheckedUpdateInputObjectSchema ]) }).strict();