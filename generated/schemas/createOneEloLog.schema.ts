import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { EloLogSelectObjectSchema as EloLogSelectObjectSchema } from './objects/EloLogSelect.schema';
import { EloLogIncludeObjectSchema as EloLogIncludeObjectSchema } from './objects/EloLogInclude.schema';
import { EloLogCreateInputObjectSchema as EloLogCreateInputObjectSchema } from './objects/EloLogCreateInput.schema';
import { EloLogUncheckedCreateInputObjectSchema as EloLogUncheckedCreateInputObjectSchema } from './objects/EloLogUncheckedCreateInput.schema';

export const EloLogCreateOneSchema: z.ZodType<Prisma.EloLogCreateArgs> = z.object({ select: EloLogSelectObjectSchema.optional(), include: EloLogIncludeObjectSchema.optional(), data: z.union([EloLogCreateInputObjectSchema, EloLogUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.EloLogCreateArgs>;

export const EloLogCreateOneZodSchema = z.object({ select: EloLogSelectObjectSchema.optional(), include: EloLogIncludeObjectSchema.optional(), data: z.union([EloLogCreateInputObjectSchema, EloLogUncheckedCreateInputObjectSchema]) }).strict();