import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { NotificationPreferenceSelectObjectSchema as NotificationPreferenceSelectObjectSchema } from './objects/NotificationPreferenceSelect.schema';
import { NotificationPreferenceIncludeObjectSchema as NotificationPreferenceIncludeObjectSchema } from './objects/NotificationPreferenceInclude.schema';
import { NotificationPreferenceWhereUniqueInputObjectSchema as NotificationPreferenceWhereUniqueInputObjectSchema } from './objects/NotificationPreferenceWhereUniqueInput.schema';

export const NotificationPreferenceFindUniqueOrThrowSchema: z.ZodType<Prisma.NotificationPreferenceFindUniqueOrThrowArgs> = z.object({ select: NotificationPreferenceSelectObjectSchema.optional(), include: NotificationPreferenceIncludeObjectSchema.optional(), where: NotificationPreferenceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.NotificationPreferenceFindUniqueOrThrowArgs>;

export const NotificationPreferenceFindUniqueOrThrowZodSchema = z.object({ select: NotificationPreferenceSelectObjectSchema.optional(), include: NotificationPreferenceIncludeObjectSchema.optional(), where: NotificationPreferenceWhereUniqueInputObjectSchema }).strict();