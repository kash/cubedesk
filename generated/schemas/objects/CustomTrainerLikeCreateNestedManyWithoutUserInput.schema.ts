import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerLikeCreateWithoutUserInputObjectSchema as CustomTrainerLikeCreateWithoutUserInputObjectSchema } from './CustomTrainerLikeCreateWithoutUserInput.schema';
import { CustomTrainerLikeUncheckedCreateWithoutUserInputObjectSchema as CustomTrainerLikeUncheckedCreateWithoutUserInputObjectSchema } from './CustomTrainerLikeUncheckedCreateWithoutUserInput.schema';
import { CustomTrainerLikeCreateOrConnectWithoutUserInputObjectSchema as CustomTrainerLikeCreateOrConnectWithoutUserInputObjectSchema } from './CustomTrainerLikeCreateOrConnectWithoutUserInput.schema';
import { CustomTrainerLikeCreateManyUserInputEnvelopeObjectSchema as CustomTrainerLikeCreateManyUserInputEnvelopeObjectSchema } from './CustomTrainerLikeCreateManyUserInputEnvelope.schema';
import { CustomTrainerLikeWhereUniqueInputObjectSchema as CustomTrainerLikeWhereUniqueInputObjectSchema } from './CustomTrainerLikeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomTrainerLikeCreateWithoutUserInputObjectSchema), z.lazy(() => CustomTrainerLikeCreateWithoutUserInputObjectSchema).array(), z.lazy(() => CustomTrainerLikeUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => CustomTrainerLikeUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CustomTrainerLikeCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => CustomTrainerLikeCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CustomTrainerLikeCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CustomTrainerLikeWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerLikeWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CustomTrainerLikeCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.CustomTrainerLikeCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerLikeCreateNestedManyWithoutUserInput>;
export const CustomTrainerLikeCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
