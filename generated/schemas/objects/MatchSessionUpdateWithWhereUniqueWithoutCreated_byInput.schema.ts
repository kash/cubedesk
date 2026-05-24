import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchSessionWhereUniqueInputObjectSchema as MatchSessionWhereUniqueInputObjectSchema } from './MatchSessionWhereUniqueInput.schema';
import { MatchSessionUpdateWithoutCreated_byInputObjectSchema as MatchSessionUpdateWithoutCreated_byInputObjectSchema } from './MatchSessionUpdateWithoutCreated_byInput.schema';
import { MatchSessionUncheckedUpdateWithoutCreated_byInputObjectSchema as MatchSessionUncheckedUpdateWithoutCreated_byInputObjectSchema } from './MatchSessionUncheckedUpdateWithoutCreated_byInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchSessionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => MatchSessionUpdateWithoutCreated_byInputObjectSchema), z.lazy(() => MatchSessionUncheckedUpdateWithoutCreated_byInputObjectSchema)])
}).strict();
export const MatchSessionUpdateWithWhereUniqueWithoutCreated_byInputObjectSchema: z.ZodType<Prisma.MatchSessionUpdateWithWhereUniqueWithoutCreated_byInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionUpdateWithWhereUniqueWithoutCreated_byInput>;
export const MatchSessionUpdateWithWhereUniqueWithoutCreated_byInputObjectZodSchema = makeSchema();
