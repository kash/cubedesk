import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloRatingUpdateWithoutUserInputObjectSchema as EloRatingUpdateWithoutUserInputObjectSchema } from './EloRatingUpdateWithoutUserInput.schema';
import { EloRatingUncheckedUpdateWithoutUserInputObjectSchema as EloRatingUncheckedUpdateWithoutUserInputObjectSchema } from './EloRatingUncheckedUpdateWithoutUserInput.schema';
import { EloRatingCreateWithoutUserInputObjectSchema as EloRatingCreateWithoutUserInputObjectSchema } from './EloRatingCreateWithoutUserInput.schema';
import { EloRatingUncheckedCreateWithoutUserInputObjectSchema as EloRatingUncheckedCreateWithoutUserInputObjectSchema } from './EloRatingUncheckedCreateWithoutUserInput.schema';
import { EloRatingWhereInputObjectSchema as EloRatingWhereInputObjectSchema } from './EloRatingWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => EloRatingUpdateWithoutUserInputObjectSchema), z.lazy(() => EloRatingUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => EloRatingCreateWithoutUserInputObjectSchema), z.lazy(() => EloRatingUncheckedCreateWithoutUserInputObjectSchema)]),
  where: z.lazy(() => EloRatingWhereInputObjectSchema).optional()
}).strict();
export const EloRatingUpsertWithoutUserInputObjectSchema: z.ZodType<Prisma.EloRatingUpsertWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.EloRatingUpsertWithoutUserInput>;
export const EloRatingUpsertWithoutUserInputObjectZodSchema = makeSchema();
