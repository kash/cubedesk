import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithoutCreated_byInputObjectSchema as ReportUpdateWithoutCreated_byInputObjectSchema } from './ReportUpdateWithoutCreated_byInput.schema';
import { ReportUncheckedUpdateWithoutCreated_byInputObjectSchema as ReportUncheckedUpdateWithoutCreated_byInputObjectSchema } from './ReportUncheckedUpdateWithoutCreated_byInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateWithoutCreated_byInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutCreated_byInputObjectSchema)])
}).strict();
export const ReportUpdateWithWhereUniqueWithoutCreated_byInputObjectSchema: z.ZodType<Prisma.ReportUpdateWithWhereUniqueWithoutCreated_byInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateWithWhereUniqueWithoutCreated_byInput>;
export const ReportUpdateWithWhereUniqueWithoutCreated_byInputObjectZodSchema = makeSchema();
