import {api} from '@/util/api';
import {toastError} from '@/util/toast';
import {ArrowUpRight, X} from 'phosphor-react';
import React from 'react';
import {Link} from 'react-router-dom';

export default function ImportTimesPrompt() {
	const utils = api.useUtils();
	const prompt = api.user.importPrompt.useQuery();
	const dismiss = api.user.dismissImportPrompt.useMutation({
		onSuccess: () => utils.user.importPrompt.setData(undefined, {visible: false}),
		onError: (error) => toastError(error.message),
	});

	if (!prompt.data?.visible) return null;

	return (
		<div className="border-tmo-module/10 bg-tmo-module/[0.04] text-text relative mb-5 w-full rounded-md border">
			<Link
				to="/settings/data?import=cstimer"
				className="group hover:bg-tmo-module/[0.04] focus-visible:ring-text/40 block rounded-md py-3 pr-10 pl-3.5 transition-colors focus-visible:ring-2 focus-visible:outline-none"
			>
				<span className="text-text/50 block text-[11px] leading-4 font-normal">
					Import times from
				</span>
				<span className="mt-0.5 flex items-center gap-1.5 text-[13px] leading-5 font-medium">
					csTimer
					<ArrowUpRight
						className="text-text/40 group-hover:text-text size-3.5 transition-colors"
						aria-hidden="true"
					/>
				</span>
			</Link>
			<button
				type="button"
				aria-label="Dismiss import times prompt"
				disabled={dismiss.isPending}
				onClick={() => dismiss.mutate()}
				className="text-text/50 hover:bg-tmo-module/10 hover:text-text focus-visible:ring-text/40 absolute top-1.5 right-1.5 flex size-7 items-center justify-center rounded transition-colors focus-visible:ring-2 focus-visible:outline-none disabled:opacity-30"
			>
				<X className="size-3.5" aria-hidden="true" />
			</button>
		</div>
	);
}
