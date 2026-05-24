import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ActionLogSelectObjectSchema as ActionLogSelectObjectSchema } from './objects/ActionLogSelect.schema';
import { ActionLogIncludeObjectSchema as ActionLogIncludeObjectSchema } from './objects/ActionLogInclude.schema';
import { ActionLogUpdateInputObjectSchema as ActionLogUpdateInputObjectSchema } from './objects/ActionLogUpdateInput.schema';
import { ActionLogUncheckedUpdateInputObjectSchema as ActionLogUncheckedUpdateInputObjectSchema } from './objects/ActionLogUncheckedUpdateInput.schema';
import { ActionLogWhereUniqueInputObjectSchema as ActionLogWhereUniqueInputObjectSchema } from './objects/ActionLogWhereUniqueInput.schema';

export const ActionLogUpdateOneSchema: z.ZodType<Prisma.ActionLogUpdateArgs> = z.object({ select: ActionLogSelectObjectSchema.optional(), include: ActionLogIncludeObjectSchema.optional(), data: z.union([ActionLogUpdateInputObjectSchema, ActionLogUncheckedUpdateInputObjectSchema]), where: ActionLogWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ActionLogUpdateArgs>;

export const ActionLogUpdateOneZodSchema = z.object({ select: ActionLogSelectObjectSchema.optional(), include: ActionLogIncludeObjectSchema.optional(), data: z.union([ActionLogUpdateInputObjectSchema, ActionLogUncheckedUpdateInputObjectSchema]), where: ActionLogWhereUniqueInputObjectSchema }).strict();