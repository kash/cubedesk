import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ProfileSelectObjectSchema as ProfileSelectObjectSchema } from './objects/ProfileSelect.schema';
import { ProfileCreateManyInputObjectSchema as ProfileCreateManyInputObjectSchema } from './objects/ProfileCreateManyInput.schema';

export const ProfileCreateManyAndReturnSchema: z.ZodType<Prisma.ProfileCreateManyAndReturnArgs> = z.object({ select: ProfileSelectObjectSchema.optional(), data: z.union([ ProfileCreateManyInputObjectSchema, z.array(ProfileCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ProfileCreateManyAndReturnArgs>;

export const ProfileCreateManyAndReturnZodSchema = z.object({ select: ProfileSelectObjectSchema.optional(), data: z.union([ ProfileCreateManyInputObjectSchema, z.array(ProfileCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();