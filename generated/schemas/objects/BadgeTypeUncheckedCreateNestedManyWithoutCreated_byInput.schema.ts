import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeTypeCreateWithoutCreated_byInputObjectSchema as BadgeTypeCreateWithoutCreated_byInputObjectSchema } from './BadgeTypeCreateWithoutCreated_byInput.schema';
import { BadgeTypeUncheckedCreateWithoutCreated_byInputObjectSchema as BadgeTypeUncheckedCreateWithoutCreated_byInputObjectSchema } from './BadgeTypeUncheckedCreateWithoutCreated_byInput.schema';
import { BadgeTypeCreateOrConnectWithoutCreated_byInputObjectSchema as BadgeTypeCreateOrConnectWithoutCreated_byInputObjectSchema } from './BadgeTypeCreateOrConnectWithoutCreated_byInput.schema';
import { BadgeTypeCreateManyCreated_byInputEnvelopeObjectSchema as BadgeTypeCreateManyCreated_byInputEnvelopeObjectSchema } from './BadgeTypeCreateManyCreated_byInputEnvelope.schema';
import { BadgeTypeWhereUniqueInputObjectSchema as BadgeTypeWhereUniqueInputObjectSchema } from './BadgeTypeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BadgeTypeCreateWithoutCreated_byInputObjectSchema), z.lazy(() => BadgeTypeCreateWithoutCreated_byInputObjectSchema).array(), z.lazy(() => BadgeTypeUncheckedCreateWithoutCreated_byInputObjectSchema), z.lazy(() => BadgeTypeUncheckedCreateWithoutCreated_byInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BadgeTypeCreateOrConnectWithoutCreated_byInputObjectSchema), z.lazy(() => BadgeTypeCreateOrConnectWithoutCreated_byInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BadgeTypeCreateManyCreated_byInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => BadgeTypeWhereUniqueInputObjectSchema), z.lazy(() => BadgeTypeWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const BadgeTypeUncheckedCreateNestedManyWithoutCreated_byInputObjectSchema: z.ZodType<Prisma.BadgeTypeUncheckedCreateNestedManyWithoutCreated_byInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeTypeUncheckedCreateNestedManyWithoutCreated_byInput>;
export const BadgeTypeUncheckedCreateNestedManyWithoutCreated_byInputObjectZodSchema = makeSchema();
