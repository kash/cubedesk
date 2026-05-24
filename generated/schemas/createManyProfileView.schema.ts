import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ProfileViewCreateManyInputObjectSchema as ProfileViewCreateManyInputObjectSchema } from './objects/ProfileViewCreateManyInput.schema';

export const ProfileViewCreateManySchema: z.ZodType<Prisma.ProfileViewCreateManyArgs> = z.object({ data: z.union([ ProfileViewCreateManyInputObjectSchema, z.array(ProfileViewCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ProfileViewCreateManyArgs>;

export const ProfileViewCreateManyZodSchema = z.object({ data: z.union([ ProfileViewCreateManyInputObjectSchema, z.array(ProfileViewCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();