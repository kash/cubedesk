import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ProfileViewSelectObjectSchema as ProfileViewSelectObjectSchema } from './objects/ProfileViewSelect.schema';
import { ProfileViewIncludeObjectSchema as ProfileViewIncludeObjectSchema } from './objects/ProfileViewInclude.schema';
import { ProfileViewCreateInputObjectSchema as ProfileViewCreateInputObjectSchema } from './objects/ProfileViewCreateInput.schema';
import { ProfileViewUncheckedCreateInputObjectSchema as ProfileViewUncheckedCreateInputObjectSchema } from './objects/ProfileViewUncheckedCreateInput.schema';

export const ProfileViewCreateOneSchema: z.ZodType<Prisma.ProfileViewCreateArgs> = z.object({ select: ProfileViewSelectObjectSchema.optional(), include: ProfileViewIncludeObjectSchema.optional(), data: z.union([ProfileViewCreateInputObjectSchema, ProfileViewUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ProfileViewCreateArgs>;

export const ProfileViewCreateOneZodSchema = z.object({ select: ProfileViewSelectObjectSchema.optional(), include: ProfileViewIncludeObjectSchema.optional(), data: z.union([ProfileViewCreateInputObjectSchema, ProfileViewUncheckedCreateInputObjectSchema]) }).strict();