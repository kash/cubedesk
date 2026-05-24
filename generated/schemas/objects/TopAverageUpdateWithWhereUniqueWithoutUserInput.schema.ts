import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageWhereUniqueInputObjectSchema as TopAverageWhereUniqueInputObjectSchema } from './TopAverageWhereUniqueInput.schema';
import { TopAverageUpdateWithoutUserInputObjectSchema as TopAverageUpdateWithoutUserInputObjectSchema } from './TopAverageUpdateWithoutUserInput.schema';
import { TopAverageUncheckedUpdateWithoutUserInputObjectSchema as TopAverageUncheckedUpdateWithoutUserInputObjectSchema } from './TopAverageUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopAverageWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TopAverageUpdateWithoutUserInputObjectSchema), z.lazy(() => TopAverageUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const TopAverageUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.TopAverageUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageUpdateWithWhereUniqueWithoutUserInput>;
export const TopAverageUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
