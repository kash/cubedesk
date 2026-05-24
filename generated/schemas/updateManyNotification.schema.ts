import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { NotificationUpdateManyMutationInputObjectSchema as NotificationUpdateManyMutationInputObjectSchema } from './objects/NotificationUpdateManyMutationInput.schema';
import { NotificationWhereInputObjectSchema as NotificationWhereInputObjectSchema } from './objects/NotificationWhereInput.schema';

export const NotificationUpdateManySchema: z.ZodType<Prisma.NotificationUpdateManyArgs> = z.object({ data: NotificationUpdateManyMutationInputObjectSchema, where: NotificationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.NotificationUpdateManyArgs>;

export const NotificationUpdateManyZodSchema = z.object({ data: NotificationUpdateManyMutationInputObjectSchema, where: NotificationWhereInputObjectSchema.optional() }).strict();