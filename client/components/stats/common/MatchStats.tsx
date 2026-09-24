import StatModule from '@/components/stats/common/StatModule';
import {useStatsContext} from '@/components/stats/Stats';
import {Sword} from 'phosphor-react';
import React from 'react';
import {PieChart} from 'react-minimal-pie-chart';
import {Link} from 'react-router-dom';
import {useI18n} from '@/i18n';

export default function MatchStats() {
	const {t} = useI18n();
	const {stats} = useStatsContext();
	const played = stats.matches_played || 0;
	const wins = stats.matches_won || 0;
	const losses = stats.matches_lost || 0;
	const ties = Math.max(0, played - wins - losses);

	return (
		<StatModule className="stats-matches">
			{played ? (
				<>
					<div
						className="stats-ring"
						role="img"
						aria-label={`${played} matches: ${wins} wins, ${losses} losses, ${ties} ties`}
					>
						<PieChart
							lineWidth={12}
							startAngle={-90}
							data={[
								{title: 'Wins', value: wins, color: '#23C586'},
								{title: 'Ties', value: ties, color: '#8b95a5'},
								{title: 'Losses', value: losses, color: '#e47878'},
							]}
						/>
						<div className="stats-ring-label">
							<strong>{played.toLocaleString()}</strong>
							<span>{t('matches')}</span>
						</div>
					</div>
					<div className="stats-match-results">
						<h3>{t('Match record')}</h3>
						<p>
							<span>
								<i style={{background: '#23C586'}} />
									{t('Wins')}
							</span>
							<strong>
								{wins.toLocaleString()}{' '}
								<small>{Math.round((wins / played) * 100)}%</small>
							</strong>
						</p>
						<p>
							<span>
								<i style={{background: '#e47878'}} />
									{t('Losses')}
							</span>
							<strong>
								{losses.toLocaleString()}{' '}
								<small>{Math.round((losses / played) * 100)}%</small>
							</strong>
						</p>
						{ties > 0 && (
							<p>
								<span>
									<i style={{background: '#8b95a5'}} />
									{t('Ties')}
								</span>
								<strong>{ties.toLocaleString()}</strong>
							</p>
						)}
					</div>
				</>
			) : (
				<div className="stats-match-empty">
					<span className="stats-empty-icon">
						<Sword size={24} />
					</span>
					<h3>{t('Your next challenge awaits')}</h3>
					<p>
						{t('Go head-to-head with another cuber.')}
						<br />
						{t('Your match record starts here.')}
					</p>
					<Link to="/play" className="stats-text-link">
						{t('Play your first match')} <span aria-hidden="true">↗</span>
					</Link>
				</div>
			)}
		</StatModule>
	);
}
