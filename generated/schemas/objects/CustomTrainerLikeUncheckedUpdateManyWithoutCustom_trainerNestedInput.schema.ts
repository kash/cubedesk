import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerLikeCreateWithoutCustom_trainerInputObjectSchema as CustomTrainerLikeCreateWithoutCustom_trainerInputObjectSchema } from './CustomTrainerLikeCreateWithoutCustom_trainerInput.schema';
import { CustomTrainerLikeUncheckedCreateWithoutCustom_trainerInputObjectSchema as CustomTrainerLikeUncheckedCreateWithoutCustom_trainerInputObjectSchema } from './CustomTrainerLikeUncheckedCreateWithoutCustom_trainerInput.schema';
import { CustomTrainerLikeCreateOrConnectWithoutCustom_trainerInputObjectSchema as CustomTrainerLikeCreateOrConnectWithoutCustom_trainerInputObjectSchema } from './CustomTrainerLikeCreateOrConnectWithoutCustom_trainerInput.schema';
import { CustomTrainerLikeUpsertWithWhereUniqueWithoutCustom_trainerInputObjectSchema as CustomTrainerLikeUpsertWithWhereUniqueWithoutCustom_trainerInputObjectSchema } from './CustomTrainerLikeUpsertWithWhereUniqueWithoutCustom_trainerInput.schema';
import { CustomTrainerLikeCreateManyCustom_trainerInputEnvelopeObjectSchema as CustomTrainerLikeCreateManyCustom_trainerInputEnvelopeObjectSchema } from './CustomTrainerLikeCreateManyCustom_trainerInputEnvelope.schema';
import { CustomTrainerLikeWhereUniqueInputObjectSchema as CustomTrainerLikeWhereUniqueInputObjectSchema } from './CustomTrainerLikeWhereUniqueInput.schema';
import { CustomTrainerLikeUpdateWithWhereUniqueWithoutCustom_trainerInputObjectSchema as CustomTrainerLikeUpdateWithWhereUniqueWithoutCustom_trainerInputObjectSchema } from './CustomTrainerLikeUpdateWithWhereUniqueWithoutCustom_trainerInput.schema';
import { CustomTrainerLikeUpdateManyWithWhereWithoutCustom_trainerInputObjectSchema as CustomTrainerLikeUpdateManyWithWhereWithoutCustom_trainerInputObjectSchema } from './CustomTrainerLikeUpdateManyWithWhereWithoutCustom_trainerInput.schema';
import { CustomTrainerLikeScalarWhereInputObjectSchema as CustomTrainerLikeScalarWhereInputObjectSchema } from './CustomTrainerLikeScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomTrainerLikeCreateWithoutCustom_trainerInputObjectSchema), z.lazy(() => CustomTrainerLikeCreateWithoutCustom_trainerInputObjectSchema).array(), z.lazy(() => CustomTrainerLikeUncheckedCreateWithoutCustom_trainerInputObjectSchema), z.lazy(() => CustomTrainerLikeUncheckedCreateWithoutCustom_trainerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CustomTrainerLikeCreateOrConnectWithoutCustom_trainerInputObjectSchema), z.lazy(() => CustomTrainerLikeCreateOrConnectWithoutCustom_trainerInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CustomTrainerLikeUpsertWithWhereUniqueWithoutCustom_trainerInputObjectSchema), z.lazy(() => CustomTrainerLikeUpsertWithWhereUniqueWithoutCustom_trainerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CustomTrainerLikeCreateManyCustom_trainerInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CustomTrainerLikeWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerLikeWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CustomTrainerLikeWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerLikeWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CustomTrainerLikeWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerLikeWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CustomTrainerLikeWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerLikeWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CustomTrainerLikeUpdateWithWhereUniqueWithoutCustom_trainerInputObjectSchema), z.lazy(() => CustomTrainerLikeUpdateWithWhereUniqueWithoutCustom_trainerInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CustomTrainerLikeUpdateManyWithWhereWithoutCustom_trainerInputObjectSchema), z.lazy(() => CustomTrainerLikeUpdateManyWithWhereWithoutCustom_trainerInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CustomTrainerLikeScalarWhereInputObjectSchema), z.lazy(() => CustomTrainerLikeScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CustomTrainerLikeUncheckedUpdateManyWithoutCustom_trainerNestedInputObjectSchema: z.ZodType<Prisma.CustomTrainerLikeUncheckedUpdateManyWithoutCustom_trainerNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerLikeUncheckedUpdateManyWithoutCustom_trainerNestedInput>;
export const CustomTrainerLikeUncheckedUpdateManyWithoutCustom_trainerNestedInputObjectZodSchema = makeSchema();
