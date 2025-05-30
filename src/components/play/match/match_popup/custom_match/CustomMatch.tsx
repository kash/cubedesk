import React, {useContext, useEffect, useState} from 'react';
import './CustomMatch.scss';
import block from '@/styles/bem';
import {ArrowRight, Eye} from '@phosphor-icons/react/dist/ssr';
import CopyText from '@/components/common/copy_text/CopyText';
import {getGameMetaData} from '@/components/play/Play';
import {MatchPopupContext} from '../MatchPopup';
import Loading from '@/components/common/loading/Loading';
import {Button} from '@/components/ui/button';
import {toastError} from '@/lib/util/toast';
import {getCubeTypeInfoById} from '@/lib/util/cubes/util';
import Tag from '@/components/common/tag/Tag';
import {GameType} from '@/shared/match/consts';
import {Match} from '@/generated/zod';
import {api} from '@/trpc/react';
import Link from 'next/link';

const b = block('custom-match');

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

	const createMatchMutation = api.match.createMatchWithNewSession.useMutation();

	async function createChallenge() {
		if (creatingLink) {
			return;
		}

		setCreatingLink(true);

		try {
			const newMatch = await createMatchMutation.mutateAsync({
				min_players: minPlayers,
				max_players: maxPlayers,
				cube_type: cubeType,
				match_type: matchType,
			});

			setMatch(newMatch);
			setCreatingLink(false);
		} catch (e: unknown) {
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
			<p className={b('url')}>
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
			<div className={b()}>
				<div className={b('play')}>
					<div className={b('config')}>
						<Tag backgroundColor="secondary" text={ct.name} />
						<Tag backgroundColor="secondary" text={`${minPlayers} Players`} />
					</div>
					<div className={b('link')}>{getMatchLinkBody()}</div>
					<div className={b('actions')}>
						<Button
							onClick={toggleShowChallengeLink}
							variant={showChallengeLink ? "outline" : "secondary"}
						>
							<Eye weight="bold" className="mr-2" />
							Show Link
						</Button>
						<CopyText
							buttonProps={{
								text: 'Copy Link',
								primary: true,
							}}
							text={matchLink}
						/>
					</div>
				</div>
				<div className={b('bottom')}>
					<CopyText
						buttonProps={{
							text: 'Copy Spectate Link',
							large: true,
							gray: true,
						}}
						text={spectateLink}
					/>
					<Link href={matchLink}>
						<Button variant="default" size="lg">
							<ArrowRight className="mr-2" />
							Join Match
						</Button>
					</Link>
				</div>
			</div>
		);
	} else {
		body = (
			<div className={b({loading: true})}>
				<Loading />
			</div>
		);
	}

	return <div className={b()}>{body}</div>;
}
