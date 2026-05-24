import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchParticipantScalarWhereInputObjectSchema as MatchParticipantScalarWhereInputObjectSchema } from './MatchParticipantScalarWhereInput.schema';
import { MatchParticipantUpdateManyMutationInputObjectSchema as MatchParticipantUpdateManyMutationInputObjectSchema } from './MatchParticipantUpdateManyMutationInput.schema';
import { MatchParticipantUncheckedUpdateManyWithoutUserInputObjectSchema as MatchParticipantUncheckedUpdateManyWithoutUserInputObjectSchema } from './MatchParticipantUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchParticipantScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => MatchParticipantUpdateManyMutationInputObjectSchema), z.lazy(() => MatchParticipantUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const MatchParticipantUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.MatchParticipantUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchParticipantUpdateManyWithWhereWithoutUserInput>;
export const MatchParticipantUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
