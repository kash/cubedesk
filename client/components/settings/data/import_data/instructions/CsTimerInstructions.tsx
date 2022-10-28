import React, {useContext} from 'react';
import block from '../../../../../styles/bem';
import CubePicker from '../../../../common/cube_picker/CubePicker';
import {ImportDataContext} from '../ImportData';
import {ButtonProps} from '../../../../common/button/Button';
import ImportSection from '../import_section/ImportSection';

const b = block('import-instructions');

export default function CsTimerInstructions() {
	const context = useContext(ImportDataContext);

	const dropdownButtonProps: ButtonProps = {
		glow: true,
		primary: true,
		large: true,
		disabled: context.importing || !!context.file,
	};

	if (!context.cubeType) {
		dropdownButtonProps.text = 'Select cube type';
	}

	return (
		<div className={b()}>
			<ImportSection title="How to export data from csTimer">
				<ol>
					<li>
						Go to{' '}
						<a href="https://cstimer.net" target="_blank">
							cstimer.net
						</a>
					</li>
					<li>Click the "Export" icon (next to the Settings button)</li>
					<li>Click "Export to file"</li>
				</ol>
			</ImportSection>
		</div>
	);
}
