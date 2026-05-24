import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const IntegrationWhereUniqueInputObjectSchema: z.ZodType<Prisma.IntegrationWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.IntegrationWhereUniqueInput>;
export const IntegrationWhereUniqueInputObjectZodSchema = makeSchema();
