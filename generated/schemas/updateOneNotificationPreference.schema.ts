import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { NotificationPreferenceSelectObjectSchema as NotificationPreferenceSelectObjectSchema } from './objects/NotificationPreferenceSelect.schema';
import { NotificationPreferenceIncludeObjectSchema as NotificationPreferenceIncludeObjectSchema } from './objects/NotificationPreferenceInclude.schema';
import { NotificationPreferenceUpdateInputObjectSchema as NotificationPreferenceUpdateInputObjectSchema } from './objects/NotificationPreferenceUpdateInput.schema';
import { NotificationPreferenceUncheckedUpdateInputObjectSchema as NotificationPreferenceUncheckedUpdateInputObjectSchema } from './objects/NotificationPreferenceUncheckedUpdateInput.schema';
import { NotificationPreferenceWhereUniqueInputObjectSchema as NotificationPreferenceWhereUniqueInputObjectSchema } from './objects/NotificationPreferenceWhereUniqueInput.schema';

export const NotificationPreferenceUpdateOneSchema: z.ZodType<Prisma.NotificationPreferenceUpdateArgs> = z.object({ select: NotificationPreferenceSelectObjectSchema.optional(), include: NotificationPreferenceIncludeObjectSchema.optional(), data: z.union([NotificationPreferenceUpdateInputObjectSchema, NotificationPreferenceUncheckedUpdateInputObjectSchema]), where: NotificationPreferenceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.NotificationPreferenceUpdateArgs>;

export const NotificationPreferenceUpdateOneZodSchema = z.object({ select: NotificationPreferenceSelectObjectSchema.optional(), include: NotificationPreferenceIncludeObjectSchema.optional(), data: z.union([NotificationPreferenceUpdateInputObjectSchema, NotificationPreferenceUncheckedUpdateInputObjectSchema]), where: NotificationPreferenceWhereUniqueInputObjectSchema }).strict();