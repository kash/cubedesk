import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { IntegrationWhereUniqueInputObjectSchema as IntegrationWhereUniqueInputObjectSchema } from './IntegrationWhereUniqueInput.schema';
import { IntegrationUpdateWithoutUserInputObjectSchema as IntegrationUpdateWithoutUserInputObjectSchema } from './IntegrationUpdateWithoutUserInput.schema';
import { IntegrationUncheckedUpdateWithoutUserInputObjectSchema as IntegrationUncheckedUpdateWithoutUserInputObjectSchema } from './IntegrationUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => IntegrationWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => IntegrationUpdateWithoutUserInputObjectSchema), z.lazy(() => IntegrationUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const IntegrationUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.IntegrationUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.IntegrationUpdateWithWhereUniqueWithoutUserInput>;
export const IntegrationUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
