import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TimerBackgroundWhereInputObjectSchema as TimerBackgroundWhereInputObjectSchema } from './objects/TimerBackgroundWhereInput.schema';

export const TimerBackgroundDeleteManySchema: z.ZodType<Prisma.TimerBackgroundDeleteManyArgs> = z.object({ where: TimerBackgroundWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TimerBackgroundDeleteManyArgs>;

export const TimerBackgroundDeleteManyZodSchema = z.object({ where: TimerBackgroundWhereInputObjectSchema.optional() }).strict();