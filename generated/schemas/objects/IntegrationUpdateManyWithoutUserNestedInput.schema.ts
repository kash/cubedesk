import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { IntegrationCreateWithoutUserInputObjectSchema as IntegrationCreateWithoutUserInputObjectSchema } from './IntegrationCreateWithoutUserInput.schema';
import { IntegrationUncheckedCreateWithoutUserInputObjectSchema as IntegrationUncheckedCreateWithoutUserInputObjectSchema } from './IntegrationUncheckedCreateWithoutUserInput.schema';
import { IntegrationCreateOrConnectWithoutUserInputObjectSchema as IntegrationCreateOrConnectWithoutUserInputObjectSchema } from './IntegrationCreateOrConnectWithoutUserInput.schema';
import { IntegrationUpsertWithWhereUniqueWithoutUserInputObjectSchema as IntegrationUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './IntegrationUpsertWithWhereUniqueWithoutUserInput.schema';
import { IntegrationCreateManyUserInputEnvelopeObjectSchema as IntegrationCreateManyUserInputEnvelopeObjectSchema } from './IntegrationCreateManyUserInputEnvelope.schema';
import { IntegrationWhereUniqueInputObjectSchema as IntegrationWhereUniqueInputObjectSchema } from './IntegrationWhereUniqueInput.schema';
import { IntegrationUpdateWithWhereUniqueWithoutUserInputObjectSchema as IntegrationUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './IntegrationUpdateWithWhereUniqueWithoutUserInput.schema';
import { IntegrationUpdateManyWithWhereWithoutUserInputObjectSchema as IntegrationUpdateManyWithWhereWithoutUserInputObjectSchema } from './IntegrationUpdateManyWithWhereWithoutUserInput.schema';
import { IntegrationScalarWhereInputObjectSchema as IntegrationScalarWhereInputObjectSchema } from './IntegrationScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => IntegrationCreateWithoutUserInputObjectSchema), z.lazy(() => IntegrationCreateWithoutUserInputObjectSchema).array(), z.lazy(() => IntegrationUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => IntegrationUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => IntegrationCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => IntegrationCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => IntegrationUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => IntegrationUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => IntegrationCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => IntegrationWhereUniqueInputObjectSchema), z.lazy(() => IntegrationWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => IntegrationWhereUniqueInputObjectSchema), z.lazy(() => IntegrationWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => IntegrationWhereUniqueInputObjectSchema), z.lazy(() => IntegrationWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => IntegrationWhereUniqueInputObjectSchema), z.lazy(() => IntegrationWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => IntegrationUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => IntegrationUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => IntegrationUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => IntegrationUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => IntegrationScalarWhereInputObjectSchema), z.lazy(() => IntegrationScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const IntegrationUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.IntegrationUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.IntegrationUpdateManyWithoutUserNestedInput>;
export const IntegrationUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
