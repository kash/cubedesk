import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeTypeWhereUniqueInputObjectSchema as BadgeTypeWhereUniqueInputObjectSchema } from './BadgeTypeWhereUniqueInput.schema';
import { BadgeTypeCreateWithoutCreated_byInputObjectSchema as BadgeTypeCreateWithoutCreated_byInputObjectSchema } from './BadgeTypeCreateWithoutCreated_byInput.schema';
import { BadgeTypeUncheckedCreateWithoutCreated_byInputObjectSchema as BadgeTypeUncheckedCreateWithoutCreated_byInputObjectSchema } from './BadgeTypeUncheckedCreateWithoutCreated_byInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BadgeTypeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BadgeTypeCreateWithoutCreated_byInputObjectSchema), z.lazy(() => BadgeTypeUncheckedCreateWithoutCreated_byInputObjectSchema)])
}).strict();
export const BadgeTypeCreateOrConnectWithoutCreated_byInputObjectSchema: z.ZodType<Prisma.BadgeTypeCreateOrConnectWithoutCreated_byInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeTypeCreateOrConnectWithoutCreated_byInput>;
export const BadgeTypeCreateOrConnectWithoutCreated_byInputObjectZodSchema = makeSchema();
