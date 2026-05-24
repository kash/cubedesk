import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TimerBackgroundUpdateWithoutUserInputObjectSchema as TimerBackgroundUpdateWithoutUserInputObjectSchema } from './TimerBackgroundUpdateWithoutUserInput.schema';
import { TimerBackgroundUncheckedUpdateWithoutUserInputObjectSchema as TimerBackgroundUncheckedUpdateWithoutUserInputObjectSchema } from './TimerBackgroundUncheckedUpdateWithoutUserInput.schema';
import { TimerBackgroundCreateWithoutUserInputObjectSchema as TimerBackgroundCreateWithoutUserInputObjectSchema } from './TimerBackgroundCreateWithoutUserInput.schema';
import { TimerBackgroundUncheckedCreateWithoutUserInputObjectSchema as TimerBackgroundUncheckedCreateWithoutUserInputObjectSchema } from './TimerBackgroundUncheckedCreateWithoutUserInput.schema';
import { TimerBackgroundWhereInputObjectSchema as TimerBackgroundWhereInputObjectSchema } from './TimerBackgroundWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TimerBackgroundUpdateWithoutUserInputObjectSchema), z.lazy(() => TimerBackgroundUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => TimerBackgroundCreateWithoutUserInputObjectSchema), z.lazy(() => TimerBackgroundUncheckedCreateWithoutUserInputObjectSchema)]),
  where: z.lazy(() => TimerBackgroundWhereInputObjectSchema).optional()
}).strict();
export const TimerBackgroundUpsertWithoutUserInputObjectSchema: z.ZodType<Prisma.TimerBackgroundUpsertWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TimerBackgroundUpsertWithoutUserInput>;
export const TimerBackgroundUpsertWithoutUserInputObjectZodSchema = makeSchema();
