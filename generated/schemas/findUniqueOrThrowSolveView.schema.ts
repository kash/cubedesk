import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SolveViewSelectObjectSchema as SolveViewSelectObjectSchema } from './objects/SolveViewSelect.schema';
import { SolveViewIncludeObjectSchema as SolveViewIncludeObjectSchema } from './objects/SolveViewInclude.schema';
import { SolveViewWhereUniqueInputObjectSchema as SolveViewWhereUniqueInputObjectSchema } from './objects/SolveViewWhereUniqueInput.schema';

export const SolveViewFindUniqueOrThrowSchema: z.ZodType<Prisma.SolveViewFindUniqueOrThrowArgs> = z.object({ select: SolveViewSelectObjectSchema.optional(), include: SolveViewIncludeObjectSchema.optional(), where: SolveViewWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SolveViewFindUniqueOrThrowArgs>;

export const SolveViewFindUniqueOrThrowZodSchema = z.object({ select: SolveViewSelectObjectSchema.optional(), include: SolveViewIncludeObjectSchema.optional(), where: SolveViewWhereUniqueInputObjectSchema }).strict();