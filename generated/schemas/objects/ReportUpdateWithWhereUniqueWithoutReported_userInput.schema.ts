import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithoutReported_userInputObjectSchema as ReportUpdateWithoutReported_userInputObjectSchema } from './ReportUpdateWithoutReported_userInput.schema';
import { ReportUncheckedUpdateWithoutReported_userInputObjectSchema as ReportUncheckedUpdateWithoutReported_userInputObjectSchema } from './ReportUncheckedUpdateWithoutReported_userInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateWithoutReported_userInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutReported_userInputObjectSchema)])
}).strict();
export const ReportUpdateWithWhereUniqueWithoutReported_userInputObjectSchema: z.ZodType<Prisma.ReportUpdateWithWhereUniqueWithoutReported_userInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateWithWhereUniqueWithoutReported_userInput>;
export const ReportUpdateWithWhereUniqueWithoutReported_userInputObjectZodSchema = makeSchema();
