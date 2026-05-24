import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  user_id: z.string().optional()
}).strict();
export const UserFeatureStateWhereUniqueInputObjectSchema: z.ZodType<Prisma.UserFeatureStateWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFeatureStateWhereUniqueInput>;
export const UserFeatureStateWhereUniqueInputObjectZodSchema = makeSchema();
