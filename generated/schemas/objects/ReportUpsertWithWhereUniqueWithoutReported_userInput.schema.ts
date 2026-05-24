import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithoutReported_userInputObjectSchema as ReportUpdateWithoutReported_userInputObjectSchema } from './ReportUpdateWithoutReported_userInput.schema';
import { ReportUncheckedUpdateWithoutReported_userInputObjectSchema as ReportUncheckedUpdateWithoutReported_userInputObjectSchema } from './ReportUncheckedUpdateWithoutReported_userInput.schema';
import { ReportCreateWithoutReported_userInputObjectSchema as ReportCreateWithoutReported_userInputObjectSchema } from './ReportCreateWithoutReported_userInput.schema';
import { ReportUncheckedCreateWithoutReported_userInputObjectSchema as ReportUncheckedCreateWithoutReported_userInputObjectSchema } from './ReportUncheckedCreateWithoutReported_userInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportUpdateWithoutReported_userInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutReported_userInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportCreateWithoutReported_userInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutReported_userInputObjectSchema)])
}).strict();
export const ReportUpsertWithWhereUniqueWithoutReported_userInputObjectSchema: z.ZodType<Prisma.ReportUpsertWithWhereUniqueWithoutReported_userInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpsertWithWhereUniqueWithoutReported_userInput>;
export const ReportUpsertWithWhereUniqueWithoutReported_userInputObjectZodSchema = makeSchema();
