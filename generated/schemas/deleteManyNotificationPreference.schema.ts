import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { NotificationPreferenceWhereInputObjectSchema as NotificationPreferenceWhereInputObjectSchema } from './objects/NotificationPreferenceWhereInput.schema';

export const NotificationPreferenceDeleteManySchema: z.ZodType<Prisma.NotificationPreferenceDeleteManyArgs> = z.object({ where: NotificationPreferenceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.NotificationPreferenceDeleteManyArgs>;

export const NotificationPreferenceDeleteManyZodSchema = z.object({ where: NotificationPreferenceWhereInputObjectSchema.optional() }).strict();