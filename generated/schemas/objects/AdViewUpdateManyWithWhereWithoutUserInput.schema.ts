import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AdViewScalarWhereInputObjectSchema as AdViewScalarWhereInputObjectSchema } from './AdViewScalarWhereInput.schema';
import { AdViewUpdateManyMutationInputObjectSchema as AdViewUpdateManyMutationInputObjectSchema } from './AdViewUpdateManyMutationInput.schema';
import { AdViewUncheckedUpdateManyWithoutUserInputObjectSchema as AdViewUncheckedUpdateManyWithoutUserInputObjectSchema } from './AdViewUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AdViewScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AdViewUpdateManyMutationInputObjectSchema), z.lazy(() => AdViewUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const AdViewUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.AdViewUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AdViewUpdateManyWithWhereWithoutUserInput>;
export const AdViewUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
