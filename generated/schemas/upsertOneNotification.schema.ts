import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { NotificationSelectObjectSchema as NotificationSelectObjectSchema } from './objects/NotificationSelect.schema';
import { NotificationIncludeObjectSchema as NotificationIncludeObjectSchema } from './objects/NotificationInclude.schema';
import { NotificationWhereUniqueInputObjectSchema as NotificationWhereUniqueInputObjectSchema } from './objects/NotificationWhereUniqueInput.schema';
import { NotificationCreateInputObjectSchema as NotificationCreateInputObjectSchema } from './objects/NotificationCreateInput.schema';
import { NotificationUncheckedCreateInputObjectSchema as NotificationUncheckedCreateInputObjectSchema } from './objects/NotificationUncheckedCreateInput.schema';
import { NotificationUpdateInputObjectSchema as NotificationUpdateInputObjectSchema } from './objects/NotificationUpdateInput.schema';
import { NotificationUncheckedUpdateInputObjectSchema as NotificationUncheckedUpdateInputObjectSchema } from './objects/NotificationUncheckedUpdateInput.schema';

export const NotificationUpsertOneSchema: z.ZodType<Prisma.NotificationUpsertArgs> = z.object({ select: NotificationSelectObjectSchema.optional(), include: NotificationIncludeObjectSchema.optional(), where: NotificationWhereUniqueInputObjectSchema, create: z.union([ NotificationCreateInputObjectSchema, NotificationUncheckedCreateInputObjectSchema ]), update: z.union([ NotificationUpdateInputObjectSchema, NotificationUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.NotificationUpsertArgs>;

export const NotificationUpsertOneZodSchema = z.object({ select: NotificationSelectObjectSchema.optional(), include: NotificationIncludeObjectSchema.optional(), where: NotificationWhereUniqueInputObjectSchema, create: z.union([ NotificationCreateInputObjectSchema, NotificationUncheckedCreateInputObjectSchema ]), update: z.union([ NotificationUpdateInputObjectSchema, NotificationUncheckedUpdateInputObjectSchema ]) }).strict();