import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TimerBackgroundCreateManyInputObjectSchema as TimerBackgroundCreateManyInputObjectSchema } from './objects/TimerBackgroundCreateManyInput.schema';

export const TimerBackgroundCreateManySchema: z.ZodType<Prisma.TimerBackgroundCreateManyArgs> = z.object({ data: z.union([ TimerBackgroundCreateManyInputObjectSchema, z.array(TimerBackgroundCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TimerBackgroundCreateManyArgs>;

export const TimerBackgroundCreateManyZodSchema = z.object({ data: z.union([ TimerBackgroundCreateManyInputObjectSchema, z.array(TimerBackgroundCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();