import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ActionLogScalarWhereInputObjectSchema as ActionLogScalarWhereInputObjectSchema } from './ActionLogScalarWhereInput.schema';
import { ActionLogUpdateManyMutationInputObjectSchema as ActionLogUpdateManyMutationInputObjectSchema } from './ActionLogUpdateManyMutationInput.schema';
import { ActionLogUncheckedUpdateManyWithoutUserInputObjectSchema as ActionLogUncheckedUpdateManyWithoutUserInputObjectSchema } from './ActionLogUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActionLogScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ActionLogUpdateManyMutationInputObjectSchema), z.lazy(() => ActionLogUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const ActionLogUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.ActionLogUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ActionLogUpdateManyWithWhereWithoutUserInput>;
export const ActionLogUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
