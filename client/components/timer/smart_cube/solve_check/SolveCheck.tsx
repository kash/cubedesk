import React from 'react';
import './SolveCheck.scss';
import Button from '../../../common/button/Button';
import {IModalProps} from '../../../common/modal/Modal';
import block from '../../../../styles/bem';
import {resourceUri} from '../../../../util/storage';

const b = block('smart-cube-solve-check');

export default function SolveCheck(props: IModalProps) {
	return (
		<div className={b()}>
			<img src={resourceUri('/images/rubiks_cube_solve.svg')} alt="Solved speed cube" />
			<Button text="My cube is solved" primary onClick={props.onComplete} />
		</div>
	);
}
