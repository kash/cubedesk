import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ActionLogCreateWithoutUserInputObjectSchema as ActionLogCreateWithoutUserInputObjectSchema } from './ActionLogCreateWithoutUserInput.schema';
import { ActionLogUncheckedCreateWithoutUserInputObjectSchema as ActionLogUncheckedCreateWithoutUserInputObjectSchema } from './ActionLogUncheckedCreateWithoutUserInput.schema';
import { ActionLogCreateOrConnectWithoutUserInputObjectSchema as ActionLogCreateOrConnectWithoutUserInputObjectSchema } from './ActionLogCreateOrConnectWithoutUserInput.schema';
import { ActionLogUpsertWithWhereUniqueWithoutUserInputObjectSchema as ActionLogUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './ActionLogUpsertWithWhereUniqueWithoutUserInput.schema';
import { ActionLogCreateManyUserInputEnvelopeObjectSchema as ActionLogCreateManyUserInputEnvelopeObjectSchema } from './ActionLogCreateManyUserInputEnvelope.schema';
import { ActionLogWhereUniqueInputObjectSchema as ActionLogWhereUniqueInputObjectSchema } from './ActionLogWhereUniqueInput.schema';
import { ActionLogUpdateWithWhereUniqueWithoutUserInputObjectSchema as ActionLogUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './ActionLogUpdateWithWhereUniqueWithoutUserInput.schema';
import { ActionLogUpdateManyWithWhereWithoutUserInputObjectSchema as ActionLogUpdateManyWithWhereWithoutUserInputObjectSchema } from './ActionLogUpdateManyWithWhereWithoutUserInput.schema';
import { ActionLogScalarWhereInputObjectSchema as ActionLogScalarWhereInputObjectSchema } from './ActionLogScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ActionLogCreateWithoutUserInputObjectSchema), z.lazy(() => ActionLogCreateWithoutUserInputObjectSchema).array(), z.lazy(() => ActionLogUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => ActionLogUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ActionLogCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => ActionLogCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ActionLogUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => ActionLogUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ActionLogCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ActionLogWhereUniqueInputObjectSchema), z.lazy(() => ActionLogWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ActionLogWhereUniqueInputObjectSchema), z.lazy(() => ActionLogWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ActionLogWhereUniqueInputObjectSchema), z.lazy(() => ActionLogWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ActionLogWhereUniqueInputObjectSchema), z.lazy(() => ActionLogWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ActionLogUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => ActionLogUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ActionLogUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => ActionLogUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ActionLogScalarWhereInputObjectSchema), z.lazy(() => ActionLogScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ActionLogUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.ActionLogUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ActionLogUncheckedUpdateManyWithoutUserNestedInput>;
export const ActionLogUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
