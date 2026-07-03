import React, {useContext} from 'react';
import {PieChart} from 'react-minimal-pie-chart';
import {StatsContext} from '@/components/stats/Stats';
import StatModule from '@/components/stats/common/StatModule';

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
		<StatModule rowSpan={1} colSpan={2} className="flex flex-col justify-between">
			<div>
				<div className="mx-auto mt-2.5 mb-5 w-full max-w-[150px]">
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
				<h3 className="m-0 w-full text-center text-[2rem]">
					{played} Match{played === 1 ? '' : 'es'}
				</h3>
				<div className="relative mx-auto mt-[30px] flex w-full max-w-[350px] flex-row items-center justify-between">
					<div className="flex flex-col items-center">
						<h4 className="text-[1.4rem]">
							{wins.toLocaleString()} win{wins === 1 ? '' : 's'}
						</h4>
						<p>({played ? winPercent : 0}%)</p>
					</div>
					<div className="flex flex-col items-center">
						<h4 className="text-[1.4rem]">
							{losses.toLocaleString()} {losses === 1 ? 'loss' : 'losses'}
						</h4>
						<p>({played ? lostPercent : 0}%)</p>
					</div>
				</div>
			</div>
		</StatModule>
	);
}
