import {cn} from '@/util/cn';
import {useTheme} from '@/util/hooks/useTheme';
import React, {useCallback, useState} from 'react';
import {useTranslation} from 'react-i18next';

interface TriggerProps {
	href: string;
	darkPath: string;
	lightPath: string;
	name: string;
	onHover: () => void;
}

export interface Contributor {
	avatar_url: string;
	contributions: number;
	html_url: string;
	login: string;
	type?: string;
}

interface ContributorsPanelProps {
	contributors: Contributor[];
	loading: boolean;
	error: boolean;
}

let contributorsRequest: Promise<Contributor[]> | null = null;

function isAutomatedContributor(contributor: Contributor) {
	return contributor.type === 'Bot' || contributor.login.endsWith('[bot]');
}

function fetchContributors() {
	if (!contributorsRequest) {
		contributorsRequest = fetch(
			'https://api.github.com/repos/kash/cubedesk/contributors?per_page=100',
		)
			.then(async (response) => {
				if (!response.ok) {
					throw new Error(`GitHub contributors request failed: ${response.status}`);
				}

				const contributors = (await response.json()) as Contributor[];
				return contributors.filter((contributor) => !isAutomatedContributor(contributor));
			})
			.catch((requestError) => {
				contributorsRequest = null;
				throw requestError;
			});
	}

	return contributorsRequest;
}

export function useGithubContributors() {
	const [contributors, setContributors] = useState<Contributor[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const loadContributors = useCallback(() => {
		if (contributors.length || loading || error) {
			return;
		}

		setLoading(true);
		fetchContributors()
			.then(setContributors)
			.catch(() => setError(true))
			.finally(() => setLoading(false));
	}, [contributors.length, error, loading]);

	return {contributors, error, loadContributors, loading};
}

export function GithubContributorsPanel(props: ContributorsPanelProps) {
	const {contributors, error, loading} = props;
	const {t} = useTranslation();

	return (
		<div className="w-full">
			<div className="mb-2 flex items-center gap-2 text-sm font-semibold text-text">
				<span>{t('navigation.contributors')}</span>
			</div>
			{loading ? (
				<div className="text-sm text-text/60">{t('navigation.loadingContributors')}</div>
			) : error ? (
				<div className="text-sm text-text/60">{t('navigation.contributorsLoadFailed')}</div>
			) : (
				<div className="flex max-h-20 flex-wrap gap-1 overflow-y-auto">
					{contributors.map((contributor) => (
						<a
							key={contributor.login}
							href={contributor.html_url}
							target="_blank"
							rel="noreferrer"
							className={cn(
								'flex size-7 shrink-0 items-center justify-center rounded-full p-0.5 transition-colors',
								'hover:bg-tmo-module/10',
							)}
							title={`${contributor.login} · ${contributor.contributions} ${t('navigation.contributions')}`}
						>
							<img
								className="size-6 rounded-full object-cover"
								src={contributor.avatar_url}
								alt={`${contributor.login} profile`}
							/>
						</a>
					))}
				</div>
			)}
		</div>
	);
}

export default function GithubContributors(props: TriggerProps) {
	const {darkPath, lightPath, name, href, onHover} = props;
	const moduleColor = useTheme('module_color');
	const path = moduleColor.isDark ? darkPath : lightPath;

	return (
		<div onMouseEnter={onHover}>
			<a
				className="hover:bg-tmo-module/10 box-border flex flex-col items-center justify-center rounded-[5px] bg-transparent p-1.5 font-semibold opacity-70 transition-all duration-100 ease-in-out hover:opacity-100"
				href={href}
				target="_blank"
				rel="noreferrer"
				onFocus={onHover}
			>
				<img className="size-4 shrink-0 object-contain" src={path} alt={`${name} logo`} />
			</a>
		</div>
	);
}
