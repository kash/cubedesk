import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ActionLogCreateManyInputObjectSchema as ActionLogCreateManyInputObjectSchema } from './objects/ActionLogCreateManyInput.schema';

export const ActionLogCreateManySchema: z.ZodType<Prisma.ActionLogCreateManyArgs> = z.object({ data: z.union([ ActionLogCreateManyInputObjectSchema, z.array(ActionLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ActionLogCreateManyArgs>;

export const ActionLogCreateManyZodSchema = z.object({ data: z.union([ ActionLogCreateManyInputObjectSchema, z.array(ActionLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();