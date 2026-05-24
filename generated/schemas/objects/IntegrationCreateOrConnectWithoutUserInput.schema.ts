import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { IntegrationWhereUniqueInputObjectSchema as IntegrationWhereUniqueInputObjectSchema } from './IntegrationWhereUniqueInput.schema';
import { IntegrationCreateWithoutUserInputObjectSchema as IntegrationCreateWithoutUserInputObjectSchema } from './IntegrationCreateWithoutUserInput.schema';
import { IntegrationUncheckedCreateWithoutUserInputObjectSchema as IntegrationUncheckedCreateWithoutUserInputObjectSchema } from './IntegrationUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => IntegrationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => IntegrationCreateWithoutUserInputObjectSchema), z.lazy(() => IntegrationUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const IntegrationCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.IntegrationCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.IntegrationCreateOrConnectWithoutUserInput>;
export const IntegrationCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
