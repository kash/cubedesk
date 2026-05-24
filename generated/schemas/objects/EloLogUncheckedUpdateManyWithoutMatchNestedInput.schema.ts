import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloLogCreateWithoutMatchInputObjectSchema as EloLogCreateWithoutMatchInputObjectSchema } from './EloLogCreateWithoutMatchInput.schema';
import { EloLogUncheckedCreateWithoutMatchInputObjectSchema as EloLogUncheckedCreateWithoutMatchInputObjectSchema } from './EloLogUncheckedCreateWithoutMatchInput.schema';
import { EloLogCreateOrConnectWithoutMatchInputObjectSchema as EloLogCreateOrConnectWithoutMatchInputObjectSchema } from './EloLogCreateOrConnectWithoutMatchInput.schema';
import { EloLogUpsertWithWhereUniqueWithoutMatchInputObjectSchema as EloLogUpsertWithWhereUniqueWithoutMatchInputObjectSchema } from './EloLogUpsertWithWhereUniqueWithoutMatchInput.schema';
import { EloLogCreateManyMatchInputEnvelopeObjectSchema as EloLogCreateManyMatchInputEnvelopeObjectSchema } from './EloLogCreateManyMatchInputEnvelope.schema';
import { EloLogWhereUniqueInputObjectSchema as EloLogWhereUniqueInputObjectSchema } from './EloLogWhereUniqueInput.schema';
import { EloLogUpdateWithWhereUniqueWithoutMatchInputObjectSchema as EloLogUpdateWithWhereUniqueWithoutMatchInputObjectSchema } from './EloLogUpdateWithWhereUniqueWithoutMatchInput.schema';
import { EloLogUpdateManyWithWhereWithoutMatchInputObjectSchema as EloLogUpdateManyWithWhereWithoutMatchInputObjectSchema } from './EloLogUpdateManyWithWhereWithoutMatchInput.schema';
import { EloLogScalarWhereInputObjectSchema as EloLogScalarWhereInputObjectSchema } from './EloLogScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EloLogCreateWithoutMatchInputObjectSchema), z.lazy(() => EloLogCreateWithoutMatchInputObjectSchema).array(), z.lazy(() => EloLogUncheckedCreateWithoutMatchInputObjectSchema), z.lazy(() => EloLogUncheckedCreateWithoutMatchInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => EloLogCreateOrConnectWithoutMatchInputObjectSchema), z.lazy(() => EloLogCreateOrConnectWithoutMatchInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => EloLogUpsertWithWhereUniqueWithoutMatchInputObjectSchema), z.lazy(() => EloLogUpsertWithWhereUniqueWithoutMatchInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => EloLogCreateManyMatchInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => EloLogWhereUniqueInputObjectSchema), z.lazy(() => EloLogWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => EloLogWhereUniqueInputObjectSchema), z.lazy(() => EloLogWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => EloLogWhereUniqueInputObjectSchema), z.lazy(() => EloLogWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => EloLogWhereUniqueInputObjectSchema), z.lazy(() => EloLogWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => EloLogUpdateWithWhereUniqueWithoutMatchInputObjectSchema), z.lazy(() => EloLogUpdateWithWhereUniqueWithoutMatchInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => EloLogUpdateManyWithWhereWithoutMatchInputObjectSchema), z.lazy(() => EloLogUpdateManyWithWhereWithoutMatchInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => EloLogScalarWhereInputObjectSchema), z.lazy(() => EloLogScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const EloLogUncheckedUpdateManyWithoutMatchNestedInputObjectSchema: z.ZodType<Prisma.EloLogUncheckedUpdateManyWithoutMatchNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.EloLogUncheckedUpdateManyWithoutMatchNestedInput>;
export const EloLogUncheckedUpdateManyWithoutMatchNestedInputObjectZodSchema = makeSchema();
