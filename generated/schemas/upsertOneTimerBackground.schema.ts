import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TimerBackgroundSelectObjectSchema as TimerBackgroundSelectObjectSchema } from './objects/TimerBackgroundSelect.schema';
import { TimerBackgroundIncludeObjectSchema as TimerBackgroundIncludeObjectSchema } from './objects/TimerBackgroundInclude.schema';
import { TimerBackgroundWhereUniqueInputObjectSchema as TimerBackgroundWhereUniqueInputObjectSchema } from './objects/TimerBackgroundWhereUniqueInput.schema';
import { TimerBackgroundCreateInputObjectSchema as TimerBackgroundCreateInputObjectSchema } from './objects/TimerBackgroundCreateInput.schema';
import { TimerBackgroundUncheckedCreateInputObjectSchema as TimerBackgroundUncheckedCreateInputObjectSchema } from './objects/TimerBackgroundUncheckedCreateInput.schema';
import { TimerBackgroundUpdateInputObjectSchema as TimerBackgroundUpdateInputObjectSchema } from './objects/TimerBackgroundUpdateInput.schema';
import { TimerBackgroundUncheckedUpdateInputObjectSchema as TimerBackgroundUncheckedUpdateInputObjectSchema } from './objects/TimerBackgroundUncheckedUpdateInput.schema';

export const TimerBackgroundUpsertOneSchema: z.ZodType<Prisma.TimerBackgroundUpsertArgs> = z.object({ select: TimerBackgroundSelectObjectSchema.optional(), include: TimerBackgroundIncludeObjectSchema.optional(), where: TimerBackgroundWhereUniqueInputObjectSchema, create: z.union([ TimerBackgroundCreateInputObjectSchema, TimerBackgroundUncheckedCreateInputObjectSchema ]), update: z.union([ TimerBackgroundUpdateInputObjectSchema, TimerBackgroundUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.TimerBackgroundUpsertArgs>;

export const TimerBackgroundUpsertOneZodSchema = z.object({ select: TimerBackgroundSelectObjectSchema.optional(), include: TimerBackgroundIncludeObjectSchema.optional(), where: TimerBackgroundWhereUniqueInputObjectSchema, create: z.union([ TimerBackgroundCreateInputObjectSchema, TimerBackgroundUncheckedCreateInputObjectSchema ]), update: z.union([ TimerBackgroundUpdateInputObjectSchema, TimerBackgroundUncheckedUpdateInputObjectSchema ]) }).strict();