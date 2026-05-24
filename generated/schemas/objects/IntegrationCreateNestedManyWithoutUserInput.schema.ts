import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { IntegrationCreateWithoutUserInputObjectSchema as IntegrationCreateWithoutUserInputObjectSchema } from './IntegrationCreateWithoutUserInput.schema';
import { IntegrationUncheckedCreateWithoutUserInputObjectSchema as IntegrationUncheckedCreateWithoutUserInputObjectSchema } from './IntegrationUncheckedCreateWithoutUserInput.schema';
import { IntegrationCreateOrConnectWithoutUserInputObjectSchema as IntegrationCreateOrConnectWithoutUserInputObjectSchema } from './IntegrationCreateOrConnectWithoutUserInput.schema';
import { IntegrationCreateManyUserInputEnvelopeObjectSchema as IntegrationCreateManyUserInputEnvelopeObjectSchema } from './IntegrationCreateManyUserInputEnvelope.schema';
import { IntegrationWhereUniqueInputObjectSchema as IntegrationWhereUniqueInputObjectSchema } from './IntegrationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => IntegrationCreateWithoutUserInputObjectSchema), z.lazy(() => IntegrationCreateWithoutUserInputObjectSchema).array(), z.lazy(() => IntegrationUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => IntegrationUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => IntegrationCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => IntegrationCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => IntegrationCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => IntegrationWhereUniqueInputObjectSchema), z.lazy(() => IntegrationWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const IntegrationCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.IntegrationCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.IntegrationCreateNestedManyWithoutUserInput>;
export const IntegrationCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
