import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ProfileViewSelectObjectSchema as ProfileViewSelectObjectSchema } from './objects/ProfileViewSelect.schema';
import { ProfileViewCreateManyInputObjectSchema as ProfileViewCreateManyInputObjectSchema } from './objects/ProfileViewCreateManyInput.schema';

export const ProfileViewCreateManyAndReturnSchema: z.ZodType<Prisma.ProfileViewCreateManyAndReturnArgs> = z.object({ select: ProfileViewSelectObjectSchema.optional(), data: z.union([ ProfileViewCreateManyInputObjectSchema, z.array(ProfileViewCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ProfileViewCreateManyAndReturnArgs>;

export const ProfileViewCreateManyAndReturnZodSchema = z.object({ select: ProfileViewSelectObjectSchema.optional(), data: z.union([ ProfileViewCreateManyInputObjectSchema, z.array(ProfileViewCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();