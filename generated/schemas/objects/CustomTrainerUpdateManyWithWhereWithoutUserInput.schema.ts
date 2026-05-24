import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerScalarWhereInputObjectSchema as CustomTrainerScalarWhereInputObjectSchema } from './CustomTrainerScalarWhereInput.schema';
import { CustomTrainerUpdateManyMutationInputObjectSchema as CustomTrainerUpdateManyMutationInputObjectSchema } from './CustomTrainerUpdateManyMutationInput.schema';
import { CustomTrainerUncheckedUpdateManyWithoutUserInputObjectSchema as CustomTrainerUncheckedUpdateManyWithoutUserInputObjectSchema } from './CustomTrainerUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CustomTrainerUpdateManyMutationInputObjectSchema), z.lazy(() => CustomTrainerUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const CustomTrainerUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.CustomTrainerUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerUpdateManyWithWhereWithoutUserInput>;
export const CustomTrainerUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
