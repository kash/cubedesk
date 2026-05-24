import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ReportScalarWhereInputObjectSchema as ReportScalarWhereInputObjectSchema } from './ReportScalarWhereInput.schema';
import { ReportUpdateManyMutationInputObjectSchema as ReportUpdateManyMutationInputObjectSchema } from './ReportUpdateManyMutationInput.schema';
import { ReportUncheckedUpdateManyWithoutReported_userInputObjectSchema as ReportUncheckedUpdateManyWithoutReported_userInputObjectSchema } from './ReportUncheckedUpdateManyWithoutReported_userInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateManyMutationInputObjectSchema), z.lazy(() => ReportUncheckedUpdateManyWithoutReported_userInputObjectSchema)])
}).strict();
export const ReportUpdateManyWithWhereWithoutReported_userInputObjectSchema: z.ZodType<Prisma.ReportUpdateManyWithWhereWithoutReported_userInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateManyWithWhereWithoutReported_userInput>;
export const ReportUpdateManyWithWhereWithoutReported_userInputObjectZodSchema = makeSchema();
