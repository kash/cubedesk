import React from 'react';
import {Link} from 'react-router-dom';
import {getGameMetaData} from '../Play';
import './GameRow.scss';
import block from '../../../styles/bem';
import Module from '../../common/module/Module';
import Button from '../../common/button/Button';
import {GameType} from '../../../../shared/match/consts';

const b = block('play-game-row');

interface Props {
	gameType: GameType;
}

export default function GameRow(props: Props) {
	const {gameType} = props;
	const {icon, name, description, color, id} = getGameMetaData(gameType);

	return (
		<Module>
			<Link className={b()} to={`/play/${id}`}>
				<div className={b('left')} style={{color}}>
					<i className={icon} />
					<h3 className={b('another')}>{name}</h3>
					<p>{description}</p>
				</div>
				<div className={b('right')}>
					<Button icon="ph-arrow-right" text="Open" flat white />
				</div>
			</Link>
		</Module>
	);
}
