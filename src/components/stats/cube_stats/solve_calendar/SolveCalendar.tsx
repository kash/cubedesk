import React from 'react';
import './SolveCalendar.scss'
import block from '../../../../styles/bem';

const b = block('solve-calendar');

interface Props {
	cubeType: string;
}

export default function SolveCalendar(props: Props) {
	const {cubeType} = props;

    return (
        <div className={b()}>
			{cubeType}
        </div>
    )
}
