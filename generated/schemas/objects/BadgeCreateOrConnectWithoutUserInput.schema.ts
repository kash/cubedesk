import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeWhereUniqueInputObjectSchema as BadgeWhereUniqueInputObjectSchema } from './BadgeWhereUniqueInput.schema';
import { BadgeCreateWithoutUserInputObjectSchema as BadgeCreateWithoutUserInputObjectSchema } from './BadgeCreateWithoutUserInput.schema';
import { BadgeUncheckedCreateWithoutUserInputObjectSchema as BadgeUncheckedCreateWithoutUserInputObjectSchema } from './BadgeUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BadgeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BadgeCreateWithoutUserInputObjectSchema), z.lazy(() => BadgeUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const BadgeCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.BadgeCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeCreateOrConnectWithoutUserInput>;
export const BadgeCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
