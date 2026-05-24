import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchParticipantCreateWithoutSolvesInputObjectSchema as MatchParticipantCreateWithoutSolvesInputObjectSchema } from './MatchParticipantCreateWithoutSolvesInput.schema';
import { MatchParticipantUncheckedCreateWithoutSolvesInputObjectSchema as MatchParticipantUncheckedCreateWithoutSolvesInputObjectSchema } from './MatchParticipantUncheckedCreateWithoutSolvesInput.schema';
import { MatchParticipantCreateOrConnectWithoutSolvesInputObjectSchema as MatchParticipantCreateOrConnectWithoutSolvesInputObjectSchema } from './MatchParticipantCreateOrConnectWithoutSolvesInput.schema';
import { MatchParticipantUpsertWithoutSolvesInputObjectSchema as MatchParticipantUpsertWithoutSolvesInputObjectSchema } from './MatchParticipantUpsertWithoutSolvesInput.schema';
import { MatchParticipantWhereInputObjectSchema as MatchParticipantWhereInputObjectSchema } from './MatchParticipantWhereInput.schema';
import { MatchParticipantWhereUniqueInputObjectSchema as MatchParticipantWhereUniqueInputObjectSchema } from './MatchParticipantWhereUniqueInput.schema';
import { MatchParticipantUpdateToOneWithWhereWithoutSolvesInputObjectSchema as MatchParticipantUpdateToOneWithWhereWithoutSolvesInputObjectSchema } from './MatchParticipantUpdateToOneWithWhereWithoutSolvesInput.schema';
import { MatchParticipantUpdateWithoutSolvesInputObjectSchema as MatchParticipantUpdateWithoutSolvesInputObjectSchema } from './MatchParticipantUpdateWithoutSolvesInput.schema';
import { MatchParticipantUncheckedUpdateWithoutSolvesInputObjectSchema as MatchParticipantUncheckedUpdateWithoutSolvesInputObjectSchema } from './MatchParticipantUncheckedUpdateWithoutSolvesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MatchParticipantCreateWithoutSolvesInputObjectSchema), z.lazy(() => MatchParticipantUncheckedCreateWithoutSolvesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MatchParticipantCreateOrConnectWithoutSolvesInputObjectSchema).optional(),
  upsert: z.lazy(() => MatchParticipantUpsertWithoutSolvesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => MatchParticipantWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => MatchParticipantWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => MatchParticipantWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MatchParticipantUpdateToOneWithWhereWithoutSolvesInputObjectSchema), z.lazy(() => MatchParticipantUpdateWithoutSolvesInputObjectSchema), z.lazy(() => MatchParticipantUncheckedUpdateWithoutSolvesInputObjectSchema)]).optional()
}).strict();
export const MatchParticipantUpdateOneWithoutSolvesNestedInputObjectSchema: z.ZodType<Prisma.MatchParticipantUpdateOneWithoutSolvesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchParticipantUpdateOneWithoutSolvesNestedInput>;
export const MatchParticipantUpdateOneWithoutSolvesNestedInputObjectZodSchema = makeSchema();
