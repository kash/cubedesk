import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchCreateWithoutParticipantsInputObjectSchema as MatchCreateWithoutParticipantsInputObjectSchema } from './MatchCreateWithoutParticipantsInput.schema';
import { MatchUncheckedCreateWithoutParticipantsInputObjectSchema as MatchUncheckedCreateWithoutParticipantsInputObjectSchema } from './MatchUncheckedCreateWithoutParticipantsInput.schema';
import { MatchCreateOrConnectWithoutParticipantsInputObjectSchema as MatchCreateOrConnectWithoutParticipantsInputObjectSchema } from './MatchCreateOrConnectWithoutParticipantsInput.schema';
import { MatchWhereUniqueInputObjectSchema as MatchWhereUniqueInputObjectSchema } from './MatchWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MatchCreateWithoutParticipantsInputObjectSchema), z.lazy(() => MatchUncheckedCreateWithoutParticipantsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MatchCreateOrConnectWithoutParticipantsInputObjectSchema).optional(),
  connect: z.lazy(() => MatchWhereUniqueInputObjectSchema).optional()
}).strict();
export const MatchCreateNestedOneWithoutParticipantsInputObjectSchema: z.ZodType<Prisma.MatchCreateNestedOneWithoutParticipantsInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchCreateNestedOneWithoutParticipantsInput>;
export const MatchCreateNestedOneWithoutParticipantsInputObjectZodSchema = makeSchema();
