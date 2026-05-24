import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { IntegrationWhereUniqueInputObjectSchema as IntegrationWhereUniqueInputObjectSchema } from './IntegrationWhereUniqueInput.schema';
import { IntegrationUpdateWithoutUserInputObjectSchema as IntegrationUpdateWithoutUserInputObjectSchema } from './IntegrationUpdateWithoutUserInput.schema';
import { IntegrationUncheckedUpdateWithoutUserInputObjectSchema as IntegrationUncheckedUpdateWithoutUserInputObjectSchema } from './IntegrationUncheckedUpdateWithoutUserInput.schema';
import { IntegrationCreateWithoutUserInputObjectSchema as IntegrationCreateWithoutUserInputObjectSchema } from './IntegrationCreateWithoutUserInput.schema';
import { IntegrationUncheckedCreateWithoutUserInputObjectSchema as IntegrationUncheckedCreateWithoutUserInputObjectSchema } from './IntegrationUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => IntegrationWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => IntegrationUpdateWithoutUserInputObjectSchema), z.lazy(() => IntegrationUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => IntegrationCreateWithoutUserInputObjectSchema), z.lazy(() => IntegrationUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const IntegrationUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.IntegrationUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.IntegrationUpsertWithWhereUniqueWithoutUserInput>;
export const IntegrationUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
