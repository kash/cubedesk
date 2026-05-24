import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ActionLogSelectObjectSchema as ActionLogSelectObjectSchema } from './objects/ActionLogSelect.schema';
import { ActionLogIncludeObjectSchema as ActionLogIncludeObjectSchema } from './objects/ActionLogInclude.schema';
import { ActionLogCreateInputObjectSchema as ActionLogCreateInputObjectSchema } from './objects/ActionLogCreateInput.schema';
import { ActionLogUncheckedCreateInputObjectSchema as ActionLogUncheckedCreateInputObjectSchema } from './objects/ActionLogUncheckedCreateInput.schema';

export const ActionLogCreateOneSchema: z.ZodType<Prisma.ActionLogCreateArgs> = z.object({ select: ActionLogSelectObjectSchema.optional(), include: ActionLogIncludeObjectSchema.optional(), data: z.union([ActionLogCreateInputObjectSchema, ActionLogUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ActionLogCreateArgs>;

export const ActionLogCreateOneZodSchema = z.object({ select: ActionLogSelectObjectSchema.optional(), include: ActionLogIncludeObjectSchema.optional(), data: z.union([ActionLogCreateInputObjectSchema, ActionLogUncheckedCreateInputObjectSchema]) }).strict();