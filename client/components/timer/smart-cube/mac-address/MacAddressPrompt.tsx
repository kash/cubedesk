import CopyText from '@/components/common/CopyText';
import {
	MacAddressRequestReason,
	MacAddressResponse,
} from '@/components/timer/smart-cube/bluetooth/smart_cube';
import {Button} from '@/components/ui/button';
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from '@/components/ui/collapsible';
import {DialogHeader} from '@/components/ui/dialog';
import {Field, FieldDescription, FieldLabel} from '@/components/ui/field';
import {Input} from '@/components/ui/input';
import {Separator} from '@/components/ui/separator';
import {cn} from '@/util/cn';
import {parseMacAddress} from '@/util/smart-cube/mac';
import {CaretDown} from 'phosphor-react';
import React, {ReactNode, useState} from 'react';

interface Props {
	reason: MacAddressRequestReason;
	onRespond: (response: MacAddressResponse) => void;
}

// Enables watchAdvertisements() for reading the MAC, and persists permissions so cubes reconnect after a reload
const FLAG = 'enable-web-bluetooth-new-permissions-backend';

function getFlagsUrl() {
	const userAgent = navigator.userAgent;
	if (userAgent.includes('Edg/')) return `edge://flags/#${FLAG}`;
	if (userAgent.includes('OPR/')) return `opera://flags/#${FLAG}`;
	return `chrome://flags/#${FLAG}`;
}

/** Keep only hex digits and insert colons between pairs as the user types */
function formatMacInput(value: string) {
	const hex = value
		.replace(/[^0-9a-f]/gi, '')
		.toUpperCase()
		.slice(0, 12);
	return hex.replace(/(..)(?=.)/g, '$1:');
}

function Step({number, children}: {number: number; children: ReactNode}) {
	return (
		<li className="flex gap-3">
			<span className="bg-primary/15 text-primary flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold">
				{number}
			</span>
			<div className="flex min-w-0 flex-1 flex-col gap-2 pt-0.5 text-sm font-normal [&_strong]:font-semibold">
				{children}
			</div>
		</li>
	);
}

function ManualEntry({onSubmit}: {onSubmit: (macAddress: string) => void}) {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState('');
	const macAddress = parseMacAddress(value);

	return (
		<Collapsible open={open} onOpenChange={setOpen}>
			<CollapsibleTrigger asChild>
				<Button variant="link" className="h-auto px-0">
					Enter the MAC address manually instead
					<CaretDown
						weight="bold"
						className={cn('transition-transform', {'rotate-180': open})}
					/>
				</Button>
			</CollapsibleTrigger>
			<CollapsibleContent>
				<form
					className="mt-3 flex flex-col gap-3"
					onSubmit={(e) => {
						e.preventDefault();
						if (macAddress) onSubmit(macAddress);
					}}
				>
					<Field>
						<FieldLabel htmlFor="cube-mac-address">MAC address</FieldLabel>
						<div className="flex gap-2">
							<Input
								id="cube-mac-address"
								className="font-mono"
								placeholder="AB:CD:EF:12:34:56"
								autoComplete="off"
								spellCheck={false}
								autoFocus
								value={value}
								onChange={(e) => setValue(formatMacInput(e.target.value))}
							/>
							<Button type="submit" disabled={!macAddress}>
								Connect
							</Button>
						</div>
						<FieldDescription>
							On Windows and Linux, you can find it at chrome://bluetooth-internals
							under Devices. CubeDesk remembers it after your cube connects.
						</FieldDescription>
					</Field>
				</form>
			</CollapsibleContent>
		</Collapsible>
	);
}

export default function MacAddressPrompt({reason, onRespond}: Props) {
	const submit = (macAddress: string) => onRespond({action: 'submit', macAddress});
	const cancel = () => onRespond({action: 'cancel'});

	if (reason === 'detection-failed') {
		return (
			<>
				<DialogHeader
					title="Couldn't find your cube"
					description="CubeDesk couldn't read your cube's MAC address, which it needs to connect."
				/>
				<ol className="m-0 flex list-none flex-col gap-4 p-0">
					<Step number={1}>Wake your cube up by turning any face</Step>
					<Step number={2}>Keep it close to your device and try again</Step>
				</ol>
				<div className="mt-6 flex flex-wrap items-center justify-end gap-2">
					<Button variant="secondary" onClick={cancel}>
						Cancel
					</Button>
					<Button onClick={() => onRespond({action: 'retry'})}>Try again</Button>
				</div>
				<Separator className="my-5" />
				<ManualEntry onSubmit={submit} />
			</>
		);
	}

	const flagsUrl = getFlagsUrl();

	return (
		<>
			<DialogHeader
				title="Turn on automatic cube detection"
				description="Your cube needs its MAC address to connect. Turn on this browser setting once, and CubeDesk will read it from your cube automatically and reconnect it when you reload."
			/>
			<ol className="m-0 flex list-none flex-col gap-4 p-0">
				<Step number={1}>
					<span>Copy this address and paste it into a new tab</span>
					<div className="flex items-center gap-2">
						<code className="border-tmo-module/15 bg-module min-w-0 flex-1 rounded-md border px-3 py-2 font-mono text-xs break-all">
							{flagsUrl}
						</code>
						<CopyText text={flagsUrl} />
					</div>
					<span className="text-text/60 text-xs">
						Browsers don't let websites open settings pages directly.
					</span>
				</Step>
				<Step number={2}>
					<span>
						Set <strong>Use the new permissions backend for Web Bluetooth</strong> to{' '}
						<strong>Enabled</strong>
					</span>
				</Step>
				<Step number={3}>
					<span>
						Click <strong>Relaunch</strong>, then connect your cube again
					</span>
				</Step>
			</ol>
			<div className="mt-6 flex justify-end">
				<Button onClick={cancel}>Got it</Button>
			</div>
			<Separator className="my-5" />
			<ManualEntry onSubmit={submit} />
		</>
	);
}
