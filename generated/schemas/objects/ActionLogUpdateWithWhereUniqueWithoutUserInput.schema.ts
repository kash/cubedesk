import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ActionLogWhereUniqueInputObjectSchema as ActionLogWhereUniqueInputObjectSchema } from './ActionLogWhereUniqueInput.schema';
import { ActionLogUpdateWithoutUserInputObjectSchema as ActionLogUpdateWithoutUserInputObjectSchema } from './ActionLogUpdateWithoutUserInput.schema';
import { ActionLogUncheckedUpdateWithoutUserInputObjectSchema as ActionLogUncheckedUpdateWithoutUserInputObjectSchema } from './ActionLogUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActionLogWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ActionLogUpdateWithoutUserInputObjectSchema), z.lazy(() => ActionLogUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const ActionLogUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.ActionLogUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ActionLogUpdateWithWhereUniqueWithoutUserInput>;
export const ActionLogUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
