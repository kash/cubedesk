import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloLogCreateWithoutPlayerInputObjectSchema as EloLogCreateWithoutPlayerInputObjectSchema } from './EloLogCreateWithoutPlayerInput.schema';
import { EloLogUncheckedCreateWithoutPlayerInputObjectSchema as EloLogUncheckedCreateWithoutPlayerInputObjectSchema } from './EloLogUncheckedCreateWithoutPlayerInput.schema';
import { EloLogCreateOrConnectWithoutPlayerInputObjectSchema as EloLogCreateOrConnectWithoutPlayerInputObjectSchema } from './EloLogCreateOrConnectWithoutPlayerInput.schema';
import { EloLogUpsertWithWhereUniqueWithoutPlayerInputObjectSchema as EloLogUpsertWithWhereUniqueWithoutPlayerInputObjectSchema } from './EloLogUpsertWithWhereUniqueWithoutPlayerInput.schema';
import { EloLogCreateManyPlayerInputEnvelopeObjectSchema as EloLogCreateManyPlayerInputEnvelopeObjectSchema } from './EloLogCreateManyPlayerInputEnvelope.schema';
import { EloLogWhereUniqueInputObjectSchema as EloLogWhereUniqueInputObjectSchema } from './EloLogWhereUniqueInput.schema';
import { EloLogUpdateWithWhereUniqueWithoutPlayerInputObjectSchema as EloLogUpdateWithWhereUniqueWithoutPlayerInputObjectSchema } from './EloLogUpdateWithWhereUniqueWithoutPlayerInput.schema';
import { EloLogUpdateManyWithWhereWithoutPlayerInputObjectSchema as EloLogUpdateManyWithWhereWithoutPlayerInputObjectSchema } from './EloLogUpdateManyWithWhereWithoutPlayerInput.schema';
import { EloLogScalarWhereInputObjectSchema as EloLogScalarWhereInputObjectSchema } from './EloLogScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EloLogCreateWithoutPlayerInputObjectSchema), z.lazy(() => EloLogCreateWithoutPlayerInputObjectSchema).array(), z.lazy(() => EloLogUncheckedCreateWithoutPlayerInputObjectSchema), z.lazy(() => EloLogUncheckedCreateWithoutPlayerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => EloLogCreateOrConnectWithoutPlayerInputObjectSchema), z.lazy(() => EloLogCreateOrConnectWithoutPlayerInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => EloLogUpsertWithWhereUniqueWithoutPlayerInputObjectSchema), z.lazy(() => EloLogUpsertWithWhereUniqueWithoutPlayerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => EloLogCreateManyPlayerInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => EloLogWhereUniqueInputObjectSchema), z.lazy(() => EloLogWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => EloLogWhereUniqueInputObjectSchema), z.lazy(() => EloLogWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => EloLogWhereUniqueInputObjectSchema), z.lazy(() => EloLogWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => EloLogWhereUniqueInputObjectSchema), z.lazy(() => EloLogWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => EloLogUpdateWithWhereUniqueWithoutPlayerInputObjectSchema), z.lazy(() => EloLogUpdateWithWhereUniqueWithoutPlayerInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => EloLogUpdateManyWithWhereWithoutPlayerInputObjectSchema), z.lazy(() => EloLogUpdateManyWithWhereWithoutPlayerInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => EloLogScalarWhereInputObjectSchema), z.lazy(() => EloLogScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const EloLogUncheckedUpdateManyWithoutPlayerNestedInputObjectSchema: z.ZodType<Prisma.EloLogUncheckedUpdateManyWithoutPlayerNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.EloLogUncheckedUpdateManyWithoutPlayerNestedInput>;
export const EloLogUncheckedUpdateManyWithoutPlayerNestedInputObjectZodSchema = makeSchema();
