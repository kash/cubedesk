import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SessionWhereInputObjectSchema as SessionWhereInputObjectSchema } from './objects/SessionWhereInput.schema';

export const SessionDeleteManySchema: z.ZodType<Prisma.SessionDeleteManyArgs> = z.object({ where: SessionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SessionDeleteManyArgs>;

export const SessionDeleteManyZodSchema = z.object({ where: SessionWhereInputObjectSchema.optional() }).strict();