import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TrainerFavoriteCreateWithoutUserInputObjectSchema as TrainerFavoriteCreateWithoutUserInputObjectSchema } from './TrainerFavoriteCreateWithoutUserInput.schema';
import { TrainerFavoriteUncheckedCreateWithoutUserInputObjectSchema as TrainerFavoriteUncheckedCreateWithoutUserInputObjectSchema } from './TrainerFavoriteUncheckedCreateWithoutUserInput.schema';
import { TrainerFavoriteCreateOrConnectWithoutUserInputObjectSchema as TrainerFavoriteCreateOrConnectWithoutUserInputObjectSchema } from './TrainerFavoriteCreateOrConnectWithoutUserInput.schema';
import { TrainerFavoriteUpsertWithWhereUniqueWithoutUserInputObjectSchema as TrainerFavoriteUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './TrainerFavoriteUpsertWithWhereUniqueWithoutUserInput.schema';
import { TrainerFavoriteCreateManyUserInputEnvelopeObjectSchema as TrainerFavoriteCreateManyUserInputEnvelopeObjectSchema } from './TrainerFavoriteCreateManyUserInputEnvelope.schema';
import { TrainerFavoriteWhereUniqueInputObjectSchema as TrainerFavoriteWhereUniqueInputObjectSchema } from './TrainerFavoriteWhereUniqueInput.schema';
import { TrainerFavoriteUpdateWithWhereUniqueWithoutUserInputObjectSchema as TrainerFavoriteUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './TrainerFavoriteUpdateWithWhereUniqueWithoutUserInput.schema';
import { TrainerFavoriteUpdateManyWithWhereWithoutUserInputObjectSchema as TrainerFavoriteUpdateManyWithWhereWithoutUserInputObjectSchema } from './TrainerFavoriteUpdateManyWithWhereWithoutUserInput.schema';
import { TrainerFavoriteScalarWhereInputObjectSchema as TrainerFavoriteScalarWhereInputObjectSchema } from './TrainerFavoriteScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TrainerFavoriteCreateWithoutUserInputObjectSchema), z.lazy(() => TrainerFavoriteCreateWithoutUserInputObjectSchema).array(), z.lazy(() => TrainerFavoriteUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => TrainerFavoriteUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TrainerFavoriteCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => TrainerFavoriteCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TrainerFavoriteUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => TrainerFavoriteUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TrainerFavoriteCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TrainerFavoriteWhereUniqueInputObjectSchema), z.lazy(() => TrainerFavoriteWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TrainerFavoriteWhereUniqueInputObjectSchema), z.lazy(() => TrainerFavoriteWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TrainerFavoriteWhereUniqueInputObjectSchema), z.lazy(() => TrainerFavoriteWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TrainerFavoriteWhereUniqueInputObjectSchema), z.lazy(() => TrainerFavoriteWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TrainerFavoriteUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => TrainerFavoriteUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TrainerFavoriteUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => TrainerFavoriteUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TrainerFavoriteScalarWhereInputObjectSchema), z.lazy(() => TrainerFavoriteScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TrainerFavoriteUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.TrainerFavoriteUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TrainerFavoriteUpdateManyWithoutUserNestedInput>;
export const TrainerFavoriteUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
