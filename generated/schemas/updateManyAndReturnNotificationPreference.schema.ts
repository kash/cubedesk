import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { NotificationPreferenceSelectObjectSchema as NotificationPreferenceSelectObjectSchema } from './objects/NotificationPreferenceSelect.schema';
import { NotificationPreferenceUpdateManyMutationInputObjectSchema as NotificationPreferenceUpdateManyMutationInputObjectSchema } from './objects/NotificationPreferenceUpdateManyMutationInput.schema';
import { NotificationPreferenceWhereInputObjectSchema as NotificationPreferenceWhereInputObjectSchema } from './objects/NotificationPreferenceWhereInput.schema';

export const NotificationPreferenceUpdateManyAndReturnSchema: z.ZodType<Prisma.NotificationPreferenceUpdateManyAndReturnArgs> = z.object({ select: NotificationPreferenceSelectObjectSchema.optional(), data: NotificationPreferenceUpdateManyMutationInputObjectSchema, where: NotificationPreferenceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.NotificationPreferenceUpdateManyAndReturnArgs>;

export const NotificationPreferenceUpdateManyAndReturnZodSchema = z.object({ select: NotificationPreferenceSelectObjectSchema.optional(), data: NotificationPreferenceUpdateManyMutationInputObjectSchema, where: NotificationPreferenceWhereInputObjectSchema.optional() }).strict();