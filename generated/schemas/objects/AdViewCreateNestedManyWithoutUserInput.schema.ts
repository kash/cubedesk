import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AdViewCreateWithoutUserInputObjectSchema as AdViewCreateWithoutUserInputObjectSchema } from './AdViewCreateWithoutUserInput.schema';
import { AdViewUncheckedCreateWithoutUserInputObjectSchema as AdViewUncheckedCreateWithoutUserInputObjectSchema } from './AdViewUncheckedCreateWithoutUserInput.schema';
import { AdViewCreateOrConnectWithoutUserInputObjectSchema as AdViewCreateOrConnectWithoutUserInputObjectSchema } from './AdViewCreateOrConnectWithoutUserInput.schema';
import { AdViewCreateManyUserInputEnvelopeObjectSchema as AdViewCreateManyUserInputEnvelopeObjectSchema } from './AdViewCreateManyUserInputEnvelope.schema';
import { AdViewWhereUniqueInputObjectSchema as AdViewWhereUniqueInputObjectSchema } from './AdViewWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AdViewCreateWithoutUserInputObjectSchema), z.lazy(() => AdViewCreateWithoutUserInputObjectSchema).array(), z.lazy(() => AdViewUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => AdViewUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AdViewCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => AdViewCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AdViewCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AdViewWhereUniqueInputObjectSchema), z.lazy(() => AdViewWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AdViewCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.AdViewCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AdViewCreateNestedManyWithoutUserInput>;
export const AdViewCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
