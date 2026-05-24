import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { NotificationPreferenceSelectObjectSchema as NotificationPreferenceSelectObjectSchema } from './objects/NotificationPreferenceSelect.schema';
import { NotificationPreferenceIncludeObjectSchema as NotificationPreferenceIncludeObjectSchema } from './objects/NotificationPreferenceInclude.schema';
import { NotificationPreferenceWhereUniqueInputObjectSchema as NotificationPreferenceWhereUniqueInputObjectSchema } from './objects/NotificationPreferenceWhereUniqueInput.schema';

export const NotificationPreferenceFindUniqueSchema: z.ZodType<Prisma.NotificationPreferenceFindUniqueArgs> = z.object({ select: NotificationPreferenceSelectObjectSchema.optional(), include: NotificationPreferenceIncludeObjectSchema.optional(), where: NotificationPreferenceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.NotificationPreferenceFindUniqueArgs>;

export const NotificationPreferenceFindUniqueZodSchema = z.object({ select: NotificationPreferenceSelectObjectSchema.optional(), include: NotificationPreferenceIncludeObjectSchema.optional(), where: NotificationPreferenceWhereUniqueInputObjectSchema }).strict();