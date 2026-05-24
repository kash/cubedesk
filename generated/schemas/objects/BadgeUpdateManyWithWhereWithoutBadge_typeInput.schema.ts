import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeScalarWhereInputObjectSchema as BadgeScalarWhereInputObjectSchema } from './BadgeScalarWhereInput.schema';
import { BadgeUpdateManyMutationInputObjectSchema as BadgeUpdateManyMutationInputObjectSchema } from './BadgeUpdateManyMutationInput.schema';
import { BadgeUncheckedUpdateManyWithoutBadge_typeInputObjectSchema as BadgeUncheckedUpdateManyWithoutBadge_typeInputObjectSchema } from './BadgeUncheckedUpdateManyWithoutBadge_typeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BadgeScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => BadgeUpdateManyMutationInputObjectSchema), z.lazy(() => BadgeUncheckedUpdateManyWithoutBadge_typeInputObjectSchema)])
}).strict();
export const BadgeUpdateManyWithWhereWithoutBadge_typeInputObjectSchema: z.ZodType<Prisma.BadgeUpdateManyWithWhereWithoutBadge_typeInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeUpdateManyWithWhereWithoutBadge_typeInput>;
export const BadgeUpdateManyWithWhereWithoutBadge_typeInputObjectZodSchema = makeSchema();
