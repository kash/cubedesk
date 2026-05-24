import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ReportScalarWhereInputObjectSchema as ReportScalarWhereInputObjectSchema } from './ReportScalarWhereInput.schema';
import { ReportUpdateManyMutationInputObjectSchema as ReportUpdateManyMutationInputObjectSchema } from './ReportUpdateManyMutationInput.schema';
import { ReportUncheckedUpdateManyWithoutCreated_byInputObjectSchema as ReportUncheckedUpdateManyWithoutCreated_byInputObjectSchema } from './ReportUncheckedUpdateManyWithoutCreated_byInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateManyMutationInputObjectSchema), z.lazy(() => ReportUncheckedUpdateManyWithoutCreated_byInputObjectSchema)])
}).strict();
export const ReportUpdateManyWithWhereWithoutCreated_byInputObjectSchema: z.ZodType<Prisma.ReportUpdateManyWithWhereWithoutCreated_byInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateManyWithWhereWithoutCreated_byInput>;
export const ReportUpdateManyWithWhereWithoutCreated_byInputObjectZodSchema = makeSchema();
