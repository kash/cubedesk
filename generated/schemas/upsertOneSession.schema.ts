import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SessionSelectObjectSchema as SessionSelectObjectSchema } from './objects/SessionSelect.schema';
import { SessionIncludeObjectSchema as SessionIncludeObjectSchema } from './objects/SessionInclude.schema';
import { SessionWhereUniqueInputObjectSchema as SessionWhereUniqueInputObjectSchema } from './objects/SessionWhereUniqueInput.schema';
import { SessionCreateInputObjectSchema as SessionCreateInputObjectSchema } from './objects/SessionCreateInput.schema';
import { SessionUncheckedCreateInputObjectSchema as SessionUncheckedCreateInputObjectSchema } from './objects/SessionUncheckedCreateInput.schema';
import { SessionUpdateInputObjectSchema as SessionUpdateInputObjectSchema } from './objects/SessionUpdateInput.schema';
import { SessionUncheckedUpdateInputObjectSchema as SessionUncheckedUpdateInputObjectSchema } from './objects/SessionUncheckedUpdateInput.schema';

export const SessionUpsertOneSchema: z.ZodType<Prisma.SessionUpsertArgs> = z.object({ select: SessionSelectObjectSchema.optional(), include: SessionIncludeObjectSchema.optional(), where: SessionWhereUniqueInputObjectSchema, create: z.union([ SessionCreateInputObjectSchema, SessionUncheckedCreateInputObjectSchema ]), update: z.union([ SessionUpdateInputObjectSchema, SessionUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.SessionUpsertArgs>;

export const SessionUpsertOneZodSchema = z.object({ select: SessionSelectObjectSchema.optional(), include: SessionIncludeObjectSchema.optional(), where: SessionWhereUniqueInputObjectSchema, create: z.union([ SessionCreateInputObjectSchema, SessionUncheckedCreateInputObjectSchema ]), update: z.union([ SessionUpdateInputObjectSchema, SessionUncheckedUpdateInputObjectSchema ]) }).strict();