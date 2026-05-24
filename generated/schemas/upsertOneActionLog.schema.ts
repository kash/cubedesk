import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ActionLogSelectObjectSchema as ActionLogSelectObjectSchema } from './objects/ActionLogSelect.schema';
import { ActionLogIncludeObjectSchema as ActionLogIncludeObjectSchema } from './objects/ActionLogInclude.schema';
import { ActionLogWhereUniqueInputObjectSchema as ActionLogWhereUniqueInputObjectSchema } from './objects/ActionLogWhereUniqueInput.schema';
import { ActionLogCreateInputObjectSchema as ActionLogCreateInputObjectSchema } from './objects/ActionLogCreateInput.schema';
import { ActionLogUncheckedCreateInputObjectSchema as ActionLogUncheckedCreateInputObjectSchema } from './objects/ActionLogUncheckedCreateInput.schema';
import { ActionLogUpdateInputObjectSchema as ActionLogUpdateInputObjectSchema } from './objects/ActionLogUpdateInput.schema';
import { ActionLogUncheckedUpdateInputObjectSchema as ActionLogUncheckedUpdateInputObjectSchema } from './objects/ActionLogUncheckedUpdateInput.schema';

export const ActionLogUpsertOneSchema: z.ZodType<Prisma.ActionLogUpsertArgs> = z.object({ select: ActionLogSelectObjectSchema.optional(), include: ActionLogIncludeObjectSchema.optional(), where: ActionLogWhereUniqueInputObjectSchema, create: z.union([ ActionLogCreateInputObjectSchema, ActionLogUncheckedCreateInputObjectSchema ]), update: z.union([ ActionLogUpdateInputObjectSchema, ActionLogUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ActionLogUpsertArgs>;

export const ActionLogUpsertOneZodSchema = z.object({ select: ActionLogSelectObjectSchema.optional(), include: ActionLogIncludeObjectSchema.optional(), where: ActionLogWhereUniqueInputObjectSchema, create: z.union([ ActionLogCreateInputObjectSchema, ActionLogUncheckedCreateInputObjectSchema ]), update: z.union([ ActionLogUpdateInputObjectSchema, ActionLogUncheckedUpdateInputObjectSchema ]) }).strict();