import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageWhereUniqueInputObjectSchema as TopAverageWhereUniqueInputObjectSchema } from './TopAverageWhereUniqueInput.schema';
import { TopAverageUpdateWithoutUserInputObjectSchema as TopAverageUpdateWithoutUserInputObjectSchema } from './TopAverageUpdateWithoutUserInput.schema';
import { TopAverageUncheckedUpdateWithoutUserInputObjectSchema as TopAverageUncheckedUpdateWithoutUserInputObjectSchema } from './TopAverageUncheckedUpdateWithoutUserInput.schema';
import { TopAverageCreateWithoutUserInputObjectSchema as TopAverageCreateWithoutUserInputObjectSchema } from './TopAverageCreateWithoutUserInput.schema';
import { TopAverageUncheckedCreateWithoutUserInputObjectSchema as TopAverageUncheckedCreateWithoutUserInputObjectSchema } from './TopAverageUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopAverageWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TopAverageUpdateWithoutUserInputObjectSchema), z.lazy(() => TopAverageUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => TopAverageCreateWithoutUserInputObjectSchema), z.lazy(() => TopAverageUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const TopAverageUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.TopAverageUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageUpsertWithWhereUniqueWithoutUserInput>;
export const TopAverageUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
