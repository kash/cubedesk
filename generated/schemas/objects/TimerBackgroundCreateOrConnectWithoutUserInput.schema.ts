import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TimerBackgroundWhereUniqueInputObjectSchema as TimerBackgroundWhereUniqueInputObjectSchema } from './TimerBackgroundWhereUniqueInput.schema';
import { TimerBackgroundCreateWithoutUserInputObjectSchema as TimerBackgroundCreateWithoutUserInputObjectSchema } from './TimerBackgroundCreateWithoutUserInput.schema';
import { TimerBackgroundUncheckedCreateWithoutUserInputObjectSchema as TimerBackgroundUncheckedCreateWithoutUserInputObjectSchema } from './TimerBackgroundUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TimerBackgroundWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TimerBackgroundCreateWithoutUserInputObjectSchema), z.lazy(() => TimerBackgroundUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const TimerBackgroundCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.TimerBackgroundCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TimerBackgroundCreateOrConnectWithoutUserInput>;
export const TimerBackgroundCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
