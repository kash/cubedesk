import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './objects/ProfileWhereInput.schema';

export const ProfileDeleteManySchema: z.ZodType<Prisma.ProfileDeleteManyArgs> = z.object({ where: ProfileWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProfileDeleteManyArgs>;

export const ProfileDeleteManyZodSchema = z.object({ where: ProfileWhereInputObjectSchema.optional() }).strict();