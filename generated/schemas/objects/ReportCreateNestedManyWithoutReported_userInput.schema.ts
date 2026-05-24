import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ReportCreateWithoutReported_userInputObjectSchema as ReportCreateWithoutReported_userInputObjectSchema } from './ReportCreateWithoutReported_userInput.schema';
import { ReportUncheckedCreateWithoutReported_userInputObjectSchema as ReportUncheckedCreateWithoutReported_userInputObjectSchema } from './ReportUncheckedCreateWithoutReported_userInput.schema';
import { ReportCreateOrConnectWithoutReported_userInputObjectSchema as ReportCreateOrConnectWithoutReported_userInputObjectSchema } from './ReportCreateOrConnectWithoutReported_userInput.schema';
import { ReportCreateManyReported_userInputEnvelopeObjectSchema as ReportCreateManyReported_userInputEnvelopeObjectSchema } from './ReportCreateManyReported_userInputEnvelope.schema';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutReported_userInputObjectSchema), z.lazy(() => ReportCreateWithoutReported_userInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutReported_userInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutReported_userInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutReported_userInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutReported_userInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyReported_userInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReportCreateNestedManyWithoutReported_userInputObjectSchema: z.ZodType<Prisma.ReportCreateNestedManyWithoutReported_userInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateNestedManyWithoutReported_userInput>;
export const ReportCreateNestedManyWithoutReported_userInputObjectZodSchema = makeSchema();
