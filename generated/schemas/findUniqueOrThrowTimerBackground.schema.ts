import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TimerBackgroundSelectObjectSchema as TimerBackgroundSelectObjectSchema } from './objects/TimerBackgroundSelect.schema';
import { TimerBackgroundIncludeObjectSchema as TimerBackgroundIncludeObjectSchema } from './objects/TimerBackgroundInclude.schema';
import { TimerBackgroundWhereUniqueInputObjectSchema as TimerBackgroundWhereUniqueInputObjectSchema } from './objects/TimerBackgroundWhereUniqueInput.schema';

export const TimerBackgroundFindUniqueOrThrowSchema: z.ZodType<Prisma.TimerBackgroundFindUniqueOrThrowArgs> = z.object({ select: TimerBackgroundSelectObjectSchema.optional(), include: TimerBackgroundIncludeObjectSchema.optional(), where: TimerBackgroundWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TimerBackgroundFindUniqueOrThrowArgs>;

export const TimerBackgroundFindUniqueOrThrowZodSchema = z.object({ select: TimerBackgroundSelectObjectSchema.optional(), include: TimerBackgroundIncludeObjectSchema.optional(), where: TimerBackgroundWhereUniqueInputObjectSchema }).strict();