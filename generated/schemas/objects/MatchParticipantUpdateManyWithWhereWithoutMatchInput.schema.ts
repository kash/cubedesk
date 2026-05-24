import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchParticipantScalarWhereInputObjectSchema as MatchParticipantScalarWhereInputObjectSchema } from './MatchParticipantScalarWhereInput.schema';
import { MatchParticipantUpdateManyMutationInputObjectSchema as MatchParticipantUpdateManyMutationInputObjectSchema } from './MatchParticipantUpdateManyMutationInput.schema';
import { MatchParticipantUncheckedUpdateManyWithoutMatchInputObjectSchema as MatchParticipantUncheckedUpdateManyWithoutMatchInputObjectSchema } from './MatchParticipantUncheckedUpdateManyWithoutMatchInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchParticipantScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => MatchParticipantUpdateManyMutationInputObjectSchema), z.lazy(() => MatchParticipantUncheckedUpdateManyWithoutMatchInputObjectSchema)])
}).strict();
export const MatchParticipantUpdateManyWithWhereWithoutMatchInputObjectSchema: z.ZodType<Prisma.MatchParticipantUpdateManyWithWhereWithoutMatchInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchParticipantUpdateManyWithWhereWithoutMatchInput>;
export const MatchParticipantUpdateManyWithWhereWithoutMatchInputObjectZodSchema = makeSchema();
