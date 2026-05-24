import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { EloLogUpdateManyMutationInputObjectSchema as EloLogUpdateManyMutationInputObjectSchema } from './objects/EloLogUpdateManyMutationInput.schema';
import { EloLogWhereInputObjectSchema as EloLogWhereInputObjectSchema } from './objects/EloLogWhereInput.schema';

export const EloLogUpdateManySchema: z.ZodType<Prisma.EloLogUpdateManyArgs> = z.object({ data: EloLogUpdateManyMutationInputObjectSchema, where: EloLogWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.EloLogUpdateManyArgs>;

export const EloLogUpdateManyZodSchema = z.object({ data: EloLogUpdateManyMutationInputObjectSchema, where: EloLogWhereInputObjectSchema.optional() }).strict();