import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerLikeCreateWithoutCustom_trainerInputObjectSchema as CustomTrainerLikeCreateWithoutCustom_trainerInputObjectSchema } from './CustomTrainerLikeCreateWithoutCustom_trainerInput.schema';
import { CustomTrainerLikeUncheckedCreateWithoutCustom_trainerInputObjectSchema as CustomTrainerLikeUncheckedCreateWithoutCustom_trainerInputObjectSchema } from './CustomTrainerLikeUncheckedCreateWithoutCustom_trainerInput.schema';
import { CustomTrainerLikeCreateOrConnectWithoutCustom_trainerInputObjectSchema as CustomTrainerLikeCreateOrConnectWithoutCustom_trainerInputObjectSchema } from './CustomTrainerLikeCreateOrConnectWithoutCustom_trainerInput.schema';
import { CustomTrainerLikeCreateManyCustom_trainerInputEnvelopeObjectSchema as CustomTrainerLikeCreateManyCustom_trainerInputEnvelopeObjectSchema } from './CustomTrainerLikeCreateManyCustom_trainerInputEnvelope.schema';
import { CustomTrainerLikeWhereUniqueInputObjectSchema as CustomTrainerLikeWhereUniqueInputObjectSchema } from './CustomTrainerLikeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomTrainerLikeCreateWithoutCustom_trainerInputObjectSchema), z.lazy(() => CustomTrainerLikeCreateWithoutCustom_trainerInputObjectSchema).array(), z.lazy(() => CustomTrainerLikeUncheckedCreateWithoutCustom_trainerInputObjectSchema), z.lazy(() => CustomTrainerLikeUncheckedCreateWithoutCustom_trainerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CustomTrainerLikeCreateOrConnectWithoutCustom_trainerInputObjectSchema), z.lazy(() => CustomTrainerLikeCreateOrConnectWithoutCustom_trainerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CustomTrainerLikeCreateManyCustom_trainerInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CustomTrainerLikeWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerLikeWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CustomTrainerLikeUncheckedCreateNestedManyWithoutCustom_trainerInputObjectSchema: z.ZodType<Prisma.CustomTrainerLikeUncheckedCreateNestedManyWithoutCustom_trainerInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerLikeUncheckedCreateNestedManyWithoutCustom_trainerInput>;
export const CustomTrainerLikeUncheckedCreateNestedManyWithoutCustom_trainerInputObjectZodSchema = makeSchema();
