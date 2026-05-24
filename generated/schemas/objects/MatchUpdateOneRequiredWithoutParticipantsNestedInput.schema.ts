import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchCreateWithoutParticipantsInputObjectSchema as MatchCreateWithoutParticipantsInputObjectSchema } from './MatchCreateWithoutParticipantsInput.schema';
import { MatchUncheckedCreateWithoutParticipantsInputObjectSchema as MatchUncheckedCreateWithoutParticipantsInputObjectSchema } from './MatchUncheckedCreateWithoutParticipantsInput.schema';
import { MatchCreateOrConnectWithoutParticipantsInputObjectSchema as MatchCreateOrConnectWithoutParticipantsInputObjectSchema } from './MatchCreateOrConnectWithoutParticipantsInput.schema';
import { MatchUpsertWithoutParticipantsInputObjectSchema as MatchUpsertWithoutParticipantsInputObjectSchema } from './MatchUpsertWithoutParticipantsInput.schema';
import { MatchWhereUniqueInputObjectSchema as MatchWhereUniqueInputObjectSchema } from './MatchWhereUniqueInput.schema';
import { MatchUpdateToOneWithWhereWithoutParticipantsInputObjectSchema as MatchUpdateToOneWithWhereWithoutParticipantsInputObjectSchema } from './MatchUpdateToOneWithWhereWithoutParticipantsInput.schema';
import { MatchUpdateWithoutParticipantsInputObjectSchema as MatchUpdateWithoutParticipantsInputObjectSchema } from './MatchUpdateWithoutParticipantsInput.schema';
import { MatchUncheckedUpdateWithoutParticipantsInputObjectSchema as MatchUncheckedUpdateWithoutParticipantsInputObjectSchema } from './MatchUncheckedUpdateWithoutParticipantsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MatchCreateWithoutParticipantsInputObjectSchema), z.lazy(() => MatchUncheckedCreateWithoutParticipantsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MatchCreateOrConnectWithoutParticipantsInputObjectSchema).optional(),
  upsert: z.lazy(() => MatchUpsertWithoutParticipantsInputObjectSchema).optional(),
  connect: z.lazy(() => MatchWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MatchUpdateToOneWithWhereWithoutParticipantsInputObjectSchema), z.lazy(() => MatchUpdateWithoutParticipantsInputObjectSchema), z.lazy(() => MatchUncheckedUpdateWithoutParticipantsInputObjectSchema)]).optional()
}).strict();
export const MatchUpdateOneRequiredWithoutParticipantsNestedInputObjectSchema: z.ZodType<Prisma.MatchUpdateOneRequiredWithoutParticipantsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchUpdateOneRequiredWithoutParticipantsNestedInput>;
export const MatchUpdateOneRequiredWithoutParticipantsNestedInputObjectZodSchema = makeSchema();
