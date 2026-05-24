import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeScalarWhereInputObjectSchema as BadgeScalarWhereInputObjectSchema } from './BadgeScalarWhereInput.schema';
import { BadgeUpdateManyMutationInputObjectSchema as BadgeUpdateManyMutationInputObjectSchema } from './BadgeUpdateManyMutationInput.schema';
import { BadgeUncheckedUpdateManyWithoutUserInputObjectSchema as BadgeUncheckedUpdateManyWithoutUserInputObjectSchema } from './BadgeUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BadgeScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => BadgeUpdateManyMutationInputObjectSchema), z.lazy(() => BadgeUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const BadgeUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.BadgeUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeUpdateManyWithWhereWithoutUserInput>;
export const BadgeUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
