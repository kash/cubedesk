import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BanLogCreateWithoutCreated_byInputObjectSchema as BanLogCreateWithoutCreated_byInputObjectSchema } from './BanLogCreateWithoutCreated_byInput.schema';
import { BanLogUncheckedCreateWithoutCreated_byInputObjectSchema as BanLogUncheckedCreateWithoutCreated_byInputObjectSchema } from './BanLogUncheckedCreateWithoutCreated_byInput.schema';
import { BanLogCreateOrConnectWithoutCreated_byInputObjectSchema as BanLogCreateOrConnectWithoutCreated_byInputObjectSchema } from './BanLogCreateOrConnectWithoutCreated_byInput.schema';
import { BanLogCreateManyCreated_byInputEnvelopeObjectSchema as BanLogCreateManyCreated_byInputEnvelopeObjectSchema } from './BanLogCreateManyCreated_byInputEnvelope.schema';
import { BanLogWhereUniqueInputObjectSchema as BanLogWhereUniqueInputObjectSchema } from './BanLogWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BanLogCreateWithoutCreated_byInputObjectSchema), z.lazy(() => BanLogCreateWithoutCreated_byInputObjectSchema).array(), z.lazy(() => BanLogUncheckedCreateWithoutCreated_byInputObjectSchema), z.lazy(() => BanLogUncheckedCreateWithoutCreated_byInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BanLogCreateOrConnectWithoutCreated_byInputObjectSchema), z.lazy(() => BanLogCreateOrConnectWithoutCreated_byInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BanLogCreateManyCreated_byInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => BanLogWhereUniqueInputObjectSchema), z.lazy(() => BanLogWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const BanLogCreateNestedManyWithoutCreated_byInputObjectSchema: z.ZodType<Prisma.BanLogCreateNestedManyWithoutCreated_byInput> = makeSchema() as unknown as z.ZodType<Prisma.BanLogCreateNestedManyWithoutCreated_byInput>;
export const BanLogCreateNestedManyWithoutCreated_byInputObjectZodSchema = makeSchema();
