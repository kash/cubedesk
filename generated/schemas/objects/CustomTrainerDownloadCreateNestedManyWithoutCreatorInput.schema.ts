import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerDownloadCreateWithoutCreatorInputObjectSchema as CustomTrainerDownloadCreateWithoutCreatorInputObjectSchema } from './CustomTrainerDownloadCreateWithoutCreatorInput.schema';
import { CustomTrainerDownloadUncheckedCreateWithoutCreatorInputObjectSchema as CustomTrainerDownloadUncheckedCreateWithoutCreatorInputObjectSchema } from './CustomTrainerDownloadUncheckedCreateWithoutCreatorInput.schema';
import { CustomTrainerDownloadCreateOrConnectWithoutCreatorInputObjectSchema as CustomTrainerDownloadCreateOrConnectWithoutCreatorInputObjectSchema } from './CustomTrainerDownloadCreateOrConnectWithoutCreatorInput.schema';
import { CustomTrainerDownloadCreateManyCreatorInputEnvelopeObjectSchema as CustomTrainerDownloadCreateManyCreatorInputEnvelopeObjectSchema } from './CustomTrainerDownloadCreateManyCreatorInputEnvelope.schema';
import { CustomTrainerDownloadWhereUniqueInputObjectSchema as CustomTrainerDownloadWhereUniqueInputObjectSchema } from './CustomTrainerDownloadWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomTrainerDownloadCreateWithoutCreatorInputObjectSchema), z.lazy(() => CustomTrainerDownloadCreateWithoutCreatorInputObjectSchema).array(), z.lazy(() => CustomTrainerDownloadUncheckedCreateWithoutCreatorInputObjectSchema), z.lazy(() => CustomTrainerDownloadUncheckedCreateWithoutCreatorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CustomTrainerDownloadCreateOrConnectWithoutCreatorInputObjectSchema), z.lazy(() => CustomTrainerDownloadCreateOrConnectWithoutCreatorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CustomTrainerDownloadCreateManyCreatorInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CustomTrainerDownloadCreateNestedManyWithoutCreatorInputObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadCreateNestedManyWithoutCreatorInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadCreateNestedManyWithoutCreatorInput>;
export const CustomTrainerDownloadCreateNestedManyWithoutCreatorInputObjectZodSchema = makeSchema();
