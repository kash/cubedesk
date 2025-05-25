import React, {useContext} from 'react';
import './Challengers.scss';
import Challenger from './challenger/Challenger';
import block from '../../../../styles/bem';
import {MatchContext} from '../../match/Match';

const b = block('timer-challengers');

export default function Challengers() {
	const context = useContext(MatchContext);
	const challengers = context?.challengers;

	if (!challengers || !challengers.length) {
		return null;
	}

	const body = challengers.map((c) => <Challenger key={c.challenger.id} {...c} />);

	return <div className={b()}>{body}</div>;
}
