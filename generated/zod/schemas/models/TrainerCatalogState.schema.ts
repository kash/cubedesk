import * as z from 'zod';

export const TrainerCatalogStateSchema = z.object({
  id: z.string(),
  initialized_at: z.date().nullable(),
  revision: z.number().int(),
});

export type TrainerCatalogState = z.infer<typeof TrainerCatalogStateSchema>;
