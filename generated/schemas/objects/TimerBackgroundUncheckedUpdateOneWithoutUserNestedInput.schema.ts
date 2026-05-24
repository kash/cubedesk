import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TimerBackgroundCreateWithoutUserInputObjectSchema as TimerBackgroundCreateWithoutUserInputObjectSchema } from './TimerBackgroundCreateWithoutUserInput.schema';
import { TimerBackgroundUncheckedCreateWithoutUserInputObjectSchema as TimerBackgroundUncheckedCreateWithoutUserInputObjectSchema } from './TimerBackgroundUncheckedCreateWithoutUserInput.schema';
import { TimerBackgroundCreateOrConnectWithoutUserInputObjectSchema as TimerBackgroundCreateOrConnectWithoutUserInputObjectSchema } from './TimerBackgroundCreateOrConnectWithoutUserInput.schema';
import { TimerBackgroundUpsertWithoutUserInputObjectSchema as TimerBackgroundUpsertWithoutUserInputObjectSchema } from './TimerBackgroundUpsertWithoutUserInput.schema';
import { TimerBackgroundWhereInputObjectSchema as TimerBackgroundWhereInputObjectSchema } from './TimerBackgroundWhereInput.schema';
import { TimerBackgroundWhereUniqueInputObjectSchema as TimerBackgroundWhereUniqueInputObjectSchema } from './TimerBackgroundWhereUniqueInput.schema';
import { TimerBackgroundUpdateToOneWithWhereWithoutUserInputObjectSchema as TimerBackgroundUpdateToOneWithWhereWithoutUserInputObjectSchema } from './TimerBackgroundUpdateToOneWithWhereWithoutUserInput.schema';
import { TimerBackgroundUpdateWithoutUserInputObjectSchema as TimerBackgroundUpdateWithoutUserInputObjectSchema } from './TimerBackgroundUpdateWithoutUserInput.schema';
import { TimerBackgroundUncheckedUpdateWithoutUserInputObjectSchema as TimerBackgroundUncheckedUpdateWithoutUserInputObjectSchema } from './TimerBackgroundUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TimerBackgroundCreateWithoutUserInputObjectSchema), z.lazy(() => TimerBackgroundUncheckedCreateWithoutUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TimerBackgroundCreateOrConnectWithoutUserInputObjectSchema).optional(),
  upsert: z.lazy(() => TimerBackgroundUpsertWithoutUserInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => TimerBackgroundWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => TimerBackgroundWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => TimerBackgroundWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TimerBackgroundUpdateToOneWithWhereWithoutUserInputObjectSchema), z.lazy(() => TimerBackgroundUpdateWithoutUserInputObjectSchema), z.lazy(() => TimerBackgroundUncheckedUpdateWithoutUserInputObjectSchema)]).optional()
}).strict();
export const TimerBackgroundUncheckedUpdateOneWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.TimerBackgroundUncheckedUpdateOneWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TimerBackgroundUncheckedUpdateOneWithoutUserNestedInput>;
export const TimerBackgroundUncheckedUpdateOneWithoutUserNestedInputObjectZodSchema = makeSchema();
