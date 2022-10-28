import React, {useContext} from 'react';
import {PieChart} from 'react-minimal-pie-chart';
import './MatchStats.scss';
import block from '../../../../styles/bem';
import {StatsContext} from '../../Stats';
import StatModule from '../stat_module/StatModule';

const b = block('match-stats');

export default function MatchStats() {
	const context = useContext(StatsContext);
	const {stats} = context;

	let ties = 0;
	const played = stats.matches_played || 0;
	const wins = stats.matches_won || 0;
	const losses = stats.matches_lost || 0;

	if (!played) {
		ties = 1;
	}

	const winPercent = Math.floor((wins / played) * 100);
	const lostPercent = Math.floor((losses / played) * 100);

	return (
		<StatModule rowSpan={1} colSpan={2} className={b()}>
			<div className={b('upper')}>
				<div className={b('pie')}>
					<PieChart
						rounded
						lineWidth={18}
						data={[
							{title: 'Wins', value: wins, color: '#23C586'},
							{title: 'Ties', value: ties, color: '#FFFFFF'},
							{title: 'Losses', value: losses, color: '#CC4C4C'},
						]}
						label={null}
						labelPosition={100}
						labelStyle={{
							color: 'white',
						}}
					/>
				</div>
				<h3>
					{played} Match{played === 1 ? '' : 'es'}
				</h3>
				<div className={b('ratio')}>
					<div className={b('ratio-side')}>
						<h4>
							{wins.toLocaleString()} win{wins === 1 ? '' : 's'}
						</h4>
						<p>({played ? winPercent : 0}%)</p>
					</div>
					<div className={b('ratio-side')}>
						<h4>
							{losses.toLocaleString()} {losses === 1 ? 'loss' : 'losses'}
						</h4>
						<p>({played ? lostPercent : 0}%)</p>
					</div>
				</div>
			</div>
		</StatModule>
	);
}
