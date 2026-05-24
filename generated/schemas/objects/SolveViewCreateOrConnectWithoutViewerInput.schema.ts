import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveViewWhereUniqueInputObjectSchema as SolveViewWhereUniqueInputObjectSchema } from './SolveViewWhereUniqueInput.schema';
import { SolveViewCreateWithoutViewerInputObjectSchema as SolveViewCreateWithoutViewerInputObjectSchema } from './SolveViewCreateWithoutViewerInput.schema';
import { SolveViewUncheckedCreateWithoutViewerInputObjectSchema as SolveViewUncheckedCreateWithoutViewerInputObjectSchema } from './SolveViewUncheckedCreateWithoutViewerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveViewWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SolveViewCreateWithoutViewerInputObjectSchema), z.lazy(() => SolveViewUncheckedCreateWithoutViewerInputObjectSchema)])
}).strict();
export const SolveViewCreateOrConnectWithoutViewerInputObjectSchema: z.ZodType<Prisma.SolveViewCreateOrConnectWithoutViewerInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveViewCreateOrConnectWithoutViewerInput>;
export const SolveViewCreateOrConnectWithoutViewerInputObjectZodSchema = makeSchema();
