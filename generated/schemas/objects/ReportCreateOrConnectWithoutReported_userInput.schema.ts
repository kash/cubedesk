import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportCreateWithoutReported_userInputObjectSchema as ReportCreateWithoutReported_userInputObjectSchema } from './ReportCreateWithoutReported_userInput.schema';
import { ReportUncheckedCreateWithoutReported_userInputObjectSchema as ReportUncheckedCreateWithoutReported_userInputObjectSchema } from './ReportUncheckedCreateWithoutReported_userInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportCreateWithoutReported_userInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutReported_userInputObjectSchema)])
}).strict();
export const ReportCreateOrConnectWithoutReported_userInputObjectSchema: z.ZodType<Prisma.ReportCreateOrConnectWithoutReported_userInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateOrConnectWithoutReported_userInput>;
export const ReportCreateOrConnectWithoutReported_userInputObjectZodSchema = makeSchema();
