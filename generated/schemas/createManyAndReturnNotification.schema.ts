import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { NotificationSelectObjectSchema as NotificationSelectObjectSchema } from './objects/NotificationSelect.schema';
import { NotificationCreateManyInputObjectSchema as NotificationCreateManyInputObjectSchema } from './objects/NotificationCreateManyInput.schema';

export const NotificationCreateManyAndReturnSchema: z.ZodType<Prisma.NotificationCreateManyAndReturnArgs> = z.object({ select: NotificationSelectObjectSchema.optional(), data: z.union([ NotificationCreateManyInputObjectSchema, z.array(NotificationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.NotificationCreateManyAndReturnArgs>;

export const NotificationCreateManyAndReturnZodSchema = z.object({ select: NotificationSelectObjectSchema.optional(), data: z.union([ NotificationCreateManyInputObjectSchema, z.array(NotificationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();