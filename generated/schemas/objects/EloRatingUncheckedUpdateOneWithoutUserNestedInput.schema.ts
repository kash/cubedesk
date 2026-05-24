import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloRatingCreateWithoutUserInputObjectSchema as EloRatingCreateWithoutUserInputObjectSchema } from './EloRatingCreateWithoutUserInput.schema';
import { EloRatingUncheckedCreateWithoutUserInputObjectSchema as EloRatingUncheckedCreateWithoutUserInputObjectSchema } from './EloRatingUncheckedCreateWithoutUserInput.schema';
import { EloRatingCreateOrConnectWithoutUserInputObjectSchema as EloRatingCreateOrConnectWithoutUserInputObjectSchema } from './EloRatingCreateOrConnectWithoutUserInput.schema';
import { EloRatingUpsertWithoutUserInputObjectSchema as EloRatingUpsertWithoutUserInputObjectSchema } from './EloRatingUpsertWithoutUserInput.schema';
import { EloRatingWhereInputObjectSchema as EloRatingWhereInputObjectSchema } from './EloRatingWhereInput.schema';
import { EloRatingWhereUniqueInputObjectSchema as EloRatingWhereUniqueInputObjectSchema } from './EloRatingWhereUniqueInput.schema';
import { EloRatingUpdateToOneWithWhereWithoutUserInputObjectSchema as EloRatingUpdateToOneWithWhereWithoutUserInputObjectSchema } from './EloRatingUpdateToOneWithWhereWithoutUserInput.schema';
import { EloRatingUpdateWithoutUserInputObjectSchema as EloRatingUpdateWithoutUserInputObjectSchema } from './EloRatingUpdateWithoutUserInput.schema';
import { EloRatingUncheckedUpdateWithoutUserInputObjectSchema as EloRatingUncheckedUpdateWithoutUserInputObjectSchema } from './EloRatingUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EloRatingCreateWithoutUserInputObjectSchema), z.lazy(() => EloRatingUncheckedCreateWithoutUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EloRatingCreateOrConnectWithoutUserInputObjectSchema).optional(),
  upsert: z.lazy(() => EloRatingUpsertWithoutUserInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => EloRatingWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => EloRatingWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => EloRatingWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => EloRatingUpdateToOneWithWhereWithoutUserInputObjectSchema), z.lazy(() => EloRatingUpdateWithoutUserInputObjectSchema), z.lazy(() => EloRatingUncheckedUpdateWithoutUserInputObjectSchema)]).optional()
}).strict();
export const EloRatingUncheckedUpdateOneWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.EloRatingUncheckedUpdateOneWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.EloRatingUncheckedUpdateOneWithoutUserNestedInput>;
export const EloRatingUncheckedUpdateOneWithoutUserNestedInputObjectZodSchema = makeSchema();
