import React from 'react';
import './HTSContent.scss';
import HTSNotation from './HTSNotation';
import {useRouteMatch} from 'react-router-dom';
import block from '../../../../styles/bem';

const b = block('hts-content');

const CONTENT_COMPONENT_MAP = {
	notation: HTSNotation,
};

export default function HTSContent() {
	const match = useRouteMatch();
	const stepId = (match.params as any).stepId;

	const ContentComponent = CONTENT_COMPONENT_MAP[stepId];

	if (!ContentComponent) {
		// TODO NOW throw 404
		return null;
	}

	return (
		<div className={b()}>
			<ContentComponent />
		</div>
	);
}
