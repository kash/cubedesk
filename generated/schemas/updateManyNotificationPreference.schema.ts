import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { NotificationPreferenceUpdateManyMutationInputObjectSchema as NotificationPreferenceUpdateManyMutationInputObjectSchema } from './objects/NotificationPreferenceUpdateManyMutationInput.schema';
import { NotificationPreferenceWhereInputObjectSchema as NotificationPreferenceWhereInputObjectSchema } from './objects/NotificationPreferenceWhereInput.schema';

export const NotificationPreferenceUpdateManySchema: z.ZodType<Prisma.NotificationPreferenceUpdateManyArgs> = z.object({ data: NotificationPreferenceUpdateManyMutationInputObjectSchema, where: NotificationPreferenceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.NotificationPreferenceUpdateManyArgs>;

export const NotificationPreferenceUpdateManyZodSchema = z.object({ data: NotificationPreferenceUpdateManyMutationInputObjectSchema, where: NotificationPreferenceWhereInputObjectSchema.optional() }).strict();