import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const MatchParticipantWhereUniqueInputObjectSchema: z.ZodType<Prisma.MatchParticipantWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchParticipantWhereUniqueInput>;
export const MatchParticipantWhereUniqueInputObjectZodSchema = makeSchema();
