import React, {useContext} from 'react';
import './JoinOptions.scss';
import {UsersThree, UserPlus} from '@phosphor-icons/react';
import block from '../../../../../styles/bem';
import {MatchPopupContext, MatchPopupPage} from '../MatchPopup';

const b = block('match-join-options');

export default function JoinOptions() {
	const {setPage} = useContext(MatchPopupContext);

	return (
		<div className={b()}>
			<button className={b('option')} onClick={() => setPage(MatchPopupPage.LOBBY)}>
				<div className={b('center', {lobby: true})}>
					<UsersThree weight="fill" />
					<h2>Join Lobby</h2>
				</div>
			</button>
			<button className={b('option')} onClick={() => setPage(MatchPopupPage.CUSTOM_OPTIONS)}>
				<div className={b('center', {custom: true})}>
					<UserPlus weight="fill" />
					<h2>Create Match</h2>
				</div>
			</button>
		</div>
	);
}
