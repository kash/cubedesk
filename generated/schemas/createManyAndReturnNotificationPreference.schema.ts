import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { NotificationPreferenceSelectObjectSchema as NotificationPreferenceSelectObjectSchema } from './objects/NotificationPreferenceSelect.schema';
import { NotificationPreferenceCreateManyInputObjectSchema as NotificationPreferenceCreateManyInputObjectSchema } from './objects/NotificationPreferenceCreateManyInput.schema';

export const NotificationPreferenceCreateManyAndReturnSchema: z.ZodType<Prisma.NotificationPreferenceCreateManyAndReturnArgs> = z.object({ select: NotificationPreferenceSelectObjectSchema.optional(), data: z.union([ NotificationPreferenceCreateManyInputObjectSchema, z.array(NotificationPreferenceCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.NotificationPreferenceCreateManyAndReturnArgs>;

export const NotificationPreferenceCreateManyAndReturnZodSchema = z.object({ select: NotificationPreferenceSelectObjectSchema.optional(), data: z.union([ NotificationPreferenceCreateManyInputObjectSchema, z.array(NotificationPreferenceCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();