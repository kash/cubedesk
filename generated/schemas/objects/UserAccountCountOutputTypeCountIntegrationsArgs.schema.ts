import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { IntegrationWhereInputObjectSchema as IntegrationWhereInputObjectSchema } from './IntegrationWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => IntegrationWhereInputObjectSchema).optional()
}).strict();
export const UserAccountCountOutputTypeCountIntegrationsArgsObjectSchema = makeSchema();
export const UserAccountCountOutputTypeCountIntegrationsArgsObjectZodSchema = makeSchema();
