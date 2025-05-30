import {Button} from '@/components/ui/button';
import './SolveCheck.scss';
import React from 'react';
import {resourceUri} from '../../../../lib/util/storage';
import block from '../../../../styles/bem';
import {IModalProps} from '../../../common/modal/Modal';

const b = block('smart-cube-solve-check');

export default function SolveCheck(props: IModalProps) {
	return (
		<div className={b()}>
			<img src={resourceUri('/images/rubiks_cube_solve.svg')} alt="Solved speed cube" />
			<Button variant="primary" onClick={props.onComplete}>
				My cube is solved
			</Button>
		</div>
	);
}
