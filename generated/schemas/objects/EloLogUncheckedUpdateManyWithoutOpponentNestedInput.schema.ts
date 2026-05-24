import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloLogCreateWithoutOpponentInputObjectSchema as EloLogCreateWithoutOpponentInputObjectSchema } from './EloLogCreateWithoutOpponentInput.schema';
import { EloLogUncheckedCreateWithoutOpponentInputObjectSchema as EloLogUncheckedCreateWithoutOpponentInputObjectSchema } from './EloLogUncheckedCreateWithoutOpponentInput.schema';
import { EloLogCreateOrConnectWithoutOpponentInputObjectSchema as EloLogCreateOrConnectWithoutOpponentInputObjectSchema } from './EloLogCreateOrConnectWithoutOpponentInput.schema';
import { EloLogUpsertWithWhereUniqueWithoutOpponentInputObjectSchema as EloLogUpsertWithWhereUniqueWithoutOpponentInputObjectSchema } from './EloLogUpsertWithWhereUniqueWithoutOpponentInput.schema';
import { EloLogCreateManyOpponentInputEnvelopeObjectSchema as EloLogCreateManyOpponentInputEnvelopeObjectSchema } from './EloLogCreateManyOpponentInputEnvelope.schema';
import { EloLogWhereUniqueInputObjectSchema as EloLogWhereUniqueInputObjectSchema } from './EloLogWhereUniqueInput.schema';
import { EloLogUpdateWithWhereUniqueWithoutOpponentInputObjectSchema as EloLogUpdateWithWhereUniqueWithoutOpponentInputObjectSchema } from './EloLogUpdateWithWhereUniqueWithoutOpponentInput.schema';
import { EloLogUpdateManyWithWhereWithoutOpponentInputObjectSchema as EloLogUpdateManyWithWhereWithoutOpponentInputObjectSchema } from './EloLogUpdateManyWithWhereWithoutOpponentInput.schema';
import { EloLogScalarWhereInputObjectSchema as EloLogScalarWhereInputObjectSchema } from './EloLogScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EloLogCreateWithoutOpponentInputObjectSchema), z.lazy(() => EloLogCreateWithoutOpponentInputObjectSchema).array(), z.lazy(() => EloLogUncheckedCreateWithoutOpponentInputObjectSchema), z.lazy(() => EloLogUncheckedCreateWithoutOpponentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => EloLogCreateOrConnectWithoutOpponentInputObjectSchema), z.lazy(() => EloLogCreateOrConnectWithoutOpponentInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => EloLogUpsertWithWhereUniqueWithoutOpponentInputObjectSchema), z.lazy(() => EloLogUpsertWithWhereUniqueWithoutOpponentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => EloLogCreateManyOpponentInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => EloLogWhereUniqueInputObjectSchema), z.lazy(() => EloLogWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => EloLogWhereUniqueInputObjectSchema), z.lazy(() => EloLogWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => EloLogWhereUniqueInputObjectSchema), z.lazy(() => EloLogWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => EloLogWhereUniqueInputObjectSchema), z.lazy(() => EloLogWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => EloLogUpdateWithWhereUniqueWithoutOpponentInputObjectSchema), z.lazy(() => EloLogUpdateWithWhereUniqueWithoutOpponentInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => EloLogUpdateManyWithWhereWithoutOpponentInputObjectSchema), z.lazy(() => EloLogUpdateManyWithWhereWithoutOpponentInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => EloLogScalarWhereInputObjectSchema), z.lazy(() => EloLogScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const EloLogUncheckedUpdateManyWithoutOpponentNestedInputObjectSchema: z.ZodType<Prisma.EloLogUncheckedUpdateManyWithoutOpponentNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.EloLogUncheckedUpdateManyWithoutOpponentNestedInput>;
export const EloLogUncheckedUpdateManyWithoutOpponentNestedInputObjectZodSchema = makeSchema();
