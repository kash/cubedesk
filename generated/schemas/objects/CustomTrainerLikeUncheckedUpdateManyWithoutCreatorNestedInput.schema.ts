import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerLikeCreateWithoutCreatorInputObjectSchema as CustomTrainerLikeCreateWithoutCreatorInputObjectSchema } from './CustomTrainerLikeCreateWithoutCreatorInput.schema';
import { CustomTrainerLikeUncheckedCreateWithoutCreatorInputObjectSchema as CustomTrainerLikeUncheckedCreateWithoutCreatorInputObjectSchema } from './CustomTrainerLikeUncheckedCreateWithoutCreatorInput.schema';
import { CustomTrainerLikeCreateOrConnectWithoutCreatorInputObjectSchema as CustomTrainerLikeCreateOrConnectWithoutCreatorInputObjectSchema } from './CustomTrainerLikeCreateOrConnectWithoutCreatorInput.schema';
import { CustomTrainerLikeUpsertWithWhereUniqueWithoutCreatorInputObjectSchema as CustomTrainerLikeUpsertWithWhereUniqueWithoutCreatorInputObjectSchema } from './CustomTrainerLikeUpsertWithWhereUniqueWithoutCreatorInput.schema';
import { CustomTrainerLikeCreateManyCreatorInputEnvelopeObjectSchema as CustomTrainerLikeCreateManyCreatorInputEnvelopeObjectSchema } from './CustomTrainerLikeCreateManyCreatorInputEnvelope.schema';
import { CustomTrainerLikeWhereUniqueInputObjectSchema as CustomTrainerLikeWhereUniqueInputObjectSchema } from './CustomTrainerLikeWhereUniqueInput.schema';
import { CustomTrainerLikeUpdateWithWhereUniqueWithoutCreatorInputObjectSchema as CustomTrainerLikeUpdateWithWhereUniqueWithoutCreatorInputObjectSchema } from './CustomTrainerLikeUpdateWithWhereUniqueWithoutCreatorInput.schema';
import { CustomTrainerLikeUpdateManyWithWhereWithoutCreatorInputObjectSchema as CustomTrainerLikeUpdateManyWithWhereWithoutCreatorInputObjectSchema } from './CustomTrainerLikeUpdateManyWithWhereWithoutCreatorInput.schema';
import { CustomTrainerLikeScalarWhereInputObjectSchema as CustomTrainerLikeScalarWhereInputObjectSchema } from './CustomTrainerLikeScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomTrainerLikeCreateWithoutCreatorInputObjectSchema), z.lazy(() => CustomTrainerLikeCreateWithoutCreatorInputObjectSchema).array(), z.lazy(() => CustomTrainerLikeUncheckedCreateWithoutCreatorInputObjectSchema), z.lazy(() => CustomTrainerLikeUncheckedCreateWithoutCreatorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CustomTrainerLikeCreateOrConnectWithoutCreatorInputObjectSchema), z.lazy(() => CustomTrainerLikeCreateOrConnectWithoutCreatorInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CustomTrainerLikeUpsertWithWhereUniqueWithoutCreatorInputObjectSchema), z.lazy(() => CustomTrainerLikeUpsertWithWhereUniqueWithoutCreatorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CustomTrainerLikeCreateManyCreatorInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CustomTrainerLikeWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerLikeWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CustomTrainerLikeWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerLikeWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CustomTrainerLikeWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerLikeWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CustomTrainerLikeWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerLikeWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CustomTrainerLikeUpdateWithWhereUniqueWithoutCreatorInputObjectSchema), z.lazy(() => CustomTrainerLikeUpdateWithWhereUniqueWithoutCreatorInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CustomTrainerLikeUpdateManyWithWhereWithoutCreatorInputObjectSchema), z.lazy(() => CustomTrainerLikeUpdateManyWithWhereWithoutCreatorInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CustomTrainerLikeScalarWhereInputObjectSchema), z.lazy(() => CustomTrainerLikeScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CustomTrainerLikeUncheckedUpdateManyWithoutCreatorNestedInputObjectSchema: z.ZodType<Prisma.CustomTrainerLikeUncheckedUpdateManyWithoutCreatorNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerLikeUncheckedUpdateManyWithoutCreatorNestedInput>;
export const CustomTrainerLikeUncheckedUpdateManyWithoutCreatorNestedInputObjectZodSchema = makeSchema();
