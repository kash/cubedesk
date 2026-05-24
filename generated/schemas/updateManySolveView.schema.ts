import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SolveViewUpdateManyMutationInputObjectSchema as SolveViewUpdateManyMutationInputObjectSchema } from './objects/SolveViewUpdateManyMutationInput.schema';
import { SolveViewWhereInputObjectSchema as SolveViewWhereInputObjectSchema } from './objects/SolveViewWhereInput.schema';

export const SolveViewUpdateManySchema: z.ZodType<Prisma.SolveViewUpdateManyArgs> = z.object({ data: SolveViewUpdateManyMutationInputObjectSchema, where: SolveViewWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SolveViewUpdateManyArgs>;

export const SolveViewUpdateManyZodSchema = z.object({ data: SolveViewUpdateManyMutationInputObjectSchema, where: SolveViewWhereInputObjectSchema.optional() }).strict();