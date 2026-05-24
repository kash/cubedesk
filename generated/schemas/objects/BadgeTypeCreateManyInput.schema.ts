import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  priority: z.number().int().optional(),
  color: z.string(),
  created_at: z.coerce.date().optional(),
  description: z.string(),
  created_by_id: z.string().optional().nullable()
}).strict();
export const BadgeTypeCreateManyInputObjectSchema: z.ZodType<Prisma.BadgeTypeCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeTypeCreateManyInput>;
export const BadgeTypeCreateManyInputObjectZodSchema = makeSchema();
