import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { EloLogSelectObjectSchema as EloLogSelectObjectSchema } from './objects/EloLogSelect.schema';
import { EloLogIncludeObjectSchema as EloLogIncludeObjectSchema } from './objects/EloLogInclude.schema';
import { EloLogUpdateInputObjectSchema as EloLogUpdateInputObjectSchema } from './objects/EloLogUpdateInput.schema';
import { EloLogUncheckedUpdateInputObjectSchema as EloLogUncheckedUpdateInputObjectSchema } from './objects/EloLogUncheckedUpdateInput.schema';
import { EloLogWhereUniqueInputObjectSchema as EloLogWhereUniqueInputObjectSchema } from './objects/EloLogWhereUniqueInput.schema';

export const EloLogUpdateOneSchema: z.ZodType<Prisma.EloLogUpdateArgs> = z.object({ select: EloLogSelectObjectSchema.optional(), include: EloLogIncludeObjectSchema.optional(), data: z.union([EloLogUpdateInputObjectSchema, EloLogUncheckedUpdateInputObjectSchema]), where: EloLogWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.EloLogUpdateArgs>;

export const EloLogUpdateOneZodSchema = z.object({ select: EloLogSelectObjectSchema.optional(), include: EloLogIncludeObjectSchema.optional(), data: z.union([EloLogUpdateInputObjectSchema, EloLogUncheckedUpdateInputObjectSchema]), where: EloLogWhereUniqueInputObjectSchema }).strict();