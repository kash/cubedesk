import Button from '@/components/common/Button';
import CopyText from '@/components/common/CopyText';
import Loading from '@/components/common/Loading';
import Tag from '@/components/common/Tag';
import {useMatchPopupContext} from '@/components/play/match/match-popup/MatchPopup';
import {getGameMetaData} from '@/components/play/Play';
import {Match} from '@/types/match';
import {getCubeTypeInfoById} from '@/util/cubes/util';
import {toastError} from '@/util/toast';
import {trpc} from '@/util/trpc';
import {ArrowRight, Eye} from 'phosphor-react';
import React, {useEffect, useState} from 'react';
import {GameType} from '../../../../../../shared/match/consts';

export function getMatchLinkBase(gameType: GameType) {
	const gameMetaData = getGameMetaData(gameType);

	const origin = window.location.origin;
	return `${origin}/m/${gameMetaData.id}/`;
}

export default function CustomMatch() {
	const {minPlayers, maxPlayers, cubeType, matchType} = useMatchPopupContext();

	const [showChallengeLink, setShowChallengeLink] = useState(false);
	const [creatingLink, setCreatingLink] = useState(false);
	const [match, setMatch] = useState<Match | null>(null);

	// Need another page (?) for when additional options are required for the custom match
	useEffect(() => {
		createChallenge();
	}, []);

	function toggleShowChallengeLink() {
		setShowChallengeLink(!showChallengeLink);
	}

	async function createChallenge() {
		if (creatingLink) {
			return;
		}

		setCreatingLink(true);

		try {
			const newMatch = await trpc.match.createWithNewSession.mutate({
				min_players: minPlayers,
				max_players: maxPlayers,
				cube_type: cubeType,
				match_type: matchType,
			});

			// CustomMatch only reads id/link_code/spectate_code, which serialize unchanged
			setMatch(newMatch as unknown as Match);
			setCreatingLink(false);
		} catch (e) {
			console.error(e);
			toastError(e);
		}
	}

	function getMatchURL(m: Match) {
		return `${getMatchLinkBase(matchType)}${m.link_code}`;
	}

	function getSpectateURL(m: Match) {
		return `${getMatchLinkBase(matchType)}${m.spectate_code}`;
	}

	function getMatchLinkBody(m: Match) {
		let linkCode = '●●●●●●●';
		if (showChallengeLink) {
			linkCode = m.link_code;
		}

		return (
			<p className="text-tmo-button m-0 flex flex-row items-center text-base font-semibold">
				{getMatchLinkBase(matchType)}
				{linkCode}
			</p>
		);
	}

	let body;
	if (match) {
		const matchLink = getMatchURL(match);
		const spectateLink = getSpectateURL(match);

		const ct = getCubeTypeInfoById(cubeType);

		body = (
			<div className="flex w-full flex-col items-start">
				<div className="mx-auto mt-10 mb-[60px] flex flex-col items-center">
					<div className="mb-[5px] flex w-full flex-row flex-wrap gap-1">
						<Tag backgroundColor="secondary" text={ct?.name ?? cubeType} />
						<Tag backgroundColor="secondary" text={`${minPlayers} Players`} />
					</div>
					<div className="bg-button mb-[5px] box-border rounded-[5px] px-[13px] py-[9px]">
						{getMatchLinkBody(match)}
					</div>
					<div className="flex w-full items-start justify-between">
						<Button
							text="Show Link"
							onClick={toggleShowChallengeLink}
							icon={<Eye weight="bold" />}
							white={showChallengeLink}
						/>
						<CopyText
							buttonProps={{
								text: 'Copy Link',
								primary: true,
							}}
							text={matchLink}
						/>
					</div>
				</div>
				<div className="flex w-full flex-row items-end justify-between">
					<CopyText
						buttonProps={{
							text: 'Copy Spectate Link',
							large: true,
							gray: true,
						}}
						text={spectateLink}
					/>
					<Button
						icon={<ArrowRight />}
						primary
						glow
						large
						text="Join Match"
						to={matchLink}
					/>
				</div>
			</div>
		);
	} else {
		body = (
			<div className="flex w-full flex-col items-start">
				<Loading />
			</div>
		);
	}

	return <div className="flex w-full flex-col items-start">{body}</div>;
}
