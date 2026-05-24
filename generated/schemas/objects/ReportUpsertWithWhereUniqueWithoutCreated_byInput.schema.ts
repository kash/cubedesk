import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithoutCreated_byInputObjectSchema as ReportUpdateWithoutCreated_byInputObjectSchema } from './ReportUpdateWithoutCreated_byInput.schema';
import { ReportUncheckedUpdateWithoutCreated_byInputObjectSchema as ReportUncheckedUpdateWithoutCreated_byInputObjectSchema } from './ReportUncheckedUpdateWithoutCreated_byInput.schema';
import { ReportCreateWithoutCreated_byInputObjectSchema as ReportCreateWithoutCreated_byInputObjectSchema } from './ReportCreateWithoutCreated_byInput.schema';
import { ReportUncheckedCreateWithoutCreated_byInputObjectSchema as ReportUncheckedCreateWithoutCreated_byInputObjectSchema } from './ReportUncheckedCreateWithoutCreated_byInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportUpdateWithoutCreated_byInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutCreated_byInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportCreateWithoutCreated_byInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutCreated_byInputObjectSchema)])
}).strict();
export const ReportUpsertWithWhereUniqueWithoutCreated_byInputObjectSchema: z.ZodType<Prisma.ReportUpsertWithWhereUniqueWithoutCreated_byInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpsertWithWhereUniqueWithoutCreated_byInput>;
export const ReportUpsertWithWhereUniqueWithoutCreated_byInputObjectZodSchema = makeSchema();
