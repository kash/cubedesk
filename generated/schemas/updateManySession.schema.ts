import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SessionUpdateManyMutationInputObjectSchema as SessionUpdateManyMutationInputObjectSchema } from './objects/SessionUpdateManyMutationInput.schema';
import { SessionWhereInputObjectSchema as SessionWhereInputObjectSchema } from './objects/SessionWhereInput.schema';

export const SessionUpdateManySchema: z.ZodType<Prisma.SessionUpdateManyArgs> = z.object({ data: SessionUpdateManyMutationInputObjectSchema, where: SessionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SessionUpdateManyArgs>;

export const SessionUpdateManyZodSchema = z.object({ data: SessionUpdateManyMutationInputObjectSchema, where: SessionWhereInputObjectSchema.optional() }).strict();