import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TimerBackgroundSelectObjectSchema as TimerBackgroundSelectObjectSchema } from './objects/TimerBackgroundSelect.schema';
import { TimerBackgroundIncludeObjectSchema as TimerBackgroundIncludeObjectSchema } from './objects/TimerBackgroundInclude.schema';
import { TimerBackgroundWhereUniqueInputObjectSchema as TimerBackgroundWhereUniqueInputObjectSchema } from './objects/TimerBackgroundWhereUniqueInput.schema';

export const TimerBackgroundFindUniqueSchema: z.ZodType<Prisma.TimerBackgroundFindUniqueArgs> = z.object({ select: TimerBackgroundSelectObjectSchema.optional(), include: TimerBackgroundIncludeObjectSchema.optional(), where: TimerBackgroundWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TimerBackgroundFindUniqueArgs>;

export const TimerBackgroundFindUniqueZodSchema = z.object({ select: TimerBackgroundSelectObjectSchema.optional(), include: TimerBackgroundIncludeObjectSchema.optional(), where: TimerBackgroundWhereUniqueInputObjectSchema }).strict();