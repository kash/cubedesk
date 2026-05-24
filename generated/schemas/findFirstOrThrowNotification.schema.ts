import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { NotificationIncludeObjectSchema as NotificationIncludeObjectSchema } from './objects/NotificationInclude.schema';
import { NotificationOrderByWithRelationInputObjectSchema as NotificationOrderByWithRelationInputObjectSchema } from './objects/NotificationOrderByWithRelationInput.schema';
import { NotificationWhereInputObjectSchema as NotificationWhereInputObjectSchema } from './objects/NotificationWhereInput.schema';
import { NotificationWhereUniqueInputObjectSchema as NotificationWhereUniqueInputObjectSchema } from './objects/NotificationWhereUniqueInput.schema';
import { NotificationScalarFieldEnumSchema } from './enums/NotificationScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const NotificationFindFirstOrThrowSelectSchema: z.ZodType<Prisma.NotificationSelect> = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    notification_type: z.boolean().optional(),
    triggering_user_id: z.boolean().optional(),
    read_at: z.boolean().optional(),
    message: z.boolean().optional(),
    icon: z.boolean().optional(),
    link: z.boolean().optional(),
    created_at: z.boolean().optional(),
    notification_category_name: z.boolean().optional(),
    link_text: z.boolean().optional(),
    subject: z.boolean().optional(),
    in_app_message: z.boolean().optional(),
    triggering_user: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.NotificationSelect>;

export const NotificationFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    notification_type: z.boolean().optional(),
    triggering_user_id: z.boolean().optional(),
    read_at: z.boolean().optional(),
    message: z.boolean().optional(),
    icon: z.boolean().optional(),
    link: z.boolean().optional(),
    created_at: z.boolean().optional(),
    notification_category_name: z.boolean().optional(),
    link_text: z.boolean().optional(),
    subject: z.boolean().optional(),
    in_app_message: z.boolean().optional(),
    triggering_user: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict();

export const NotificationFindFirstOrThrowSchema: z.ZodType<Prisma.NotificationFindFirstOrThrowArgs> = z.object({ select: NotificationFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => NotificationIncludeObjectSchema.optional()), orderBy: z.union([NotificationOrderByWithRelationInputObjectSchema, NotificationOrderByWithRelationInputObjectSchema.array()]).optional(), where: NotificationWhereInputObjectSchema.optional(), cursor: NotificationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([NotificationScalarFieldEnumSchema, NotificationScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.NotificationFindFirstOrThrowArgs>;

export const NotificationFindFirstOrThrowZodSchema = z.object({ select: NotificationFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => NotificationIncludeObjectSchema.optional()), orderBy: z.union([NotificationOrderByWithRelationInputObjectSchema, NotificationOrderByWithRelationInputObjectSchema.array()]).optional(), where: NotificationWhereInputObjectSchema.optional(), cursor: NotificationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([NotificationScalarFieldEnumSchema, NotificationScalarFieldEnumSchema.array()]).optional() }).strict();