import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { EloLogSelectObjectSchema as EloLogSelectObjectSchema } from './objects/EloLogSelect.schema';
import { EloLogIncludeObjectSchema as EloLogIncludeObjectSchema } from './objects/EloLogInclude.schema';
import { EloLogWhereUniqueInputObjectSchema as EloLogWhereUniqueInputObjectSchema } from './objects/EloLogWhereUniqueInput.schema';

export const EloLogDeleteOneSchema: z.ZodType<Prisma.EloLogDeleteArgs> = z.object({ select: EloLogSelectObjectSchema.optional(), include: EloLogIncludeObjectSchema.optional(), where: EloLogWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.EloLogDeleteArgs>;

export const EloLogDeleteOneZodSchema = z.object({ select: EloLogSelectObjectSchema.optional(), include: EloLogIncludeObjectSchema.optional(), where: EloLogWhereUniqueInputObjectSchema }).strict();