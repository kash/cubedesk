import {
	DocCallout,
	DocCode,
	DocHeading,
	DocLink,
	DocList,
	DocParagraph,
	DocTitle,
} from '@/components/docs/prose';
import React from 'react';

export default function MigrateFromCsTimer() {
	return (
		<>
			<DocTitle lead="You can bring your whole csTimer history to CubeDesk in a couple of minutes. Your sessions, times, penalties, scrambles, and comments all come with you.">
				How to migrate from csTimer to CubeDesk
			</DocTitle>

			<DocCallout>
				You need a CubeDesk account to import solves.{' '}
				<DocLink to="/signup">Sign up for free</DocLink> or{' '}
				<DocLink to="/login">log in</DocLink> before you start.
			</DocCallout>

			<DocHeading id="export-from-cstimer">Step 1: Export your data from csTimer</DocHeading>
			<DocList ordered>
				<li>
					Go to <DocLink to="https://cstimer.net">cstimer.net</DocLink> in the browser you
					normally use csTimer in. csTimer saves your times in that browser, so use the
					same one.
				</li>
				<li>
					Click the <strong>Export</strong> icon next to the Settings button.
				</li>
				<li>
					Click <strong>Export to file</strong>. csTimer downloads a{' '}
					<DocCode>.txt</DocCode> file with all of your sessions and solves.
				</li>
			</DocList>

			<DocHeading id="import-into-cubedesk">Step 2: Import the file into CubeDesk</DocHeading>
			<DocList ordered>
				<li>
					Go to <DocLink to="/settings/data?import=cstimer">Settings → Data</DocLink>.
				</li>
				<li>
					Under <strong>Import data</strong>, choose <strong>Import from csTimer</strong>.
				</li>
				<li>
					Drag and drop the <DocCode>.txt</DocCode> file from csTimer into the window, or
					click to select it.
				</li>
			</DocList>

			<DocHeading id="review-and-import">Step 3: Review and import</DocHeading>
			<DocParagraph>
				Before anything is saved, CubeDesk shows how many solves and sessions it found,
				along with a list of your sessions. From here you can:
			</DocParagraph>
			<DocList>
				<li>Rename a session</li>
				<li>Change the puzzle type for a session</li>
				<li>Remove a session and its solves so they aren&apos;t imported</li>
			</DocList>
			<DocParagraph>
				CubeDesk detects each session&apos;s puzzle from its csTimer scramble type. If a
				session has the wrong puzzle, for example a one-handed or blindfolded session that
				should be its own event, change it here. When everything looks right, click{' '}
				<strong>Import data</strong>. When the import finishes, CubeDesk takes you to your{' '}
				<DocLink to="/sessions">Sessions</DocLink> page.
			</DocParagraph>

			<DocHeading id="what-gets-imported">What gets imported</DocHeading>
			<DocList>
				<li>Every session, with its name and order</li>
				<li>Every solve time</li>
				<li>+2 and DNF penalties</li>
				<li>Scrambles</li>
				<li>Comments, which become the solve&apos;s notes in CubeDesk</li>
				<li>The date and time of each solve</li>
			</DocList>
			<DocParagraph>
				Inspection times, multi-phase split times, and your csTimer settings aren&apos;t
				imported. You can set up your timer preferences in{' '}
				<DocLink to="/settings/timer">Settings → Timer</DocLink>.
			</DocParagraph>

			<DocHeading id="existing-data">What happens to my existing CubeDesk solves?</DocHeading>
			<DocParagraph>
				Nothing. Imported sessions are added alongside your existing sessions, and nothing
				is overwritten. Every import creates new sessions, so import each csTimer file only
				once to avoid duplicates.
			</DocParagraph>

			<DocHeading id="troubleshooting">Troubleshooting</DocHeading>
			<DocList>
				<li>
					<strong>&quot;Could not parse csTimer data&quot;</strong> or{' '}
					<strong>&quot;missing required properties&quot;</strong>: the file isn&apos;t a
					csTimer export, or it was changed after downloading. Export it again with{' '}
					<strong>Export to file</strong> and upload the new file without opening or
					editing it.
				</li>
				<li>
					<strong>&quot;Import failed. No data was saved.&quot;</strong>: the import runs
					all at once, so if anything goes wrong, nothing is saved and you can safely try
					again.
				</li>
				<li>
					<strong>My csTimer sessions are empty</strong>: csTimer stores times in the
					browser where you used it. Export from the same browser and device where you did
					your solves.
				</li>
			</DocList>

			<DocHeading id="backups">Backing up your CubeDesk data</DocHeading>
			<DocParagraph>
				You can download a copy of all your CubeDesk solves and sessions at any time. Go to{' '}
				<DocLink to="/settings/data">Settings → Data</DocLink> and click{' '}
				<strong>Export data</strong>. To restore it later, use <strong>Import data</strong>{' '}
				and choose <strong>Import from CubeDesk</strong>.
			</DocParagraph>
		</>
	);
}
