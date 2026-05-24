import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ActionLogUpdateManyMutationInputObjectSchema as ActionLogUpdateManyMutationInputObjectSchema } from './objects/ActionLogUpdateManyMutationInput.schema';
import { ActionLogWhereInputObjectSchema as ActionLogWhereInputObjectSchema } from './objects/ActionLogWhereInput.schema';

export const ActionLogUpdateManySchema: z.ZodType<Prisma.ActionLogUpdateManyArgs> = z.object({ data: ActionLogUpdateManyMutationInputObjectSchema, where: ActionLogWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ActionLogUpdateManyArgs>;

export const ActionLogUpdateManyZodSchema = z.object({ data: ActionLogUpdateManyMutationInputObjectSchema, where: ActionLogWhereInputObjectSchema.optional() }).strict();