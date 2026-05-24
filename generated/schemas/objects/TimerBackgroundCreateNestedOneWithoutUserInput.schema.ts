import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TimerBackgroundCreateWithoutUserInputObjectSchema as TimerBackgroundCreateWithoutUserInputObjectSchema } from './TimerBackgroundCreateWithoutUserInput.schema';
import { TimerBackgroundUncheckedCreateWithoutUserInputObjectSchema as TimerBackgroundUncheckedCreateWithoutUserInputObjectSchema } from './TimerBackgroundUncheckedCreateWithoutUserInput.schema';
import { TimerBackgroundCreateOrConnectWithoutUserInputObjectSchema as TimerBackgroundCreateOrConnectWithoutUserInputObjectSchema } from './TimerBackgroundCreateOrConnectWithoutUserInput.schema';
import { TimerBackgroundWhereUniqueInputObjectSchema as TimerBackgroundWhereUniqueInputObjectSchema } from './TimerBackgroundWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TimerBackgroundCreateWithoutUserInputObjectSchema), z.lazy(() => TimerBackgroundUncheckedCreateWithoutUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TimerBackgroundCreateOrConnectWithoutUserInputObjectSchema).optional(),
  connect: z.lazy(() => TimerBackgroundWhereUniqueInputObjectSchema).optional()
}).strict();
export const TimerBackgroundCreateNestedOneWithoutUserInputObjectSchema: z.ZodType<Prisma.TimerBackgroundCreateNestedOneWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TimerBackgroundCreateNestedOneWithoutUserInput>;
export const TimerBackgroundCreateNestedOneWithoutUserInputObjectZodSchema = makeSchema();
