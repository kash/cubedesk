import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerLikeCreateWithoutUserInputObjectSchema as CustomTrainerLikeCreateWithoutUserInputObjectSchema } from './CustomTrainerLikeCreateWithoutUserInput.schema';
import { CustomTrainerLikeUncheckedCreateWithoutUserInputObjectSchema as CustomTrainerLikeUncheckedCreateWithoutUserInputObjectSchema } from './CustomTrainerLikeUncheckedCreateWithoutUserInput.schema';
import { CustomTrainerLikeCreateOrConnectWithoutUserInputObjectSchema as CustomTrainerLikeCreateOrConnectWithoutUserInputObjectSchema } from './CustomTrainerLikeCreateOrConnectWithoutUserInput.schema';
import { CustomTrainerLikeUpsertWithWhereUniqueWithoutUserInputObjectSchema as CustomTrainerLikeUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './CustomTrainerLikeUpsertWithWhereUniqueWithoutUserInput.schema';
import { CustomTrainerLikeCreateManyUserInputEnvelopeObjectSchema as CustomTrainerLikeCreateManyUserInputEnvelopeObjectSchema } from './CustomTrainerLikeCreateManyUserInputEnvelope.schema';
import { CustomTrainerLikeWhereUniqueInputObjectSchema as CustomTrainerLikeWhereUniqueInputObjectSchema } from './CustomTrainerLikeWhereUniqueInput.schema';
import { CustomTrainerLikeUpdateWithWhereUniqueWithoutUserInputObjectSchema as CustomTrainerLikeUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './CustomTrainerLikeUpdateWithWhereUniqueWithoutUserInput.schema';
import { CustomTrainerLikeUpdateManyWithWhereWithoutUserInputObjectSchema as CustomTrainerLikeUpdateManyWithWhereWithoutUserInputObjectSchema } from './CustomTrainerLikeUpdateManyWithWhereWithoutUserInput.schema';
import { CustomTrainerLikeScalarWhereInputObjectSchema as CustomTrainerLikeScalarWhereInputObjectSchema } from './CustomTrainerLikeScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomTrainerLikeCreateWithoutUserInputObjectSchema), z.lazy(() => CustomTrainerLikeCreateWithoutUserInputObjectSchema).array(), z.lazy(() => CustomTrainerLikeUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => CustomTrainerLikeUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CustomTrainerLikeCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => CustomTrainerLikeCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CustomTrainerLikeUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => CustomTrainerLikeUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CustomTrainerLikeCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CustomTrainerLikeWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerLikeWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CustomTrainerLikeWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerLikeWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CustomTrainerLikeWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerLikeWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CustomTrainerLikeWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerLikeWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CustomTrainerLikeUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => CustomTrainerLikeUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CustomTrainerLikeUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => CustomTrainerLikeUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CustomTrainerLikeScalarWhereInputObjectSchema), z.lazy(() => CustomTrainerLikeScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CustomTrainerLikeUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.CustomTrainerLikeUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerLikeUncheckedUpdateManyWithoutUserNestedInput>;
export const CustomTrainerLikeUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
