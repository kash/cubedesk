import React, {useContext} from 'react';
import './CustomMatchOptions.scss';
import block from '../../../../../../styles/bem';
import {ArrowRight} from '@phosphor-icons/react';
import HorizontalNav from '../../../../../common/horizontal_nav/HorizontalNav';
import {MatchPopupContext, MatchPopupPage} from '../../MatchPopup';
import CubePicker from '../../../../../common/cube_picker/CubePicker';
import {CubeType} from '../../../../../../util/cubes/cube_types';
import Button from '../../../../../common/button/Button';
import ProOnly from '../../../../../common/pro_only/ProOnly';

const b = block('custom-match-options');

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
		<div className={b()}>
			<ProOnly noPadding>
				<div className={b('option')}>
					<div className={b('label')}>
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
				<div className={b('option')}>
					<div className={b('label')}>
						<h3>Players</h3>
						<p>
							The number of players who will be playing in this match. Note that these many players *must*
							join before the match can start.
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
			<div className={b('actions')}>
				<Button onClick={createMatch} text="Create custom match" icon={<ArrowRight />} primary glow large />
			</div>
		</div>
	);
}
