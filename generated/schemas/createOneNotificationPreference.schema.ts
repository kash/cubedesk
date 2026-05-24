import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { NotificationPreferenceSelectObjectSchema as NotificationPreferenceSelectObjectSchema } from './objects/NotificationPreferenceSelect.schema';
import { NotificationPreferenceIncludeObjectSchema as NotificationPreferenceIncludeObjectSchema } from './objects/NotificationPreferenceInclude.schema';
import { NotificationPreferenceCreateInputObjectSchema as NotificationPreferenceCreateInputObjectSchema } from './objects/NotificationPreferenceCreateInput.schema';
import { NotificationPreferenceUncheckedCreateInputObjectSchema as NotificationPreferenceUncheckedCreateInputObjectSchema } from './objects/NotificationPreferenceUncheckedCreateInput.schema';

export const NotificationPreferenceCreateOneSchema: z.ZodType<Prisma.NotificationPreferenceCreateArgs> = z.object({ select: NotificationPreferenceSelectObjectSchema.optional(), include: NotificationPreferenceIncludeObjectSchema.optional(), data: z.union([NotificationPreferenceCreateInputObjectSchema, NotificationPreferenceUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.NotificationPreferenceCreateArgs>;

export const NotificationPreferenceCreateOneZodSchema = z.object({ select: NotificationPreferenceSelectObjectSchema.optional(), include: NotificationPreferenceIncludeObjectSchema.optional(), data: z.union([NotificationPreferenceCreateInputObjectSchema, NotificationPreferenceUncheckedCreateInputObjectSchema]) }).strict();