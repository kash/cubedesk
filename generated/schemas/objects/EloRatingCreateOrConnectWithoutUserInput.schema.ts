import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloRatingWhereUniqueInputObjectSchema as EloRatingWhereUniqueInputObjectSchema } from './EloRatingWhereUniqueInput.schema';
import { EloRatingCreateWithoutUserInputObjectSchema as EloRatingCreateWithoutUserInputObjectSchema } from './EloRatingCreateWithoutUserInput.schema';
import { EloRatingUncheckedCreateWithoutUserInputObjectSchema as EloRatingUncheckedCreateWithoutUserInputObjectSchema } from './EloRatingUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EloRatingWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EloRatingCreateWithoutUserInputObjectSchema), z.lazy(() => EloRatingUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const EloRatingCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.EloRatingCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.EloRatingCreateOrConnectWithoutUserInput>;
export const EloRatingCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
