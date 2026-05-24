import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeTypeScalarWhereInputObjectSchema as BadgeTypeScalarWhereInputObjectSchema } from './BadgeTypeScalarWhereInput.schema';
import { BadgeTypeUpdateManyMutationInputObjectSchema as BadgeTypeUpdateManyMutationInputObjectSchema } from './BadgeTypeUpdateManyMutationInput.schema';
import { BadgeTypeUncheckedUpdateManyWithoutCreated_byInputObjectSchema as BadgeTypeUncheckedUpdateManyWithoutCreated_byInputObjectSchema } from './BadgeTypeUncheckedUpdateManyWithoutCreated_byInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BadgeTypeScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => BadgeTypeUpdateManyMutationInputObjectSchema), z.lazy(() => BadgeTypeUncheckedUpdateManyWithoutCreated_byInputObjectSchema)])
}).strict();
export const BadgeTypeUpdateManyWithWhereWithoutCreated_byInputObjectSchema: z.ZodType<Prisma.BadgeTypeUpdateManyWithWhereWithoutCreated_byInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeTypeUpdateManyWithWhereWithoutCreated_byInput>;
export const BadgeTypeUpdateManyWithWhereWithoutCreated_byInputObjectZodSchema = makeSchema();
