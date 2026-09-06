import {GameContext} from '@/components/play/game/Game';
import ActivePlayers from '@/components/play/match/ActivePlayers';
import MatchPopup from '@/components/play/match/match-popup/MatchPopup';
import {getGameMetaData} from '@/components/play/Play';
import {Button} from '@/components/ui/button';
import {Dialog, DialogContent, DialogHeader} from '@/components/ui/dialog';
import {socketClient} from '@/util/socket/socketio';
import React, {useContext} from 'react';

export default function GameChallenger() {
	const [matchPopupDialog, setMatchPopupDialog] = React.useState<{
		props: React.ComponentProps<typeof MatchPopup>;
		title: React.ReactNode;
		onClose: () => void;
	} | null>(null);

	const {gameType, multiplayerOnly, multiplayer} = useContext(GameContext);
	const gameTypeData = getGameMetaData(gameType);

	if (!multiplayer) {
		return null;
	}

	const minPlayers = 2;
	const maxPlayers = 2;

	function openMatch(joinLobby: boolean) {
		setMatchPopupDialog({
			props: {
				cubeType: '333',
				joinLobby: joinLobby,
				minPlayers: minPlayers,
				maxPlayers: maxPlayers,
				matchType: gameType,
			},
			title: `Play ${gameTypeData.name}`,
			onClose: () => {
				socketClient().emit('playerLeftLobby');
			},
		});
	}

	let joinLobbyButton: React.ReactNode = null;
	const challengeButton = (
		<Button variant="ghost" onClick={() => openMatch(false)} size="lg" className="w-full">
			{'Challenge'}
		</Button>
	);

	// Custom styling on plain button when multiplayer only
	if (multiplayerOnly) {
		joinLobbyButton = (
			<Button variant="default" onClick={() => openMatch(true)} size="lg" className="w-full">
				{'Join Lobby'}
			</Button>
		);
	}

	return (
		<>
			<div className="flex w-full flex-col justify-center gap-2">
				{joinLobbyButton}
				{challengeButton}
				<ActivePlayers matchType={gameType as any} />
			</div>
			<Dialog
				open={matchPopupDialog !== null}
				onOpenChange={(open) => {
					if (!open) {
						setMatchPopupDialog(null);
						matchPopupDialog?.onClose?.();
					}
				}}
			>
				{matchPopupDialog && (
					<DialogContent>
						<DialogHeader title={matchPopupDialog.title} />
						<MatchPopup {...matchPopupDialog.props} />
					</DialogContent>
				)}
			</Dialog>
		</>
	);
}
