import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ProfileSelectObjectSchema as ProfileSelectObjectSchema } from './objects/ProfileSelect.schema';
import { ProfileIncludeObjectSchema as ProfileIncludeObjectSchema } from './objects/ProfileInclude.schema';
import { ProfileCreateInputObjectSchema as ProfileCreateInputObjectSchema } from './objects/ProfileCreateInput.schema';
import { ProfileUncheckedCreateInputObjectSchema as ProfileUncheckedCreateInputObjectSchema } from './objects/ProfileUncheckedCreateInput.schema';

export const ProfileCreateOneSchema: z.ZodType<Prisma.ProfileCreateArgs> = z.object({ select: ProfileSelectObjectSchema.optional(), include: ProfileIncludeObjectSchema.optional(), data: z.union([ProfileCreateInputObjectSchema, ProfileUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ProfileCreateArgs>;

export const ProfileCreateOneZodSchema = z.object({ select: ProfileSelectObjectSchema.optional(), include: ProfileIncludeObjectSchema.optional(), data: z.union([ProfileCreateInputObjectSchema, ProfileUncheckedCreateInputObjectSchema]) }).strict();