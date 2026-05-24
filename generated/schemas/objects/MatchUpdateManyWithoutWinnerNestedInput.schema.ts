import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchCreateWithoutWinnerInputObjectSchema as MatchCreateWithoutWinnerInputObjectSchema } from './MatchCreateWithoutWinnerInput.schema';
import { MatchUncheckedCreateWithoutWinnerInputObjectSchema as MatchUncheckedCreateWithoutWinnerInputObjectSchema } from './MatchUncheckedCreateWithoutWinnerInput.schema';
import { MatchCreateOrConnectWithoutWinnerInputObjectSchema as MatchCreateOrConnectWithoutWinnerInputObjectSchema } from './MatchCreateOrConnectWithoutWinnerInput.schema';
import { MatchUpsertWithWhereUniqueWithoutWinnerInputObjectSchema as MatchUpsertWithWhereUniqueWithoutWinnerInputObjectSchema } from './MatchUpsertWithWhereUniqueWithoutWinnerInput.schema';
import { MatchCreateManyWinnerInputEnvelopeObjectSchema as MatchCreateManyWinnerInputEnvelopeObjectSchema } from './MatchCreateManyWinnerInputEnvelope.schema';
import { MatchWhereUniqueInputObjectSchema as MatchWhereUniqueInputObjectSchema } from './MatchWhereUniqueInput.schema';
import { MatchUpdateWithWhereUniqueWithoutWinnerInputObjectSchema as MatchUpdateWithWhereUniqueWithoutWinnerInputObjectSchema } from './MatchUpdateWithWhereUniqueWithoutWinnerInput.schema';
import { MatchUpdateManyWithWhereWithoutWinnerInputObjectSchema as MatchUpdateManyWithWhereWithoutWinnerInputObjectSchema } from './MatchUpdateManyWithWhereWithoutWinnerInput.schema';
import { MatchScalarWhereInputObjectSchema as MatchScalarWhereInputObjectSchema } from './MatchScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MatchCreateWithoutWinnerInputObjectSchema), z.lazy(() => MatchCreateWithoutWinnerInputObjectSchema).array(), z.lazy(() => MatchUncheckedCreateWithoutWinnerInputObjectSchema), z.lazy(() => MatchUncheckedCreateWithoutWinnerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MatchCreateOrConnectWithoutWinnerInputObjectSchema), z.lazy(() => MatchCreateOrConnectWithoutWinnerInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MatchUpsertWithWhereUniqueWithoutWinnerInputObjectSchema), z.lazy(() => MatchUpsertWithWhereUniqueWithoutWinnerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MatchCreateManyWinnerInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => MatchWhereUniqueInputObjectSchema), z.lazy(() => MatchWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MatchWhereUniqueInputObjectSchema), z.lazy(() => MatchWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MatchWhereUniqueInputObjectSchema), z.lazy(() => MatchWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MatchWhereUniqueInputObjectSchema), z.lazy(() => MatchWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => MatchUpdateWithWhereUniqueWithoutWinnerInputObjectSchema), z.lazy(() => MatchUpdateWithWhereUniqueWithoutWinnerInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MatchUpdateManyWithWhereWithoutWinnerInputObjectSchema), z.lazy(() => MatchUpdateManyWithWhereWithoutWinnerInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MatchScalarWhereInputObjectSchema), z.lazy(() => MatchScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const MatchUpdateManyWithoutWinnerNestedInputObjectSchema: z.ZodType<Prisma.MatchUpdateManyWithoutWinnerNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchUpdateManyWithoutWinnerNestedInput>;
export const MatchUpdateManyWithoutWinnerNestedInputObjectZodSchema = makeSchema();
