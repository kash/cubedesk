import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ProfileSelectObjectSchema as ProfileSelectObjectSchema } from './objects/ProfileSelect.schema';
import { ProfileUpdateManyMutationInputObjectSchema as ProfileUpdateManyMutationInputObjectSchema } from './objects/ProfileUpdateManyMutationInput.schema';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './objects/ProfileWhereInput.schema';

export const ProfileUpdateManyAndReturnSchema: z.ZodType<Prisma.ProfileUpdateManyAndReturnArgs> = z.object({ select: ProfileSelectObjectSchema.optional(), data: ProfileUpdateManyMutationInputObjectSchema, where: ProfileWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProfileUpdateManyAndReturnArgs>;

export const ProfileUpdateManyAndReturnZodSchema = z.object({ select: ProfileSelectObjectSchema.optional(), data: ProfileUpdateManyMutationInputObjectSchema, where: ProfileWhereInputObjectSchema.optional() }).strict();