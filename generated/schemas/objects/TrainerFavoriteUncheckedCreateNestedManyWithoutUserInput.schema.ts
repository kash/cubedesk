import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TrainerFavoriteCreateWithoutUserInputObjectSchema as TrainerFavoriteCreateWithoutUserInputObjectSchema } from './TrainerFavoriteCreateWithoutUserInput.schema';
import { TrainerFavoriteUncheckedCreateWithoutUserInputObjectSchema as TrainerFavoriteUncheckedCreateWithoutUserInputObjectSchema } from './TrainerFavoriteUncheckedCreateWithoutUserInput.schema';
import { TrainerFavoriteCreateOrConnectWithoutUserInputObjectSchema as TrainerFavoriteCreateOrConnectWithoutUserInputObjectSchema } from './TrainerFavoriteCreateOrConnectWithoutUserInput.schema';
import { TrainerFavoriteCreateManyUserInputEnvelopeObjectSchema as TrainerFavoriteCreateManyUserInputEnvelopeObjectSchema } from './TrainerFavoriteCreateManyUserInputEnvelope.schema';
import { TrainerFavoriteWhereUniqueInputObjectSchema as TrainerFavoriteWhereUniqueInputObjectSchema } from './TrainerFavoriteWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TrainerFavoriteCreateWithoutUserInputObjectSchema), z.lazy(() => TrainerFavoriteCreateWithoutUserInputObjectSchema).array(), z.lazy(() => TrainerFavoriteUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => TrainerFavoriteUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TrainerFavoriteCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => TrainerFavoriteCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TrainerFavoriteCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TrainerFavoriteWhereUniqueInputObjectSchema), z.lazy(() => TrainerFavoriteWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TrainerFavoriteUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.TrainerFavoriteUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TrainerFavoriteUncheckedCreateNestedManyWithoutUserInput>;
export const TrainerFavoriteUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
