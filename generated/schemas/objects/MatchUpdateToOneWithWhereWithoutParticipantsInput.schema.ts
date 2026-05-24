import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchWhereInputObjectSchema as MatchWhereInputObjectSchema } from './MatchWhereInput.schema';
import { MatchUpdateWithoutParticipantsInputObjectSchema as MatchUpdateWithoutParticipantsInputObjectSchema } from './MatchUpdateWithoutParticipantsInput.schema';
import { MatchUncheckedUpdateWithoutParticipantsInputObjectSchema as MatchUncheckedUpdateWithoutParticipantsInputObjectSchema } from './MatchUncheckedUpdateWithoutParticipantsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => MatchUpdateWithoutParticipantsInputObjectSchema), z.lazy(() => MatchUncheckedUpdateWithoutParticipantsInputObjectSchema)])
}).strict();
export const MatchUpdateToOneWithWhereWithoutParticipantsInputObjectSchema: z.ZodType<Prisma.MatchUpdateToOneWithWhereWithoutParticipantsInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchUpdateToOneWithWhereWithoutParticipantsInput>;
export const MatchUpdateToOneWithWhereWithoutParticipantsInputObjectZodSchema = makeSchema();
