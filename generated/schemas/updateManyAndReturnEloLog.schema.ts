import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { EloLogSelectObjectSchema as EloLogSelectObjectSchema } from './objects/EloLogSelect.schema';
import { EloLogUpdateManyMutationInputObjectSchema as EloLogUpdateManyMutationInputObjectSchema } from './objects/EloLogUpdateManyMutationInput.schema';
import { EloLogWhereInputObjectSchema as EloLogWhereInputObjectSchema } from './objects/EloLogWhereInput.schema';

export const EloLogUpdateManyAndReturnSchema: z.ZodType<Prisma.EloLogUpdateManyAndReturnArgs> = z.object({ select: EloLogSelectObjectSchema.optional(), data: EloLogUpdateManyMutationInputObjectSchema, where: EloLogWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.EloLogUpdateManyAndReturnArgs>;

export const EloLogUpdateManyAndReturnZodSchema = z.object({ select: EloLogSelectObjectSchema.optional(), data: EloLogUpdateManyMutationInputObjectSchema, where: EloLogWhereInputObjectSchema.optional() }).strict();