import React, {useContext, useEffect, useState} from 'react';
import {ArrowRight, Eye} from 'phosphor-react';
import CopyText from '@/components/common/copy_text/CopyText';
import {gql} from '@apollo/client';
import {gqlMutate} from '@/components/api';
import {getGameMetaData} from '@/components/play/Play';
import {MatchPopupContext} from '@/components/play/match/match-popup/MatchPopup';
import Loading from '@/components/common/loading/Loading';
import Button from '@/components/common/button/Button';
import {toastError} from '@/util/toast';
import {getCubeTypeInfoById} from '@/util/cubes/util';
import Tag from '@/components/common/tag/Tag';
import {GameType} from '../../../../../../shared/match/consts';
import {Match} from '../../../../../../server/schemas/Match.schema';

export function getMatchLinkBase(gameType: GameType) {
	const gameMetaData = getGameMetaData(gameType);

	const origin = window.location.origin;
	return `${origin}/m/${gameMetaData.id}/`;
}

export default function CustomMatch() {
	const {minPlayers, maxPlayers, cubeType, matchType} = useContext(MatchPopupContext);

	const [showChallengeLink, setShowChallengeLink] = useState(false);
	const [creatingLink, setCreatingLink] = useState(false);
	const [match, setMatch] = useState<Match>(null);

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

		const query = gql`
			mutation Mutate($input: MatchSessionInput) {
				createMatchWithNewSession(input: $input) {
					id
					link_code
					spectate_code
				}
			}
		`;

		try {
			const res = await gqlMutate<{createMatchWithNewSession: Match}>(query, {
				input: {
					min_players: minPlayers,
					max_players: maxPlayers,
					cube_type: cubeType,
					match_type: matchType,
				},
			});

			const newMatch = res.data.createMatchWithNewSession;

			setMatch(newMatch);
			setCreatingLink(false);
		} catch (e) {
			console.error(e);
			toastError(e);
		}
	}

	function getMatchURL() {
		return `${getMatchLinkBase(matchType)}${match.link_code}`;
	}

	function getSpectateURL() {
		return `${getMatchLinkBase(matchType)}${match.spectate_code}`;
	}

	function getMatchLinkBody() {
		let linkCode = '●●●●●●●';
		if (showChallengeLink) {
			linkCode = match.link_code;
		}

		return (
		<p className="m-0 flex flex-row items-center text-base font-semibold text-tmo-button">
				{getMatchLinkBase(matchType)}
				{linkCode}
			</p>
		);
	}

	let body;
	if (match) {
		const matchLink = getMatchURL();
		const spectateLink = getSpectateURL();

		const ct = getCubeTypeInfoById(cubeType);

		body = (
			<div className="flex w-full flex-col items-start">
				<div className="mx-auto mb-[60px] mt-10 flex flex-col items-center">
					<div className="mb-[5px] flex w-full flex-row flex-wrap gap-1">
						<Tag backgroundColor="secondary" text={ct.name} />
						<Tag backgroundColor="secondary" text={`${minPlayers} Players`} />
					</div>
					<div className="mb-[5px] box-border rounded-[5px] bg-button px-[13px] py-[9px]">
						{getMatchLinkBody()}
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
					<Button icon={<ArrowRight />} primary glow large text="Join Match" to={matchLink} />
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
