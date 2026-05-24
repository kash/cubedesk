import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchCreateWithoutMatch_sessionInputObjectSchema as MatchCreateWithoutMatch_sessionInputObjectSchema } from './MatchCreateWithoutMatch_sessionInput.schema';
import { MatchUncheckedCreateWithoutMatch_sessionInputObjectSchema as MatchUncheckedCreateWithoutMatch_sessionInputObjectSchema } from './MatchUncheckedCreateWithoutMatch_sessionInput.schema';
import { MatchCreateOrConnectWithoutMatch_sessionInputObjectSchema as MatchCreateOrConnectWithoutMatch_sessionInputObjectSchema } from './MatchCreateOrConnectWithoutMatch_sessionInput.schema';
import { MatchUpsertWithWhereUniqueWithoutMatch_sessionInputObjectSchema as MatchUpsertWithWhereUniqueWithoutMatch_sessionInputObjectSchema } from './MatchUpsertWithWhereUniqueWithoutMatch_sessionInput.schema';
import { MatchCreateManyMatch_sessionInputEnvelopeObjectSchema as MatchCreateManyMatch_sessionInputEnvelopeObjectSchema } from './MatchCreateManyMatch_sessionInputEnvelope.schema';
import { MatchWhereUniqueInputObjectSchema as MatchWhereUniqueInputObjectSchema } from './MatchWhereUniqueInput.schema';
import { MatchUpdateWithWhereUniqueWithoutMatch_sessionInputObjectSchema as MatchUpdateWithWhereUniqueWithoutMatch_sessionInputObjectSchema } from './MatchUpdateWithWhereUniqueWithoutMatch_sessionInput.schema';
import { MatchUpdateManyWithWhereWithoutMatch_sessionInputObjectSchema as MatchUpdateManyWithWhereWithoutMatch_sessionInputObjectSchema } from './MatchUpdateManyWithWhereWithoutMatch_sessionInput.schema';
import { MatchScalarWhereInputObjectSchema as MatchScalarWhereInputObjectSchema } from './MatchScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MatchCreateWithoutMatch_sessionInputObjectSchema), z.lazy(() => MatchCreateWithoutMatch_sessionInputObjectSchema).array(), z.lazy(() => MatchUncheckedCreateWithoutMatch_sessionInputObjectSchema), z.lazy(() => MatchUncheckedCreateWithoutMatch_sessionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MatchCreateOrConnectWithoutMatch_sessionInputObjectSchema), z.lazy(() => MatchCreateOrConnectWithoutMatch_sessionInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MatchUpsertWithWhereUniqueWithoutMatch_sessionInputObjectSchema), z.lazy(() => MatchUpsertWithWhereUniqueWithoutMatch_sessionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MatchCreateManyMatch_sessionInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => MatchWhereUniqueInputObjectSchema), z.lazy(() => MatchWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MatchWhereUniqueInputObjectSchema), z.lazy(() => MatchWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MatchWhereUniqueInputObjectSchema), z.lazy(() => MatchWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MatchWhereUniqueInputObjectSchema), z.lazy(() => MatchWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => MatchUpdateWithWhereUniqueWithoutMatch_sessionInputObjectSchema), z.lazy(() => MatchUpdateWithWhereUniqueWithoutMatch_sessionInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MatchUpdateManyWithWhereWithoutMatch_sessionInputObjectSchema), z.lazy(() => MatchUpdateManyWithWhereWithoutMatch_sessionInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MatchScalarWhereInputObjectSchema), z.lazy(() => MatchScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const MatchUpdateManyWithoutMatch_sessionNestedInputObjectSchema: z.ZodType<Prisma.MatchUpdateManyWithoutMatch_sessionNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchUpdateManyWithoutMatch_sessionNestedInput>;
export const MatchUpdateManyWithoutMatch_sessionNestedInputObjectZodSchema = makeSchema();
