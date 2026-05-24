import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCountOutputTypeCountSolveMethodStepsArgsObjectSchema as SolveCountOutputTypeCountSolveMethodStepsArgsObjectSchema } from './SolveCountOutputTypeCountSolveMethodStepsArgs.schema';
import { SolveCountOutputTypeCountSolveViewsArgsObjectSchema as SolveCountOutputTypeCountSolveViewsArgsObjectSchema } from './SolveCountOutputTypeCountSolveViewsArgs.schema';
import { SolveCountOutputTypeCountTopAverage1ArgsObjectSchema as SolveCountOutputTypeCountTopAverage1ArgsObjectSchema } from './SolveCountOutputTypeCountTopAverage1Args.schema';
import { SolveCountOutputTypeCountTopAverage2ArgsObjectSchema as SolveCountOutputTypeCountTopAverage2ArgsObjectSchema } from './SolveCountOutputTypeCountTopAverage2Args.schema';
import { SolveCountOutputTypeCountTopAverage3ArgsObjectSchema as SolveCountOutputTypeCountTopAverage3ArgsObjectSchema } from './SolveCountOutputTypeCountTopAverage3Args.schema';
import { SolveCountOutputTypeCountTopAverage4ArgsObjectSchema as SolveCountOutputTypeCountTopAverage4ArgsObjectSchema } from './SolveCountOutputTypeCountTopAverage4Args.schema';
import { SolveCountOutputTypeCountTopAverage5ArgsObjectSchema as SolveCountOutputTypeCountTopAverage5ArgsObjectSchema } from './SolveCountOutputTypeCountTopAverage5Args.schema';
import { SolveCountOutputTypeCountTopSolveArgsObjectSchema as SolveCountOutputTypeCountTopSolveArgsObjectSchema } from './SolveCountOutputTypeCountTopSolveArgs.schema'

const makeSchema = () => z.object({
  solve_method_steps: z.union([z.boolean(), z.lazy(() => SolveCountOutputTypeCountSolveMethodStepsArgsObjectSchema)]).optional(),
  solve_views: z.union([z.boolean(), z.lazy(() => SolveCountOutputTypeCountSolveViewsArgsObjectSchema)]).optional(),
  top_average_1: z.union([z.boolean(), z.lazy(() => SolveCountOutputTypeCountTopAverage1ArgsObjectSchema)]).optional(),
  top_average_2: z.union([z.boolean(), z.lazy(() => SolveCountOutputTypeCountTopAverage2ArgsObjectSchema)]).optional(),
  top_average_3: z.union([z.boolean(), z.lazy(() => SolveCountOutputTypeCountTopAverage3ArgsObjectSchema)]).optional(),
  top_average_4: z.union([z.boolean(), z.lazy(() => SolveCountOutputTypeCountTopAverage4ArgsObjectSchema)]).optional(),
  top_average_5: z.union([z.boolean(), z.lazy(() => SolveCountOutputTypeCountTopAverage5ArgsObjectSchema)]).optional(),
  top_solve: z.union([z.boolean(), z.lazy(() => SolveCountOutputTypeCountTopSolveArgsObjectSchema)]).optional()
}).strict();
export const SolveCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.SolveCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.SolveCountOutputTypeSelect>;
export const SolveCountOutputTypeSelectObjectZodSchema = makeSchema();
