import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BanLogCreateWithoutCreated_byInputObjectSchema as BanLogCreateWithoutCreated_byInputObjectSchema } from './BanLogCreateWithoutCreated_byInput.schema';
import { BanLogUncheckedCreateWithoutCreated_byInputObjectSchema as BanLogUncheckedCreateWithoutCreated_byInputObjectSchema } from './BanLogUncheckedCreateWithoutCreated_byInput.schema';
import { BanLogCreateOrConnectWithoutCreated_byInputObjectSchema as BanLogCreateOrConnectWithoutCreated_byInputObjectSchema } from './BanLogCreateOrConnectWithoutCreated_byInput.schema';
import { BanLogUpsertWithWhereUniqueWithoutCreated_byInputObjectSchema as BanLogUpsertWithWhereUniqueWithoutCreated_byInputObjectSchema } from './BanLogUpsertWithWhereUniqueWithoutCreated_byInput.schema';
import { BanLogCreateManyCreated_byInputEnvelopeObjectSchema as BanLogCreateManyCreated_byInputEnvelopeObjectSchema } from './BanLogCreateManyCreated_byInputEnvelope.schema';
import { BanLogWhereUniqueInputObjectSchema as BanLogWhereUniqueInputObjectSchema } from './BanLogWhereUniqueInput.schema';
import { BanLogUpdateWithWhereUniqueWithoutCreated_byInputObjectSchema as BanLogUpdateWithWhereUniqueWithoutCreated_byInputObjectSchema } from './BanLogUpdateWithWhereUniqueWithoutCreated_byInput.schema';
import { BanLogUpdateManyWithWhereWithoutCreated_byInputObjectSchema as BanLogUpdateManyWithWhereWithoutCreated_byInputObjectSchema } from './BanLogUpdateManyWithWhereWithoutCreated_byInput.schema';
import { BanLogScalarWhereInputObjectSchema as BanLogScalarWhereInputObjectSchema } from './BanLogScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BanLogCreateWithoutCreated_byInputObjectSchema), z.lazy(() => BanLogCreateWithoutCreated_byInputObjectSchema).array(), z.lazy(() => BanLogUncheckedCreateWithoutCreated_byInputObjectSchema), z.lazy(() => BanLogUncheckedCreateWithoutCreated_byInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BanLogCreateOrConnectWithoutCreated_byInputObjectSchema), z.lazy(() => BanLogCreateOrConnectWithoutCreated_byInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => BanLogUpsertWithWhereUniqueWithoutCreated_byInputObjectSchema), z.lazy(() => BanLogUpsertWithWhereUniqueWithoutCreated_byInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BanLogCreateManyCreated_byInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => BanLogWhereUniqueInputObjectSchema), z.lazy(() => BanLogWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => BanLogWhereUniqueInputObjectSchema), z.lazy(() => BanLogWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => BanLogWhereUniqueInputObjectSchema), z.lazy(() => BanLogWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => BanLogWhereUniqueInputObjectSchema), z.lazy(() => BanLogWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => BanLogUpdateWithWhereUniqueWithoutCreated_byInputObjectSchema), z.lazy(() => BanLogUpdateWithWhereUniqueWithoutCreated_byInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => BanLogUpdateManyWithWhereWithoutCreated_byInputObjectSchema), z.lazy(() => BanLogUpdateManyWithWhereWithoutCreated_byInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => BanLogScalarWhereInputObjectSchema), z.lazy(() => BanLogScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const BanLogUpdateManyWithoutCreated_byNestedInputObjectSchema: z.ZodType<Prisma.BanLogUpdateManyWithoutCreated_byNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.BanLogUpdateManyWithoutCreated_byNestedInput>;
export const BanLogUpdateManyWithoutCreated_byNestedInputObjectZodSchema = makeSchema();
