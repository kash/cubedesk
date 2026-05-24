import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageWhereUniqueInputObjectSchema as TopAverageWhereUniqueInputObjectSchema } from './TopAverageWhereUniqueInput.schema';
import { TopAverageCreateWithoutUserInputObjectSchema as TopAverageCreateWithoutUserInputObjectSchema } from './TopAverageCreateWithoutUserInput.schema';
import { TopAverageUncheckedCreateWithoutUserInputObjectSchema as TopAverageUncheckedCreateWithoutUserInputObjectSchema } from './TopAverageUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopAverageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TopAverageCreateWithoutUserInputObjectSchema), z.lazy(() => TopAverageUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const TopAverageCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.TopAverageCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageCreateOrConnectWithoutUserInput>;
export const TopAverageCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
