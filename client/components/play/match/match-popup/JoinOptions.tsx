import {MatchPopupPage, useMatchPopupContext} from '@/components/play/match/match-popup/MatchPopup';
import {Button} from '@/components/ui/button';
import {UserPlus, UsersThree} from 'phosphor-react';
import React from 'react';

export default function JoinOptions() {
	const {setPage} = useMatchPopupContext();

	return (
		<div className="mt-5 grid grid-cols-2 gap-[15px]">
			<Button
				variant="ghost"
				className="bg-module box-border flex h-auto items-center justify-center rounded-[7px] p-0 px-5 py-10 font-normal whitespace-normal shadow-[0_2px_15px_rgba(0,0,0,0.3)] hover:bg-transparent"
				onClick={() => setPage(MatchPopupPage.LOBBY)}
			>
				<div className="flex flex-col items-center text-[#42a5f5]">
					<UsersThree className="mb-2.5 text-[2rem] text-inherit" weight="fill" />
					<h2 className="text-text text-[1.4rem]">Join Lobby</h2>
				</div>
			</Button>
			<Button
				variant="ghost"
				className="bg-module box-border flex h-auto items-center justify-center rounded-[7px] p-0 px-5 py-10 font-normal whitespace-normal shadow-[0_2px_15px_rgba(0,0,0,0.3)] hover:bg-transparent"
				onClick={() => setPage(MatchPopupPage.CUSTOM_OPTIONS)}
			>
				<div className="flex flex-col items-center text-[#66bb6a]">
					<UserPlus className="mb-2.5 text-[2rem] text-inherit" weight="fill" />
					<h2 className="text-text text-[1.4rem]">Create Match</h2>
				</div>
			</Button>
		</div>
	);
}
