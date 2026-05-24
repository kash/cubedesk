import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeCreateWithoutUserInputObjectSchema as BadgeCreateWithoutUserInputObjectSchema } from './BadgeCreateWithoutUserInput.schema';
import { BadgeUncheckedCreateWithoutUserInputObjectSchema as BadgeUncheckedCreateWithoutUserInputObjectSchema } from './BadgeUncheckedCreateWithoutUserInput.schema';
import { BadgeCreateOrConnectWithoutUserInputObjectSchema as BadgeCreateOrConnectWithoutUserInputObjectSchema } from './BadgeCreateOrConnectWithoutUserInput.schema';
import { BadgeCreateManyUserInputEnvelopeObjectSchema as BadgeCreateManyUserInputEnvelopeObjectSchema } from './BadgeCreateManyUserInputEnvelope.schema';
import { BadgeWhereUniqueInputObjectSchema as BadgeWhereUniqueInputObjectSchema } from './BadgeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BadgeCreateWithoutUserInputObjectSchema), z.lazy(() => BadgeCreateWithoutUserInputObjectSchema).array(), z.lazy(() => BadgeUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => BadgeUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BadgeCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => BadgeCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BadgeCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => BadgeWhereUniqueInputObjectSchema), z.lazy(() => BadgeWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const BadgeCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.BadgeCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeCreateNestedManyWithoutUserInput>;
export const BadgeCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
