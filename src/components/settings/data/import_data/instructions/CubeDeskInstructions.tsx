import React from 'react';
import block from '../../../../../styles/bem';
import ImportSection from '../import_section/ImportSection';

const b = block('import-instructions');

export default function CubeDeskInstructions() {
	return (
		<div className={b()}>
			<ImportSection title="How to export data from CubeDesk">
				<ol>
					<li>
						Navigate to the{' '}
						<a href="/settings" target="_blank">
							Settings
						</a>{' '}
						page
					</li>
					<li>Click "Export all data" and save the file</li>
				</ol>
			</ImportSection>
		</div>
	);
}
