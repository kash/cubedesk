import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TimerBackgroundSelectObjectSchema as TimerBackgroundSelectObjectSchema } from './objects/TimerBackgroundSelect.schema';
import { TimerBackgroundUpdateManyMutationInputObjectSchema as TimerBackgroundUpdateManyMutationInputObjectSchema } from './objects/TimerBackgroundUpdateManyMutationInput.schema';
import { TimerBackgroundWhereInputObjectSchema as TimerBackgroundWhereInputObjectSchema } from './objects/TimerBackgroundWhereInput.schema';

export const TimerBackgroundUpdateManyAndReturnSchema: z.ZodType<Prisma.TimerBackgroundUpdateManyAndReturnArgs> = z.object({ select: TimerBackgroundSelectObjectSchema.optional(), data: TimerBackgroundUpdateManyMutationInputObjectSchema, where: TimerBackgroundWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TimerBackgroundUpdateManyAndReturnArgs>;

export const TimerBackgroundUpdateManyAndReturnZodSchema = z.object({ select: TimerBackgroundSelectObjectSchema.optional(), data: TimerBackgroundUpdateManyMutationInputObjectSchema, where: TimerBackgroundWhereInputObjectSchema.optional() }).strict();