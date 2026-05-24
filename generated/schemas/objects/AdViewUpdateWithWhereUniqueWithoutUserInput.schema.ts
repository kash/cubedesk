import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AdViewWhereUniqueInputObjectSchema as AdViewWhereUniqueInputObjectSchema } from './AdViewWhereUniqueInput.schema';
import { AdViewUpdateWithoutUserInputObjectSchema as AdViewUpdateWithoutUserInputObjectSchema } from './AdViewUpdateWithoutUserInput.schema';
import { AdViewUncheckedUpdateWithoutUserInputObjectSchema as AdViewUncheckedUpdateWithoutUserInputObjectSchema } from './AdViewUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AdViewWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AdViewUpdateWithoutUserInputObjectSchema), z.lazy(() => AdViewUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const AdViewUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.AdViewUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AdViewUpdateWithWhereUniqueWithoutUserInput>;
export const AdViewUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
