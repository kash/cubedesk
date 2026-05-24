import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AdViewWhereUniqueInputObjectSchema as AdViewWhereUniqueInputObjectSchema } from './AdViewWhereUniqueInput.schema';
import { AdViewCreateWithoutUserInputObjectSchema as AdViewCreateWithoutUserInputObjectSchema } from './AdViewCreateWithoutUserInput.schema';
import { AdViewUncheckedCreateWithoutUserInputObjectSchema as AdViewUncheckedCreateWithoutUserInputObjectSchema } from './AdViewUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AdViewWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AdViewCreateWithoutUserInputObjectSchema), z.lazy(() => AdViewUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const AdViewCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.AdViewCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AdViewCreateOrConnectWithoutUserInput>;
export const AdViewCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
