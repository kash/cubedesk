import * as z from 'zod';
export const DemoSolveAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    demo_session_id: z.number(),
    ip_address: z.number(),
    raw_time: z.number(),
    cube_type: z.number(),
    scramble: z.number(),
    started_at: z.number(),
    ended_at: z.number(),
    updated_at: z.number(),
    created_at: z.number()
  }).optional(),
  _sum: z.object({
    raw_time: z.number().nullable(),
    started_at: z.bigint().nullable(),
    ended_at: z.bigint().nullable()
  }).nullable().optional(),
  _avg: z.object({
    raw_time: z.number().nullable(),
    started_at: z.number().nullable(),
    ended_at: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    demo_session_id: z.string().nullable(),
    ip_address: z.string().nullable(),
    raw_time: z.number().nullable(),
    cube_type: z.string().nullable(),
    scramble: z.string().nullable(),
    started_at: z.bigint().nullable(),
    ended_at: z.bigint().nullable(),
    updated_at: z.date().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    demo_session_id: z.string().nullable(),
    ip_address: z.string().nullable(),
    raw_time: z.number().nullable(),
    cube_type: z.string().nullable(),
    scramble: z.string().nullable(),
    started_at: z.bigint().nullable(),
    ended_at: z.bigint().nullable(),
    updated_at: z.date().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional()});