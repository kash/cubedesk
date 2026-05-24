import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  priority: z.number().int().optional(),
  color: z.string(),
  created_at: z.coerce.date().optional(),
  description: z.string()
}).strict();
export const BadgeTypeCreateManyCreated_byInputObjectSchema: z.ZodType<Prisma.BadgeTypeCreateManyCreated_byInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeTypeCreateManyCreated_byInput>;
export const BadgeTypeCreateManyCreated_byInputObjectZodSchema = makeSchema();
