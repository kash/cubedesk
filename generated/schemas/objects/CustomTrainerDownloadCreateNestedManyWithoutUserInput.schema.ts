import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerDownloadCreateWithoutUserInputObjectSchema as CustomTrainerDownloadCreateWithoutUserInputObjectSchema } from './CustomTrainerDownloadCreateWithoutUserInput.schema';
import { CustomTrainerDownloadUncheckedCreateWithoutUserInputObjectSchema as CustomTrainerDownloadUncheckedCreateWithoutUserInputObjectSchema } from './CustomTrainerDownloadUncheckedCreateWithoutUserInput.schema';
import { CustomTrainerDownloadCreateOrConnectWithoutUserInputObjectSchema as CustomTrainerDownloadCreateOrConnectWithoutUserInputObjectSchema } from './CustomTrainerDownloadCreateOrConnectWithoutUserInput.schema';
import { CustomTrainerDownloadCreateManyUserInputEnvelopeObjectSchema as CustomTrainerDownloadCreateManyUserInputEnvelopeObjectSchema } from './CustomTrainerDownloadCreateManyUserInputEnvelope.schema';
import { CustomTrainerDownloadWhereUniqueInputObjectSchema as CustomTrainerDownloadWhereUniqueInputObjectSchema } from './CustomTrainerDownloadWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomTrainerDownloadCreateWithoutUserInputObjectSchema), z.lazy(() => CustomTrainerDownloadCreateWithoutUserInputObjectSchema).array(), z.lazy(() => CustomTrainerDownloadUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => CustomTrainerDownloadUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CustomTrainerDownloadCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => CustomTrainerDownloadCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CustomTrainerDownloadCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CustomTrainerDownloadCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadCreateNestedManyWithoutUserInput>;
export const CustomTrainerDownloadCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
