import {MatchContext} from '@/components/play/match/Match';
import Challenger from '@/components/play/target/challengers/Challenger';
import React, {useContext} from 'react';

export default function Challengers() {
	const context = useContext(MatchContext);
	const challengers = context?.challengers;

	if (!challengers || !challengers.length) {
		return null;
	}

	const body = challengers.map((c) => <Challenger key={c.challenger.id} {...c} />);

	return <div className="grid h-full w-full grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-2">{body}</div>;
}
