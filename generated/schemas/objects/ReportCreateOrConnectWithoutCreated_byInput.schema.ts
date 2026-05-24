import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportCreateWithoutCreated_byInputObjectSchema as ReportCreateWithoutCreated_byInputObjectSchema } from './ReportCreateWithoutCreated_byInput.schema';
import { ReportUncheckedCreateWithoutCreated_byInputObjectSchema as ReportUncheckedCreateWithoutCreated_byInputObjectSchema } from './ReportUncheckedCreateWithoutCreated_byInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportCreateWithoutCreated_byInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutCreated_byInputObjectSchema)])
}).strict();
export const ReportCreateOrConnectWithoutCreated_byInputObjectSchema: z.ZodType<Prisma.ReportCreateOrConnectWithoutCreated_byInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateOrConnectWithoutCreated_byInput>;
export const ReportCreateOrConnectWithoutCreated_byInputObjectZodSchema = makeSchema();
