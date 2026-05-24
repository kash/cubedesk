import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ActionLogSelectObjectSchema as ActionLogSelectObjectSchema } from './objects/ActionLogSelect.schema';
import { ActionLogIncludeObjectSchema as ActionLogIncludeObjectSchema } from './objects/ActionLogInclude.schema';
import { ActionLogWhereUniqueInputObjectSchema as ActionLogWhereUniqueInputObjectSchema } from './objects/ActionLogWhereUniqueInput.schema';

export const ActionLogFindUniqueOrThrowSchema: z.ZodType<Prisma.ActionLogFindUniqueOrThrowArgs> = z.object({ select: ActionLogSelectObjectSchema.optional(), include: ActionLogIncludeObjectSchema.optional(), where: ActionLogWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ActionLogFindUniqueOrThrowArgs>;

export const ActionLogFindUniqueOrThrowZodSchema = z.object({ select: ActionLogSelectObjectSchema.optional(), include: ActionLogIncludeObjectSchema.optional(), where: ActionLogWhereUniqueInputObjectSchema }).strict();