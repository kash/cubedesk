import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TimerBackgroundUpdateManyMutationInputObjectSchema as TimerBackgroundUpdateManyMutationInputObjectSchema } from './objects/TimerBackgroundUpdateManyMutationInput.schema';
import { TimerBackgroundWhereInputObjectSchema as TimerBackgroundWhereInputObjectSchema } from './objects/TimerBackgroundWhereInput.schema';

export const TimerBackgroundUpdateManySchema: z.ZodType<Prisma.TimerBackgroundUpdateManyArgs> = z.object({ data: TimerBackgroundUpdateManyMutationInputObjectSchema, where: TimerBackgroundWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TimerBackgroundUpdateManyArgs>;

export const TimerBackgroundUpdateManyZodSchema = z.object({ data: TimerBackgroundUpdateManyMutationInputObjectSchema, where: TimerBackgroundWhereInputObjectSchema.optional() }).strict();