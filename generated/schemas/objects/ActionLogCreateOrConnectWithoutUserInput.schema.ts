import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ActionLogWhereUniqueInputObjectSchema as ActionLogWhereUniqueInputObjectSchema } from './ActionLogWhereUniqueInput.schema';
import { ActionLogCreateWithoutUserInputObjectSchema as ActionLogCreateWithoutUserInputObjectSchema } from './ActionLogCreateWithoutUserInput.schema';
import { ActionLogUncheckedCreateWithoutUserInputObjectSchema as ActionLogUncheckedCreateWithoutUserInputObjectSchema } from './ActionLogUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActionLogWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ActionLogCreateWithoutUserInputObjectSchema), z.lazy(() => ActionLogUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const ActionLogCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.ActionLogCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ActionLogCreateOrConnectWithoutUserInput>;
export const ActionLogCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
