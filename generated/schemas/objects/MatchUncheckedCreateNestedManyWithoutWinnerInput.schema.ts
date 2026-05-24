import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchCreateWithoutWinnerInputObjectSchema as MatchCreateWithoutWinnerInputObjectSchema } from './MatchCreateWithoutWinnerInput.schema';
import { MatchUncheckedCreateWithoutWinnerInputObjectSchema as MatchUncheckedCreateWithoutWinnerInputObjectSchema } from './MatchUncheckedCreateWithoutWinnerInput.schema';
import { MatchCreateOrConnectWithoutWinnerInputObjectSchema as MatchCreateOrConnectWithoutWinnerInputObjectSchema } from './MatchCreateOrConnectWithoutWinnerInput.schema';
import { MatchCreateManyWinnerInputEnvelopeObjectSchema as MatchCreateManyWinnerInputEnvelopeObjectSchema } from './MatchCreateManyWinnerInputEnvelope.schema';
import { MatchWhereUniqueInputObjectSchema as MatchWhereUniqueInputObjectSchema } from './MatchWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MatchCreateWithoutWinnerInputObjectSchema), z.lazy(() => MatchCreateWithoutWinnerInputObjectSchema).array(), z.lazy(() => MatchUncheckedCreateWithoutWinnerInputObjectSchema), z.lazy(() => MatchUncheckedCreateWithoutWinnerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MatchCreateOrConnectWithoutWinnerInputObjectSchema), z.lazy(() => MatchCreateOrConnectWithoutWinnerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MatchCreateManyWinnerInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => MatchWhereUniqueInputObjectSchema), z.lazy(() => MatchWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const MatchUncheckedCreateNestedManyWithoutWinnerInputObjectSchema: z.ZodType<Prisma.MatchUncheckedCreateNestedManyWithoutWinnerInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchUncheckedCreateNestedManyWithoutWinnerInput>;
export const MatchUncheckedCreateNestedManyWithoutWinnerInputObjectZodSchema = makeSchema();
