import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SolveViewSelectObjectSchema as SolveViewSelectObjectSchema } from './objects/SolveViewSelect.schema';
import { SolveViewIncludeObjectSchema as SolveViewIncludeObjectSchema } from './objects/SolveViewInclude.schema';
import { SolveViewUpdateInputObjectSchema as SolveViewUpdateInputObjectSchema } from './objects/SolveViewUpdateInput.schema';
import { SolveViewUncheckedUpdateInputObjectSchema as SolveViewUncheckedUpdateInputObjectSchema } from './objects/SolveViewUncheckedUpdateInput.schema';
import { SolveViewWhereUniqueInputObjectSchema as SolveViewWhereUniqueInputObjectSchema } from './objects/SolveViewWhereUniqueInput.schema';

export const SolveViewUpdateOneSchema: z.ZodType<Prisma.SolveViewUpdateArgs> = z.object({ select: SolveViewSelectObjectSchema.optional(), include: SolveViewIncludeObjectSchema.optional(), data: z.union([SolveViewUpdateInputObjectSchema, SolveViewUncheckedUpdateInputObjectSchema]), where: SolveViewWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SolveViewUpdateArgs>;

export const SolveViewUpdateOneZodSchema = z.object({ select: SolveViewSelectObjectSchema.optional(), include: SolveViewIncludeObjectSchema.optional(), data: z.union([SolveViewUpdateInputObjectSchema, SolveViewUncheckedUpdateInputObjectSchema]), where: SolveViewWhereUniqueInputObjectSchema }).strict();