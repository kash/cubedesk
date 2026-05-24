import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TimerBackgroundSelectObjectSchema as TimerBackgroundSelectObjectSchema } from './objects/TimerBackgroundSelect.schema';
import { TimerBackgroundCreateManyInputObjectSchema as TimerBackgroundCreateManyInputObjectSchema } from './objects/TimerBackgroundCreateManyInput.schema';

export const TimerBackgroundCreateManyAndReturnSchema: z.ZodType<Prisma.TimerBackgroundCreateManyAndReturnArgs> = z.object({ select: TimerBackgroundSelectObjectSchema.optional(), data: z.union([ TimerBackgroundCreateManyInputObjectSchema, z.array(TimerBackgroundCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TimerBackgroundCreateManyAndReturnArgs>;

export const TimerBackgroundCreateManyAndReturnZodSchema = z.object({ select: TimerBackgroundSelectObjectSchema.optional(), data: z.union([ TimerBackgroundCreateManyInputObjectSchema, z.array(TimerBackgroundCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();