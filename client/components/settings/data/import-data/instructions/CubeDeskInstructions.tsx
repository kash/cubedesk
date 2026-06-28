import React from 'react';
import ImportSection from '@/components/settings/data/import-data/ImportSection';

export default function CubeDeskInstructions() {
	return (
		<div>
			<ImportSection title="How to export data from CubeDesk">
				<ol className="box-border list-decimal pl-[35px]">
					<li className="text-[1.1rem] leading-[1.6rem] text-text opacity-85">
						Navigate to the{' '}
						<a className="text-text underline opacity-70" href="/settings" target="_blank">
							Settings
						</a>{' '}
						page
					</li>
					<li className="text-[1.1rem] leading-[1.6rem] text-text opacity-85">
						Click "Export all data" and save the file
					</li>
				</ol>
			</ImportSection>
		</div>
	);
}
