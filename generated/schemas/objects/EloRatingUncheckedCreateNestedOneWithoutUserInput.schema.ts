import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloRatingCreateWithoutUserInputObjectSchema as EloRatingCreateWithoutUserInputObjectSchema } from './EloRatingCreateWithoutUserInput.schema';
import { EloRatingUncheckedCreateWithoutUserInputObjectSchema as EloRatingUncheckedCreateWithoutUserInputObjectSchema } from './EloRatingUncheckedCreateWithoutUserInput.schema';
import { EloRatingCreateOrConnectWithoutUserInputObjectSchema as EloRatingCreateOrConnectWithoutUserInputObjectSchema } from './EloRatingCreateOrConnectWithoutUserInput.schema';
import { EloRatingWhereUniqueInputObjectSchema as EloRatingWhereUniqueInputObjectSchema } from './EloRatingWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EloRatingCreateWithoutUserInputObjectSchema), z.lazy(() => EloRatingUncheckedCreateWithoutUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EloRatingCreateOrConnectWithoutUserInputObjectSchema).optional(),
  connect: z.lazy(() => EloRatingWhereUniqueInputObjectSchema).optional()
}).strict();
export const EloRatingUncheckedCreateNestedOneWithoutUserInputObjectSchema: z.ZodType<Prisma.EloRatingUncheckedCreateNestedOneWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.EloRatingUncheckedCreateNestedOneWithoutUserInput>;
export const EloRatingUncheckedCreateNestedOneWithoutUserInputObjectZodSchema = makeSchema();
