import {DOC_SECTIONS, DocPage, getDocPage} from '@/components/docs/doc-pages';
import Header from '@/components/layout/Header';
import {cn} from '@/util/cn';
import {useTheme} from '@/util/hooks/useTheme';
import {resourceUri} from '@/util/storage';
import {ArrowLeft, List, X} from 'phosphor-react';
import React, {ReactNode, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

interface Props {
	path: string;
	children: ReactNode;
}

const FOCUS_RING =
	'focus-visible:outline-primary focus-visible:outline-2 focus-visible:outline-offset-4';

function getStructuredData(page: DocPage) {
	if (page.structuredData) {
		return page.structuredData;
	}

	const url = `${process.env.BASE_URI}${page.path}`;

	return {
		'@context': 'https://schema.org',
		'@type': 'TechArticle',
		headline: page.title,
		description: page.description,
		url,
		mainEntityOfPage: url,
		author: {
			'@type': 'Person',
			name: 'Kash Goudarzi',
			url: `${process.env.BASE_URI}/user/kash`,
		},
		publisher: {
			'@type': 'Organization',
			name: 'CubeDesk',
			url: process.env.BASE_URI,
		},
	};
}

function DocsNav(props: {path: string}) {
	return (
		<nav aria-label="Documentation" className="flex flex-col gap-8">
			{DOC_SECTIONS.map((section) => (
				<div key={section.label} className="flex flex-col gap-2">
					<p className="text-text/40 m-0 px-3 font-mono text-[11px] tracking-[0.2em] uppercase">
						{section.label}
					</p>
					<ul className="m-0 flex list-none flex-col gap-0.5 p-0">
						{section.pages.map((page) => {
							const active = page.path === props.path;

							return (
								<li key={page.path}>
									<Link
										to={page.path}
										aria-current={active ? 'page' : undefined}
										className={cn(
											'block rounded-md px-3 py-1.5 font-mono text-sm leading-6 transition-colors',
											FOCUS_RING,
											{
												'bg-text/10 text-text': active,
												'text-text/60 hover:bg-text/5 hover:text-text':
													!active,
											},
										)}
									>
										{page.navTitle}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			))}
		</nav>
	);
}

export default function DocsLayout(props: Props) {
	const {path, children} = props;
	const page = getDocPage(path);
	const [menuOpen, setMenuOpen] = useState(false);
	const backgroundColor = useTheme('background_color');
	const logoColor = backgroundColor.isDark ? 'white' : 'black';

	// Each doc page is its own route, so the layout remounts when navigating between them
	useEffect(() => {
		if (!window.location.hash) {
			window.scrollTo(0, 0);
		}
	}, [path]);

	useEffect(() => {
		if (!menuOpen) {
			return;
		}

		function onKeyDown(e: KeyboardEvent) {
			if (e.key === 'Escape') {
				setMenuOpen(false);
			}
		}

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		window.addEventListener('keydown', onKeyDown);

		return () => {
			document.body.style.overflow = previousOverflow;
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [menuOpen]);

	return (
		<div className="bg-background text-text relative min-h-screen overflow-x-clip">
			<Header path={page.path} title={page.title} description={page.description}>
				<link rel="canonical" href={`${process.env.BASE_URI}${page.path}`} />
				<script type="application/ld+json">
					{JSON.stringify(getStructuredData(page))}
				</script>
			</Header>

			<header className="bg-background/95 border-text/10 sticky top-0 z-40 border-b backdrop-blur">
				<div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
					<div className="flex items-center gap-2">
						<button
							type="button"
							aria-label={menuOpen ? 'Close menu' : 'Open menu'}
							aria-expanded={menuOpen}
							aria-controls="docs-mobile-nav"
							onClick={() => setMenuOpen((open) => !open)}
							className={cn(
								'text-text/70 hover:text-text hover:bg-text/5 -ml-2 flex size-9 items-center justify-center rounded-md transition-colors lg:hidden',
								FOCUS_RING,
							)}
						>
							{menuOpen ? (
								<X aria-hidden="true" size={20} weight="bold" />
							) : (
								<List aria-hidden="true" size={20} weight="bold" />
							)}
						</button>
						<Link to="/" className={cn('rounded-md', FOCUS_RING)}>
							<img
								className="h-auto w-[110px]"
								src={resourceUri(
									`/images/branding/cubedesk-lockup-${logoColor}.svg`,
								)}
								alt="CubeDesk"
							/>
						</Link>
					</div>
					<Link
						to="/"
						className={cn(
							'text-text/50 hover:text-text/90 inline-flex items-center gap-2 rounded-sm font-mono text-xs leading-7 tracking-[0.1em] transition-colors',
							FOCUS_RING,
						)}
					>
						<ArrowLeft aria-hidden="true" size="1.1em" weight="bold" />
						TIMER
					</Link>
				</div>
			</header>

			{menuOpen ? (
				<div
					id="docs-mobile-nav"
					className="bg-background fixed inset-x-0 top-14 bottom-0 z-30 overflow-y-auto px-4 py-8 sm:px-6 lg:hidden"
					onClick={(e) => {
						if (e.target instanceof HTMLElement && e.target.closest('a')) {
							setMenuOpen(false);
						}
					}}
				>
					<DocsNav path={page.path} />
				</div>
			) : null}

			<div className="mx-auto flex w-full max-w-6xl gap-12 px-4 sm:px-6">
				<aside className="sticky top-14 hidden max-h-[calc(100vh-3.5rem)] w-64 shrink-0 self-start overflow-y-auto py-12 lg:block">
					<DocsNav path={page.path} />
				</aside>

				<main className="w-full max-w-2xl min-w-0 pt-10 pb-16 sm:pt-12">
					<article className="relative z-10 flex flex-col gap-4">{children}</article>
				</main>
			</div>
		</div>
	);
}
