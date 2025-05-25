import React from 'react';
import './StartInstructions.scss'
import block from '../../../../styles/bem';

const b = block('start-instructions');

interface Props {
	children: React.ReactNode;
}

export default function StartInstructions(props: Props) {
    return (
        <div className={b()}>
			{props.children}
        </div>
    )
}
