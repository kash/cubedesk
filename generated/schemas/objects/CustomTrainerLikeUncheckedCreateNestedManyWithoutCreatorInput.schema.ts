import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerLikeCreateWithoutCreatorInputObjectSchema as CustomTrainerLikeCreateWithoutCreatorInputObjectSchema } from './CustomTrainerLikeCreateWithoutCreatorInput.schema';
import { CustomTrainerLikeUncheckedCreateWithoutCreatorInputObjectSchema as CustomTrainerLikeUncheckedCreateWithoutCreatorInputObjectSchema } from './CustomTrainerLikeUncheckedCreateWithoutCreatorInput.schema';
import { CustomTrainerLikeCreateOrConnectWithoutCreatorInputObjectSchema as CustomTrainerLikeCreateOrConnectWithoutCreatorInputObjectSchema } from './CustomTrainerLikeCreateOrConnectWithoutCreatorInput.schema';
import { CustomTrainerLikeCreateManyCreatorInputEnvelopeObjectSchema as CustomTrainerLikeCreateManyCreatorInputEnvelopeObjectSchema } from './CustomTrainerLikeCreateManyCreatorInputEnvelope.schema';
import { CustomTrainerLikeWhereUniqueInputObjectSchema as CustomTrainerLikeWhereUniqueInputObjectSchema } from './CustomTrainerLikeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomTrainerLikeCreateWithoutCreatorInputObjectSchema), z.lazy(() => CustomTrainerLikeCreateWithoutCreatorInputObjectSchema).array(), z.lazy(() => CustomTrainerLikeUncheckedCreateWithoutCreatorInputObjectSchema), z.lazy(() => CustomTrainerLikeUncheckedCreateWithoutCreatorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CustomTrainerLikeCreateOrConnectWithoutCreatorInputObjectSchema), z.lazy(() => CustomTrainerLikeCreateOrConnectWithoutCreatorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CustomTrainerLikeCreateManyCreatorInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CustomTrainerLikeWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerLikeWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CustomTrainerLikeUncheckedCreateNestedManyWithoutCreatorInputObjectSchema: z.ZodType<Prisma.CustomTrainerLikeUncheckedCreateNestedManyWithoutCreatorInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerLikeUncheckedCreateNestedManyWithoutCreatorInput>;
export const CustomTrainerLikeUncheckedCreateNestedManyWithoutCreatorInputObjectZodSchema = makeSchema();
