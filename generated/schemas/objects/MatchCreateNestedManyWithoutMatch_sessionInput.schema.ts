import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchCreateWithoutMatch_sessionInputObjectSchema as MatchCreateWithoutMatch_sessionInputObjectSchema } from './MatchCreateWithoutMatch_sessionInput.schema';
import { MatchUncheckedCreateWithoutMatch_sessionInputObjectSchema as MatchUncheckedCreateWithoutMatch_sessionInputObjectSchema } from './MatchUncheckedCreateWithoutMatch_sessionInput.schema';
import { MatchCreateOrConnectWithoutMatch_sessionInputObjectSchema as MatchCreateOrConnectWithoutMatch_sessionInputObjectSchema } from './MatchCreateOrConnectWithoutMatch_sessionInput.schema';
import { MatchCreateManyMatch_sessionInputEnvelopeObjectSchema as MatchCreateManyMatch_sessionInputEnvelopeObjectSchema } from './MatchCreateManyMatch_sessionInputEnvelope.schema';
import { MatchWhereUniqueInputObjectSchema as MatchWhereUniqueInputObjectSchema } from './MatchWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MatchCreateWithoutMatch_sessionInputObjectSchema), z.lazy(() => MatchCreateWithoutMatch_sessionInputObjectSchema).array(), z.lazy(() => MatchUncheckedCreateWithoutMatch_sessionInputObjectSchema), z.lazy(() => MatchUncheckedCreateWithoutMatch_sessionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MatchCreateOrConnectWithoutMatch_sessionInputObjectSchema), z.lazy(() => MatchCreateOrConnectWithoutMatch_sessionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MatchCreateManyMatch_sessionInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => MatchWhereUniqueInputObjectSchema), z.lazy(() => MatchWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const MatchCreateNestedManyWithoutMatch_sessionInputObjectSchema: z.ZodType<Prisma.MatchCreateNestedManyWithoutMatch_sessionInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchCreateNestedManyWithoutMatch_sessionInput>;
export const MatchCreateNestedManyWithoutMatch_sessionInputObjectZodSchema = makeSchema();
