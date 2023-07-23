import React, {useContext, useEffect, useState} from 'react';
import './CustomMatch.scss';
import block from '../../../../../styles/bem';
import {ArrowRight, Eye} from 'phosphor-react';
import CopyText from '../../../../common/copy_text/CopyText';
import {gql} from '@apollo/client';
import {gqlMutate} from '../../../../api';
import {getGameMetaData} from '../../../Play';
import {MatchPopupContext} from '../MatchPopup';
import Loading from '../../../../common/loading/Loading';
import Button from '../../../../common/button/Button';
import {toastError} from '../../../../../util/toast';
import {getCubeTypeInfoById} from '../../../../../util/cubes/util';
import Tag from '../../../../common/tag/Tag';
import {GameType} from '../../../../../../shared/match/consts';
import {Match} from '../../../../../../server/schemas/Match.schema';

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
				<div className={b('bottom')}>
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
			<div className={b({loading: true})}>
				<Loading />
			</div>
		);
	}

	return <div className={b()}>{body}</div>;
}
