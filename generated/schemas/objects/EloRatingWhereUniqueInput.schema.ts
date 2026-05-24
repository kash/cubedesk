import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  user_id: z.string().optional(),
  profile_id: z.string().optional()
}).strict();
export const EloRatingWhereUniqueInputObjectSchema: z.ZodType<Prisma.EloRatingWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.EloRatingWhereUniqueInput>;
export const EloRatingWhereUniqueInputObjectZodSchema = makeSchema();
