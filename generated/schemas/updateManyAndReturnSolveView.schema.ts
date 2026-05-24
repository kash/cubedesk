import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SolveViewSelectObjectSchema as SolveViewSelectObjectSchema } from './objects/SolveViewSelect.schema';
import { SolveViewUpdateManyMutationInputObjectSchema as SolveViewUpdateManyMutationInputObjectSchema } from './objects/SolveViewUpdateManyMutationInput.schema';
import { SolveViewWhereInputObjectSchema as SolveViewWhereInputObjectSchema } from './objects/SolveViewWhereInput.schema';

export const SolveViewUpdateManyAndReturnSchema: z.ZodType<Prisma.SolveViewUpdateManyAndReturnArgs> = z.object({ select: SolveViewSelectObjectSchema.optional(), data: SolveViewUpdateManyMutationInputObjectSchema, where: SolveViewWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SolveViewUpdateManyAndReturnArgs>;

export const SolveViewUpdateManyAndReturnZodSchema = z.object({ select: SolveViewSelectObjectSchema.optional(), data: SolveViewUpdateManyMutationInputObjectSchema, where: SolveViewWhereInputObjectSchema.optional() }).strict();