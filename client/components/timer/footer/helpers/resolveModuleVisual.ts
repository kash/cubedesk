// Some `TimerModuleType` values (e.g. `TRAINER_ALGO`, `SESSION_STATS`, `CHAT`) belong to
// features that were removed and no longer have an entry in every module map. Users who
// selected one of those modules before it was removed still have the value persisted in
// their `timer_modules` setting, so a plain `moduleMap[visualType]` lookup can come back
// `undefined`. Falling back keeps that footer slot blank instead of throwing during render.
export function resolveModuleVisual<T>(moduleMap: Partial<Record<string, T>>, visualType: string, fallback: T): T {
	return moduleMap[visualType] ?? fallback;
}
