import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ActionLogCreateWithoutUserInputObjectSchema as ActionLogCreateWithoutUserInputObjectSchema } from './ActionLogCreateWithoutUserInput.schema';
import { ActionLogUncheckedCreateWithoutUserInputObjectSchema as ActionLogUncheckedCreateWithoutUserInputObjectSchema } from './ActionLogUncheckedCreateWithoutUserInput.schema';
import { ActionLogCreateOrConnectWithoutUserInputObjectSchema as ActionLogCreateOrConnectWithoutUserInputObjectSchema } from './ActionLogCreateOrConnectWithoutUserInput.schema';
import { ActionLogCreateManyUserInputEnvelopeObjectSchema as ActionLogCreateManyUserInputEnvelopeObjectSchema } from './ActionLogCreateManyUserInputEnvelope.schema';
import { ActionLogWhereUniqueInputObjectSchema as ActionLogWhereUniqueInputObjectSchema } from './ActionLogWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ActionLogCreateWithoutUserInputObjectSchema), z.lazy(() => ActionLogCreateWithoutUserInputObjectSchema).array(), z.lazy(() => ActionLogUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => ActionLogUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ActionLogCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => ActionLogCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ActionLogCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ActionLogWhereUniqueInputObjectSchema), z.lazy(() => ActionLogWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ActionLogUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.ActionLogUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ActionLogUncheckedCreateNestedManyWithoutUserInput>;
export const ActionLogUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
