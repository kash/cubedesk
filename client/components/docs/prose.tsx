import {cn} from '@/util/cn';
import {Info, Warning} from 'phosphor-react';
import React, {ReactNode} from 'react';
import {Link} from 'react-router-dom';

const LINK_CLASS =
	'hover:text-text text-inherit underline decoration-text/30 underline-offset-4 transition-colors';

export function DocTitle(props: {children: ReactNode; lead?: ReactNode}) {
	return (
		<header className="mb-2 flex flex-col gap-4">
			<h1 className="text-text m-0 font-mono text-2xl leading-tight font-semibold tracking-tight">
				{props.children}
			</h1>
			{props.lead ? <DocParagraph>{props.lead}</DocParagraph> : null}
		</header>
	);
}

export function DocHeading(props: {id: string; children: ReactNode}) {
	return (
		<h2
			id={props.id}
			className="text-text m-0 mt-6 scroll-mt-20 font-mono text-base leading-7 font-semibold"
		>
			{props.children}
		</h2>
	);
}

export function DocSubheading(props: {children: ReactNode}) {
	return (
		<h3 className="text-text m-0 mt-2 font-mono text-sm leading-7 font-semibold">
			{props.children}
		</h3>
	);
}

export function DocParagraph(props: {children: ReactNode}) {
	return <p className="text-text/80 m-0 font-mono text-sm leading-7">{props.children}</p>;
}

export function DocList(props: {ordered?: boolean; children: ReactNode}) {
	const List = props.ordered ? 'ol' : 'ul';

	return (
		<List
			className={cn(
				'text-text/80 marker:text-text/40 m-0 flex flex-col gap-2 pl-6 font-mono text-sm leading-7',
				{
					'list-decimal': props.ordered,
					'list-disc': !props.ordered,
				},
			)}
		>
			{props.children}
		</List>
	);
}

export function DocCode(props: {children: ReactNode}) {
	return (
		<code className="bg-text/10 text-text rounded px-1.5 py-0.5 font-mono text-[0.85em] break-words">
			{props.children}
		</code>
	);
}

export function DocLink(props: {to: string; children: ReactNode}) {
	if (props.to.startsWith('#')) {
		return (
			<a href={props.to} className={LINK_CLASS}>
				{props.children}
			</a>
		);
	}

	if (props.to.startsWith('http')) {
		return (
			<a href={props.to} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
				{props.children}
			</a>
		);
	}

	return (
		<Link to={props.to} className={LINK_CLASS}>
			{props.children}
		</Link>
	);
}

export function DocCallout(props: {variant?: 'info' | 'warning'; children: ReactNode}) {
	const warning = props.variant === 'warning';
	const Icon = warning ? Warning : Info;

	return (
		<aside
			className={cn('flex gap-3 rounded-lg border px-4 py-3', {
				'border-warning/40 bg-warning/5': warning,
				'border-text/15 bg-text/5': !warning,
			})}
		>
			<Icon
				aria-hidden="true"
				size="1.1em"
				weight="bold"
				className={cn('mt-1.5 shrink-0', {
					'text-warning': warning,
					'text-text/60': !warning,
				})}
			/>
			<div className="text-text/80 font-mono text-sm leading-7">{props.children}</div>
		</aside>
	);
}
