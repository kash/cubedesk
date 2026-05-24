import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileViewCreateManyViewerInputObjectSchema as ProfileViewCreateManyViewerInputObjectSchema } from './ProfileViewCreateManyViewerInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ProfileViewCreateManyViewerInputObjectSchema), z.lazy(() => ProfileViewCreateManyViewerInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ProfileViewCreateManyViewerInputEnvelopeObjectSchema: z.ZodType<Prisma.ProfileViewCreateManyViewerInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ProfileViewCreateManyViewerInputEnvelope>;
export const ProfileViewCreateManyViewerInputEnvelopeObjectZodSchema = makeSchema();
