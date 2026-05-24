import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ActionLogSelectObjectSchema as ActionLogSelectObjectSchema } from './objects/ActionLogSelect.schema';
import { ActionLogUpdateManyMutationInputObjectSchema as ActionLogUpdateManyMutationInputObjectSchema } from './objects/ActionLogUpdateManyMutationInput.schema';
import { ActionLogWhereInputObjectSchema as ActionLogWhereInputObjectSchema } from './objects/ActionLogWhereInput.schema';

export const ActionLogUpdateManyAndReturnSchema: z.ZodType<Prisma.ActionLogUpdateManyAndReturnArgs> = z.object({ select: ActionLogSelectObjectSchema.optional(), data: ActionLogUpdateManyMutationInputObjectSchema, where: ActionLogWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ActionLogUpdateManyAndReturnArgs>;

export const ActionLogUpdateManyAndReturnZodSchema = z.object({ select: ActionLogSelectObjectSchema.optional(), data: ActionLogUpdateManyMutationInputObjectSchema, where: ActionLogWhereInputObjectSchema.optional() }).strict();