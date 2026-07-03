import React, {useContext} from 'react';
import {ArrowRight} from 'phosphor-react';
import HorizontalNav from '@/components/common/HorizontalNav';
import {MatchPopupContext, MatchPopupPage} from '@/components/play/match/match-popup/MatchPopup';
import CubePicker from '@/components/common/CubePicker';
import {CubeType} from '@/util/cubes/cube_types';
import Button from '@/components/common/Button';
import ProOnly from '@/components/common/pro_only/ProOnly';

export default function CustomMatchOptions() {
	const context = useContext(MatchPopupContext);

	function selectPlayerCount(val: string) {
		const count = parseInt(val);
		context.setMaxPlayers(count);
		context.setMinPlayers(count);
	}

	function selectCubeType(ct: CubeType) {
		context.setCubeType(ct.id);
	}

	function createMatch() {
		context.setPage(MatchPopupPage.CUSTOM);
	}

	return (
		<div className="grid grid-cols-[repeat(auto-fit,minmax(300px,auto))] gap-5">
			<ProOnly noPadding>
				<div className="border-tmo-module/10 box-border flex flex-col items-start rounded border-[3px] p-[15px]">
					<div className="mb-1">
						<h3>Cube Type</h3>
					</div>
					<CubePicker
						excludeCustomCubeTypes
						excludeOtherCubeType
						value={context.cubeType}
						onChange={selectCubeType}
						dropdownProps={{
							openLeft: true,
							dropdownButtonProps: {
								primary: true,
								large: true,
								glow: true,
							},
						}}
					/>
				</div>
			</ProOnly>
			<ProOnly noPadding>
				<div className="border-tmo-module/10 box-border flex flex-col items-start rounded border-[3px] p-[15px]">
					<div className="mb-1">
						<h3>Players</h3>
						<p>
							The number of players who will be playing in this match. Note that these
							many players *must* join before the match can start.
						</p>
					</div>
					<HorizontalNav
						tabId={String(context.minPlayers)}
						onChange={selectPlayerCount}
						tabs={[2, 3, 4, 5, 6].map((num) => ({
							id: String(num),
							value: String(num),
						}))}
					/>
				</div>
			</ProOnly>
			<div className="mt-5 w-full justify-end">
				<Button
					onClick={createMatch}
					text="Create custom match"
					icon={<ArrowRight />}
					primary
					glow
					large
				/>
			</div>
		</div>
	);
}
