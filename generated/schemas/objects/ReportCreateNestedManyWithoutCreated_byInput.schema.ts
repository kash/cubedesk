import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ReportCreateWithoutCreated_byInputObjectSchema as ReportCreateWithoutCreated_byInputObjectSchema } from './ReportCreateWithoutCreated_byInput.schema';
import { ReportUncheckedCreateWithoutCreated_byInputObjectSchema as ReportUncheckedCreateWithoutCreated_byInputObjectSchema } from './ReportUncheckedCreateWithoutCreated_byInput.schema';
import { ReportCreateOrConnectWithoutCreated_byInputObjectSchema as ReportCreateOrConnectWithoutCreated_byInputObjectSchema } from './ReportCreateOrConnectWithoutCreated_byInput.schema';
import { ReportCreateManyCreated_byInputEnvelopeObjectSchema as ReportCreateManyCreated_byInputEnvelopeObjectSchema } from './ReportCreateManyCreated_byInputEnvelope.schema';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutCreated_byInputObjectSchema), z.lazy(() => ReportCreateWithoutCreated_byInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutCreated_byInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutCreated_byInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutCreated_byInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutCreated_byInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyCreated_byInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReportCreateNestedManyWithoutCreated_byInputObjectSchema: z.ZodType<Prisma.ReportCreateNestedManyWithoutCreated_byInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateNestedManyWithoutCreated_byInput>;
export const ReportCreateNestedManyWithoutCreated_byInputObjectZodSchema = makeSchema();
