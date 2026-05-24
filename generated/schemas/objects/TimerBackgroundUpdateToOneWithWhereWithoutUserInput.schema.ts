import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TimerBackgroundWhereInputObjectSchema as TimerBackgroundWhereInputObjectSchema } from './TimerBackgroundWhereInput.schema';
import { TimerBackgroundUpdateWithoutUserInputObjectSchema as TimerBackgroundUpdateWithoutUserInputObjectSchema } from './TimerBackgroundUpdateWithoutUserInput.schema';
import { TimerBackgroundUncheckedUpdateWithoutUserInputObjectSchema as TimerBackgroundUncheckedUpdateWithoutUserInputObjectSchema } from './TimerBackgroundUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TimerBackgroundWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TimerBackgroundUpdateWithoutUserInputObjectSchema), z.lazy(() => TimerBackgroundUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const TimerBackgroundUpdateToOneWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.TimerBackgroundUpdateToOneWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TimerBackgroundUpdateToOneWithWhereWithoutUserInput>;
export const TimerBackgroundUpdateToOneWithWhereWithoutUserInputObjectZodSchema = makeSchema();
