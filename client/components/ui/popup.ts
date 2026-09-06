import {useLayoutEffect} from 'react';

export const popupSurface =
	'rounded-md border border-tmo-module/15 bg-module text-text shadow-lg outline-none';
export const pickerTrigger =
	'flex h-9 items-center justify-between gap-2 rounded-md border border-tmo-module/15 bg-module px-3 py-2 text-sm text-text shadow-sm outline-none transition-colors hover:bg-tmo-module/5 disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0';
export const popupItem =
	'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-tmo-module/10 data-[selected=true]:bg-tmo-module/10 data-[disabled]:pointer-events-none data-[disabled]:opacity-50';

const active = new Set<symbol>();
export const isPopupOpen = () => active.size > 0;
export function usePopupActivity(open: boolean) {
	useLayoutEffect(() => {
		if (!open) return;
		const id = Symbol();
		active.add(id);
		return () => {
			active.delete(id);
		};
	}, [open]);
}
