import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ProfileViewSelectObjectSchema as ProfileViewSelectObjectSchema } from './objects/ProfileViewSelect.schema';
import { ProfileViewUpdateManyMutationInputObjectSchema as ProfileViewUpdateManyMutationInputObjectSchema } from './objects/ProfileViewUpdateManyMutationInput.schema';
import { ProfileViewWhereInputObjectSchema as ProfileViewWhereInputObjectSchema } from './objects/ProfileViewWhereInput.schema';

export const ProfileViewUpdateManyAndReturnSchema: z.ZodType<Prisma.ProfileViewUpdateManyAndReturnArgs> = z.object({ select: ProfileViewSelectObjectSchema.optional(), data: ProfileViewUpdateManyMutationInputObjectSchema, where: ProfileViewWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProfileViewUpdateManyAndReturnArgs>;

export const ProfileViewUpdateManyAndReturnZodSchema = z.object({ select: ProfileViewSelectObjectSchema.optional(), data: ProfileViewUpdateManyMutationInputObjectSchema, where: ProfileViewWhereInputObjectSchema.optional() }).strict();