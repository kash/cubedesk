import * as z from 'zod';

export const GameTypeSchema = z.enum(['ELIMINATION', 'GAUNTLET', 'HEAD_TO_HEAD'])

export type GameType = z.infer<typeof GameTypeSchema>;