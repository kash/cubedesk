import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ProfileSelectObjectSchema as ProfileSelectObjectSchema } from './objects/ProfileSelect.schema';
import { ProfileIncludeObjectSchema as ProfileIncludeObjectSchema } from './objects/ProfileInclude.schema';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './objects/ProfileWhereUniqueInput.schema';

export const ProfileDeleteOneSchema: z.ZodType<Prisma.ProfileDeleteArgs> = z.object({ select: ProfileSelectObjectSchema.optional(), include: ProfileIncludeObjectSchema.optional(), where: ProfileWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProfileDeleteArgs>;

export const ProfileDeleteOneZodSchema = z.object({ select: ProfileSelectObjectSchema.optional(), include: ProfileIncludeObjectSchema.optional(), where: ProfileWhereUniqueInputObjectSchema }).strict();