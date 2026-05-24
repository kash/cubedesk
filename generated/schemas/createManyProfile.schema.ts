import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ProfileCreateManyInputObjectSchema as ProfileCreateManyInputObjectSchema } from './objects/ProfileCreateManyInput.schema';

export const ProfileCreateManySchema: z.ZodType<Prisma.ProfileCreateManyArgs> = z.object({ data: z.union([ ProfileCreateManyInputObjectSchema, z.array(ProfileCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ProfileCreateManyArgs>;

export const ProfileCreateManyZodSchema = z.object({ data: z.union([ ProfileCreateManyInputObjectSchema, z.array(ProfileCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();