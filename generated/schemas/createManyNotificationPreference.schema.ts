import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { NotificationPreferenceCreateManyInputObjectSchema as NotificationPreferenceCreateManyInputObjectSchema } from './objects/NotificationPreferenceCreateManyInput.schema';

export const NotificationPreferenceCreateManySchema: z.ZodType<Prisma.NotificationPreferenceCreateManyArgs> = z.object({ data: z.union([ NotificationPreferenceCreateManyInputObjectSchema, z.array(NotificationPreferenceCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.NotificationPreferenceCreateManyArgs>;

export const NotificationPreferenceCreateManyZodSchema = z.object({ data: z.union([ NotificationPreferenceCreateManyInputObjectSchema, z.array(NotificationPreferenceCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();