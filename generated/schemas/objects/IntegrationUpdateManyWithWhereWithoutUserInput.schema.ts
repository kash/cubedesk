import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { IntegrationScalarWhereInputObjectSchema as IntegrationScalarWhereInputObjectSchema } from './IntegrationScalarWhereInput.schema';
import { IntegrationUpdateManyMutationInputObjectSchema as IntegrationUpdateManyMutationInputObjectSchema } from './IntegrationUpdateManyMutationInput.schema';
import { IntegrationUncheckedUpdateManyWithoutUserInputObjectSchema as IntegrationUncheckedUpdateManyWithoutUserInputObjectSchema } from './IntegrationUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => IntegrationScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => IntegrationUpdateManyMutationInputObjectSchema), z.lazy(() => IntegrationUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const IntegrationUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.IntegrationUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.IntegrationUpdateManyWithWhereWithoutUserInput>;
export const IntegrationUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
