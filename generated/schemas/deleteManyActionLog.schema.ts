import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ActionLogWhereInputObjectSchema as ActionLogWhereInputObjectSchema } from './objects/ActionLogWhereInput.schema';

export const ActionLogDeleteManySchema: z.ZodType<Prisma.ActionLogDeleteManyArgs> = z.object({ where: ActionLogWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ActionLogDeleteManyArgs>;

export const ActionLogDeleteManyZodSchema = z.object({ where: ActionLogWhereInputObjectSchema.optional() }).strict();