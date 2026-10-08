import {DocHeading, DocLink, DocParagraph, DocTitle} from '@/components/docs/prose';
import {cn} from '@/util/cn';
import {Bluetooth, Plug} from 'phosphor-react';
import React from 'react';

interface DeviceModel {
	name: string;
	/** Editions of the model that share its electronics, shown next to its name */
	variants?: string[];
	comingSoon?: boolean;
}

interface DeviceFamily {
	brand: string;
	name: string;
	connection: 'bluetooth' | 'wired';
	models: DeviceModel[];
	comingSoon?: boolean;
}

// Families with more models than this span the full width so they don't tower over the others
const WIDE_FAMILY_THRESHOLD = 6;

const SMART_CUBES: DeviceFamily[] = [
	{
		brand: 'GAN',
		name: 'GAN smart cubes',
		connection: 'bluetooth',
		models: [
			{name: 'GAN356 i', variants: ['Original', '3']},
			{name: 'GAN356 i Carry', variants: ['S', '2', 'E']},
			{name: 'GAN i Carry 4'},
			{name: 'GAN i4'},
			{name: 'GAN Mini ui', variants: ['FreePlay']},
			{name: 'GAN12 ui', variants: ['FreePlay', 'Maglev', 'SP']},
			{name: 'GAN14 ui', variants: ['FreePlay']},
			{name: 'GAN16 ui Max'},
			{name: 'Monster Go 3Ai'},
			{name: 'GAN251 ui 2x2'},
		],
	},
	{
		brand: 'MoYu',
		name: 'MoYu AI cubes',
		connection: 'bluetooth',
		models: [
			{name: 'WeiLong AI', variants: ['V10', 'V11']},
			{name: 'MoYu AI 2023', variants: ['WeiLong WRM V10 AI']},
			{name: 'MoYu AI', variants: ['Original']},
			{name: 'Super AoLong AI', comingSoon: true},
			{name: 'WeiPo AI 2x2', variants: ['V5'], comingSoon: true},
		],
	},
	{
		brand: 'QiYi',
		name: 'QiYi AI cubes',
		connection: 'bluetooth',
		models: [{name: 'QiYi AI'}, {name: 'X-Man Tornado V4 AI'}],
	},
	{
		brand: 'Particula',
		name: 'GoCube',
		connection: 'bluetooth',
		models: [{name: 'GoCube'}, {name: "Rubik's Connected"}],
	},
	{
		brand: 'Giiker',
		name: 'Giiker cubes',
		connection: 'bluetooth',
		models: [{name: 'Giiker smart cubes'}, {name: 'Xiaomi Mi Smart Magic Cube'}],
	},
];

const TIMERS: DeviceFamily[] = [
	{
		brand: 'GAN',
		name: 'GAN smart timers',
		connection: 'bluetooth',
		models: [{name: 'GAN Smart Timer'}, {name: 'GAN Halo Smart Timer'}],
	},
	{
		brand: 'Speed Stacks',
		name: 'StackMat',
		connection: 'wired',
		models: [{name: 'StackMat Pro timers'}],
	},
	{
		brand: 'MoYu',
		name: 'MoYu AI Timer',
		connection: 'bluetooth',
		models: [{name: 'MoYu AI Timer'}],
		comingSoon: true,
	},
	{
		brand: 'QiYi',
		name: 'QiYi Smart Timer',
		connection: 'bluetooth',
		models: [{name: 'QiYi Smart Timer'}],
		comingSoon: true,
	},
];

function ComingSoonTag() {
	return (
		<span className="text-text/25 shrink-0 font-mono text-xs leading-6 whitespace-nowrap uppercase">
			Coming soon
		</span>
	);
}

function ConnectionLabel(props: {connection: DeviceFamily['connection']}) {
	const bluetooth = props.connection === 'bluetooth';
	const Icon = bluetooth ? Bluetooth : Plug;

	return (
		<span className="text-text/40 inline-flex items-center gap-1 font-mono text-[11px] tracking-[0.1em] uppercase">
			<Icon aria-hidden="true" size="1.1em" weight="bold" />
			{bluetooth ? 'Bluetooth' : 'Wired'}
		</span>
	);
}

function ModelRow(props: {model: DeviceModel; familyComingSoon?: boolean}) {
	const {model} = props;

	return (
		<li className="flex items-start justify-between gap-3">
			<span
				className={cn('font-mono text-sm leading-6', {
					'opacity-50': model.comingSoon && !props.familyComingSoon,
				})}
			>
				<span className="text-text font-mono">{model.name}</span>
				{model.variants ? (
					<span className="text-text/45 font-mono"> · {model.variants.join(', ')}</span>
				) : null}
			</span>
			{model.comingSoon && !props.familyComingSoon ? <ComingSoonTag /> : null}
		</li>
	);
}

function DeviceCard(props: {family: DeviceFamily}) {
	const {family} = props;
	const wide = family.models.length > WIDE_FAMILY_THRESHOLD;
	// A family that's a single device would just repeat its name
	const showModels = family.models.length > 1 || family.models[0].name !== family.name;

	return (
		<section
			aria-label={family.name}
			className={cn(
				'border-text/10 bg-text/[0.03] flex flex-col gap-4 rounded-lg border p-5',
				{
					'sm:col-span-2': wide,
				},
			)}
		>
			<header className="flex items-start justify-between gap-3">
				<div className={cn('flex flex-col gap-1', {'opacity-50': family.comingSoon})}>
					<span className="text-text/40 font-mono text-[11px] tracking-[0.2em] uppercase">
						{family.brand}
					</span>
					<h3 className="text-text m-0 font-sans text-base leading-6 font-semibold tracking-tight">
						{family.name}
					</h3>
				</div>
				{family.comingSoon ? <ComingSoonTag /> : null}
			</header>

			{showModels ? (
				<ul
					className={cn('m-0 grid list-none gap-x-8 gap-y-1.5 p-0', {
						'sm:grid-cols-2': wide,
					})}
				>
					{family.models.map((model) => (
						<ModelRow
							key={model.name}
							model={model}
							familyComingSoon={family.comingSoon}
						/>
					))}
				</ul>
			) : null}

			<div className={cn('mt-auto pt-1', {'opacity-50': family.comingSoon})}>
				<ConnectionLabel connection={family.connection} />
			</div>
		</section>
	);
}

function DeviceGrid(props: {families: DeviceFamily[]}) {
	return (
		<div className="grid gap-4 sm:grid-cols-2">
			{props.families.map((family) => (
				<DeviceCard key={`${family.brand}-${family.name}`} family={family} />
			))}
		</div>
	);
}

export default function SupportedDevices() {
	return (
		<>
			<DocTitle lead="CubeDesk connects to smart cubes and timers straight from your browser. Each card is a family of devices that talk to CubeDesk the same way. Special editions, UV coated and MagLev versions of a listed model use the same electronics, so they work too.">
				Supported smart cubes and timers
			</DocTitle>

			<DocHeading id="smart-cubes">Smart cubes</DocHeading>
			<DeviceGrid families={SMART_CUBES} />

			<DocHeading id="timers">Timers</DocHeading>
			<DeviceGrid families={TIMERS} />

			<DocParagraph>
				Smart cubes and Bluetooth timers need a browser that supports Web Bluetooth. To use
				a Bluetooth timer, set <strong>Timer input type</strong> to{' '}
				<strong>Smart Timer</strong>, and CubeDesk works out which brand it is when it
				connects. If your device won&apos;t show up or connect, see{' '}
				<DocLink to="/guides/bluetooth-troubleshooting">Troubleshooting Bluetooth</DocLink>.
			</DocParagraph>
		</>
	);
}
