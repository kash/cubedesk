import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ProfileSelectObjectSchema as ProfileSelectObjectSchema } from './objects/ProfileSelect.schema';
import { ProfileIncludeObjectSchema as ProfileIncludeObjectSchema } from './objects/ProfileInclude.schema';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './objects/ProfileWhereUniqueInput.schema';
import { ProfileCreateInputObjectSchema as ProfileCreateInputObjectSchema } from './objects/ProfileCreateInput.schema';
import { ProfileUncheckedCreateInputObjectSchema as ProfileUncheckedCreateInputObjectSchema } from './objects/ProfileUncheckedCreateInput.schema';
import { ProfileUpdateInputObjectSchema as ProfileUpdateInputObjectSchema } from './objects/ProfileUpdateInput.schema';
import { ProfileUncheckedUpdateInputObjectSchema as ProfileUncheckedUpdateInputObjectSchema } from './objects/ProfileUncheckedUpdateInput.schema';

export const ProfileUpsertOneSchema: z.ZodType<Prisma.ProfileUpsertArgs> = z.object({ select: ProfileSelectObjectSchema.optional(), include: ProfileIncludeObjectSchema.optional(), where: ProfileWhereUniqueInputObjectSchema, create: z.union([ ProfileCreateInputObjectSchema, ProfileUncheckedCreateInputObjectSchema ]), update: z.union([ ProfileUpdateInputObjectSchema, ProfileUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ProfileUpsertArgs>;

export const ProfileUpsertOneZodSchema = z.object({ select: ProfileSelectObjectSchema.optional(), include: ProfileIncludeObjectSchema.optional(), where: ProfileWhereUniqueInputObjectSchema, create: z.union([ ProfileCreateInputObjectSchema, ProfileUncheckedCreateInputObjectSchema ]), update: z.union([ ProfileUpdateInputObjectSchema, ProfileUncheckedUpdateInputObjectSchema ]) }).strict();