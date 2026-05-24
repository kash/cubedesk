import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ActionLogWhereUniqueInputObjectSchema as ActionLogWhereUniqueInputObjectSchema } from './ActionLogWhereUniqueInput.schema';
import { ActionLogUpdateWithoutUserInputObjectSchema as ActionLogUpdateWithoutUserInputObjectSchema } from './ActionLogUpdateWithoutUserInput.schema';
import { ActionLogUncheckedUpdateWithoutUserInputObjectSchema as ActionLogUncheckedUpdateWithoutUserInputObjectSchema } from './ActionLogUncheckedUpdateWithoutUserInput.schema';
import { ActionLogCreateWithoutUserInputObjectSchema as ActionLogCreateWithoutUserInputObjectSchema } from './ActionLogCreateWithoutUserInput.schema';
import { ActionLogUncheckedCreateWithoutUserInputObjectSchema as ActionLogUncheckedCreateWithoutUserInputObjectSchema } from './ActionLogUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActionLogWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ActionLogUpdateWithoutUserInputObjectSchema), z.lazy(() => ActionLogUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => ActionLogCreateWithoutUserInputObjectSchema), z.lazy(() => ActionLogUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const ActionLogUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.ActionLogUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ActionLogUpsertWithWhereUniqueWithoutUserInput>;
export const ActionLogUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
