import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TimerBackgroundSelectObjectSchema as TimerBackgroundSelectObjectSchema } from './objects/TimerBackgroundSelect.schema';
import { TimerBackgroundIncludeObjectSchema as TimerBackgroundIncludeObjectSchema } from './objects/TimerBackgroundInclude.schema';
import { TimerBackgroundUpdateInputObjectSchema as TimerBackgroundUpdateInputObjectSchema } from './objects/TimerBackgroundUpdateInput.schema';
import { TimerBackgroundUncheckedUpdateInputObjectSchema as TimerBackgroundUncheckedUpdateInputObjectSchema } from './objects/TimerBackgroundUncheckedUpdateInput.schema';
import { TimerBackgroundWhereUniqueInputObjectSchema as TimerBackgroundWhereUniqueInputObjectSchema } from './objects/TimerBackgroundWhereUniqueInput.schema';

export const TimerBackgroundUpdateOneSchema: z.ZodType<Prisma.TimerBackgroundUpdateArgs> = z.object({ select: TimerBackgroundSelectObjectSchema.optional(), include: TimerBackgroundIncludeObjectSchema.optional(), data: z.union([TimerBackgroundUpdateInputObjectSchema, TimerBackgroundUncheckedUpdateInputObjectSchema]), where: TimerBackgroundWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TimerBackgroundUpdateArgs>;

export const TimerBackgroundUpdateOneZodSchema = z.object({ select: TimerBackgroundSelectObjectSchema.optional(), include: TimerBackgroundIncludeObjectSchema.optional(), data: z.union([TimerBackgroundUpdateInputObjectSchema, TimerBackgroundUncheckedUpdateInputObjectSchema]), where: TimerBackgroundWhereUniqueInputObjectSchema }).strict();