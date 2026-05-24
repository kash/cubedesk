import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ActionLogSelectObjectSchema as ActionLogSelectObjectSchema } from './objects/ActionLogSelect.schema';
import { ActionLogCreateManyInputObjectSchema as ActionLogCreateManyInputObjectSchema } from './objects/ActionLogCreateManyInput.schema';

export const ActionLogCreateManyAndReturnSchema: z.ZodType<Prisma.ActionLogCreateManyAndReturnArgs> = z.object({ select: ActionLogSelectObjectSchema.optional(), data: z.union([ ActionLogCreateManyInputObjectSchema, z.array(ActionLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ActionLogCreateManyAndReturnArgs>;

export const ActionLogCreateManyAndReturnZodSchema = z.object({ select: ActionLogSelectObjectSchema.optional(), data: z.union([ ActionLogCreateManyInputObjectSchema, z.array(ActionLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();