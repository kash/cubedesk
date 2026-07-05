import {MatchPopupPage, useMatchPopupContext} from '@/components/play/match/match-popup/MatchPopup';
import {UserPlus, UsersThree} from 'phosphor-react';
import React from 'react';

export default function JoinOptions() {
	const {setPage} = useMatchPopupContext();

	return (
		<div className="mt-5 grid grid-cols-2 gap-[15px]">
			<button
				className="box-border flex items-center justify-center rounded-[7px] border-4 border-button bg-module px-5 py-10 shadow-[0_2px_15px_rgba(0,0,0,0.3)]"
				onClick={() => setPage(MatchPopupPage.LOBBY)}
			>
				<div className="flex flex-col items-center text-[#42a5f5]">
					<UsersThree className="mb-2.5 text-[2rem] text-inherit" weight="fill" />
					<h2 className="text-[1.4rem] text-text">Join Lobby</h2>
				</div>
			</button>
			<button
				className="box-border flex items-center justify-center rounded-[7px] border-4 border-button bg-module px-5 py-10 shadow-[0_2px_15px_rgba(0,0,0,0.3)]"
				onClick={() => setPage(MatchPopupPage.CUSTOM_OPTIONS)}
			>
				<div className="flex flex-col items-center text-[#66bb6a]">
					<UserPlus className="mb-2.5 text-[2rem] text-inherit" weight="fill" />
					<h2 className="text-[1.4rem] text-text">Create Match</h2>
				</div>
			</button>
		</div>
	);
}
