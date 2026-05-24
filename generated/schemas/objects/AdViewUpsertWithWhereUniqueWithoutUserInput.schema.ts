import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AdViewWhereUniqueInputObjectSchema as AdViewWhereUniqueInputObjectSchema } from './AdViewWhereUniqueInput.schema';
import { AdViewUpdateWithoutUserInputObjectSchema as AdViewUpdateWithoutUserInputObjectSchema } from './AdViewUpdateWithoutUserInput.schema';
import { AdViewUncheckedUpdateWithoutUserInputObjectSchema as AdViewUncheckedUpdateWithoutUserInputObjectSchema } from './AdViewUncheckedUpdateWithoutUserInput.schema';
import { AdViewCreateWithoutUserInputObjectSchema as AdViewCreateWithoutUserInputObjectSchema } from './AdViewCreateWithoutUserInput.schema';
import { AdViewUncheckedCreateWithoutUserInputObjectSchema as AdViewUncheckedCreateWithoutUserInputObjectSchema } from './AdViewUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AdViewWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AdViewUpdateWithoutUserInputObjectSchema), z.lazy(() => AdViewUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => AdViewCreateWithoutUserInputObjectSchema), z.lazy(() => AdViewUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const AdViewUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.AdViewUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AdViewUpsertWithWhereUniqueWithoutUserInput>;
export const AdViewUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
