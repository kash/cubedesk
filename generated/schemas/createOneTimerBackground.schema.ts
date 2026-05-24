import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TimerBackgroundSelectObjectSchema as TimerBackgroundSelectObjectSchema } from './objects/TimerBackgroundSelect.schema';
import { TimerBackgroundIncludeObjectSchema as TimerBackgroundIncludeObjectSchema } from './objects/TimerBackgroundInclude.schema';
import { TimerBackgroundCreateInputObjectSchema as TimerBackgroundCreateInputObjectSchema } from './objects/TimerBackgroundCreateInput.schema';
import { TimerBackgroundUncheckedCreateInputObjectSchema as TimerBackgroundUncheckedCreateInputObjectSchema } from './objects/TimerBackgroundUncheckedCreateInput.schema';

export const TimerBackgroundCreateOneSchema: z.ZodType<Prisma.TimerBackgroundCreateArgs> = z.object({ select: TimerBackgroundSelectObjectSchema.optional(), include: TimerBackgroundIncludeObjectSchema.optional(), data: z.union([TimerBackgroundCreateInputObjectSchema, TimerBackgroundUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.TimerBackgroundCreateArgs>;

export const TimerBackgroundCreateOneZodSchema = z.object({ select: TimerBackgroundSelectObjectSchema.optional(), include: TimerBackgroundIncludeObjectSchema.optional(), data: z.union([TimerBackgroundCreateInputObjectSchema, TimerBackgroundUncheckedCreateInputObjectSchema]) }).strict();