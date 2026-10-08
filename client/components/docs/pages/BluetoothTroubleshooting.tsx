import {
	DocCallout,
	DocCode,
	DocHeading,
	DocLink,
	DocList,
	DocParagraph,
	DocSubheading,
	DocTitle,
} from '@/components/docs/prose';
import React from 'react';

export default function BluetoothTroubleshooting() {
	return (
		<>
			<DocTitle lead="CubeDesk connects to smart cubes and smart timers straight from your browser using Web Bluetooth. If your cube won't show up, won't connect, or its state looks wrong, work through the sections below.">
				Troubleshooting Bluetooth smart cubes and timers
			</DocTitle>

			<DocHeading id="supported-devices">Supported devices</DocHeading>
			<DocParagraph>
				See <DocLink to="/supported-devices">Supported devices</DocLink> for every smart
				cube and timer CubeDesk works with. If you pick a cube that isn&apos;t supported,
				CubeDesk shows &quot;This smart cube isn&apos;t supported yet.&quot;
			</DocParagraph>

			<DocHeading id="supported-browsers">
				Use a browser that supports Web Bluetooth
			</DocHeading>
			<DocParagraph>
				Smart cubes only work in browsers that support Web Bluetooth. Use Chrome, Edge, or
				Opera on Windows, macOS, Linux, ChromeOS, or Android. On iPhone and iPad, use the{' '}
				<DocLink to="https://apps.apple.com/app/bluefy-web-ble-browser/id1492822055">
					Bluefy
				</DocLink>{' '}
				browser. Safari and Firefox don&apos;t support Web Bluetooth.
			</DocParagraph>
			<DocParagraph>
				If you see <strong>&quot;Bluetooth is not available!&quot;</strong>, either your
				browser doesn&apos;t support Web Bluetooth or Bluetooth is turned off on your
				device. Turn Bluetooth on in your system settings, then reload the page.
			</DocParagraph>

			<DocHeading id="turn-on-smart-cube-mode">Turn on smart cube mode</DocHeading>
			<DocList ordered>
				<li>
					Go to <DocLink to="/settings/timer">Settings → Timer</DocLink>, or open the
					timer input dropdown in the timer header.
				</li>
				<li>
					Set <strong>Timer input type</strong> to <strong>Smart Cube</strong>, or to{' '}
					<strong>Smart Timer</strong> if you&apos;re using a Bluetooth timer.
				</li>
				<li>
					Switch the event type to <strong>3x3</strong> or <strong>2x2</strong>. Smart Cube
					mode only works with those two. When a cube connects, CubeDesk switches to its
					event type for you.
				</li>
				<li>
					Click <strong>Connect</strong> under the 3D cube and choose your cube from the
					browser&apos;s device list.
				</li>
			</DocList>
			<DocParagraph>
				2x2 smart cubes track their state relative to one fixed corner, so scramble and
				solve them holding white on top and green in front. A turn of the left face shows up
				as a turn of the right face, which is expected.
			</DocParagraph>
			<DocParagraph>
				If you&apos;d rather start and stop the timer with the space bar and only use the
				cube to record turns, turn on <strong>Use space bar with smart cubes</strong> in
				timer settings.
			</DocParagraph>

			<DocHeading id="cube-not-showing-up">
				My cube doesn&apos;t show up in the device list
			</DocHeading>
			<DocList>
				<li>
					Turn any face to wake the cube up. Most smart cubes go to sleep after a few
					minutes.
				</li>
				<li>
					Charge the cube. A low battery often stops it from advertising over Bluetooth.
				</li>
				<li>
					Disconnect the cube from any other app or device, such as the
					manufacturer&apos;s app on your phone. A smart cube can only connect to one
					device at a time.
				</li>
				<li>Keep the cube close to your computer or phone.</li>
				<li>
					On Android, make sure your browser has permission to find nearby devices. Older
					versions of Android also need Location turned on to scan for Bluetooth devices.
				</li>
			</DocList>

			<DocHeading id="gan-mac-address">GAN and MoYu cubes ask for a MAC address</DocHeading>
			<DocParagraph>
				GAN and MoYu cubes encrypt their data, and CubeDesk needs the cube&apos;s MAC
				address to read it. CubeDesk remembers the address after the first time a cube
				connects. For a new cube, it tries to read the address from the cube automatically,
				but most browsers block this by default. When that happens, you&apos;ll see{' '}
				<strong>&quot;Turn on automatic cube detection&quot;</strong>. You only need to do
				this once:
			</DocParagraph>
			<DocList ordered>
				<li>
					Copy{' '}
					<DocCode>chrome://flags/#enable-web-bluetooth-new-permissions-backend</DocCode>{' '}
					and paste it into a new tab. In Edge, use <DocCode>edge://</DocCode> instead of{' '}
					<DocCode>chrome://</DocCode>. In Opera, use <DocCode>opera://</DocCode>.
				</li>
				<li>
					Set <strong>Use the new permissions backend for Web Bluetooth</strong> to{' '}
					<strong>Enabled</strong>.
				</li>
				<li>
					Click <strong>Relaunch</strong>, then connect your cube again.
				</li>
			</DocList>
			<DocParagraph>
				With this setting on, CubeDesk also reconnects your cube automatically after you
				reload the page. WeiLong V10 AI and V11 AI cubes can often connect without it,
				because CubeDesk can usually work out their address from the cube&apos;s name.
			</DocParagraph>

			<DocSubheading>Entering the MAC address manually</DocSubheading>
			<DocParagraph>
				If you can&apos;t change browser flags, click{' '}
				<strong>Enter the MAC address manually instead</strong> and type the address. It
				looks like <DocCode>AB:CD:EF:12:34:56</DocCode>. On Windows and Linux, open{' '}
				<DocCode>chrome://bluetooth-internals</DocCode> and find your cube under{' '}
				<strong>Devices</strong> to see its address. CubeDesk remembers the address after
				your cube connects, so you only need to enter it once.
			</DocParagraph>

			<DocSubheading>&quot;Couldn&apos;t find your cube&quot;</DocSubheading>
			<DocParagraph>
				The browser setting is on, but CubeDesk didn&apos;t hear from your cube in time.
				Turn any face to wake it up, keep it close to your device, and click{' '}
				<strong>Try again</strong>.
			</DocParagraph>

			<DocSubheading>&quot;Couldn&apos;t read your cube&apos;s state&quot;</DocSubheading>
			<DocParagraph>
				This usually means the MAC address is wrong. If you typed it in, double-check every
				character and connect again.
			</DocParagraph>

			<DocHeading id="cube-out-of-sync">
				The 3D cube doesn&apos;t match my real cube
			</DocHeading>
			<DocParagraph>
				Smart cubes track their state by counting turns, so they can drift out of sync, for
				example if you turned the cube while it was disconnected or popped a piece. Solve
				your real cube, then open the <strong>…</strong> menu next to{' '}
				<strong>Connect</strong> and choose <strong>Mark as solved</strong>. On GAN cubes,
				this also resets the state stored on the cube itself. MoYu cubes can&apos;t be reset
				this way, so they may report the old state again the next time they connect.
			</DocParagraph>
			<DocParagraph>
				GoCube, Rubik&apos;s Connected, and Giiker cubes can&apos;t report their state, so
				CubeDesk asks you to confirm the cube is solved each time it connects. Make sure it
				really is solved before you click <strong>My cube is solved</strong>.
			</DocParagraph>

			<DocHeading id="orientation">The 3D cube is rotated the wrong way</DocHeading>
			<DocParagraph>
				GAN and MoYu cubes with a gyroscope rotate the 3D cube as you move your real cube.
				If it&apos;s pointing the wrong way, hold your cube the way you normally start a
				solve, then choose <strong>Reset orientation</strong> from the <strong>…</strong>{' '}
				menu. CubeDesk treats the way you&apos;re holding the cube at that moment as the
				default view. This option only appears for cubes with a gyroscope.
			</DocParagraph>

			<DocHeading id="timer-wont-start">The timer won&apos;t start</DocHeading>
			<DocParagraph>Check the status message under the timer:</DocParagraph>
			<DocList>
				<li>
					<strong>Solve smart cube to start</strong> or{' '}
					<strong>Solve cube to show scramble</strong>: CubeDesk thinks your cube
					isn&apos;t solved. Solve it, or use <strong>Mark as solved</strong> if it
					already is.
				</li>
				<li>
					<strong>Scramble smart cube to start</strong>: apply the scramble. Correct moves
					turn green. If you make a wrong move, the scramble updates to show how to undo
					it.
				</li>
				<li>
					<strong>Solve cube to proceed</strong>: you made too many wrong moves while
					scrambling. Solve the cube to get a fresh scramble.
				</li>
				<li>
					<strong>Ready to start</strong>: the scramble is done, and the timer starts on
					your first turn. The time between finishing the scramble and that turn counts as
					inspection.
				</li>
			</DocList>

			<DocHeading id="auto-reconnect">
				My cube doesn&apos;t reconnect after reloading
			</DocHeading>
			<DocParagraph>
				CubeDesk can reconnect the last cube you used without opening the device list. This
				needs the same browser setting described in{' '}
				<DocLink to="#gan-mac-address">GAN and MoYu cubes ask for a MAC address</DocLink>.
				When the page loads, you&apos;ll see{' '}
				<strong>&quot;Turn your cube to reconnect&quot;</strong>. Turn any face to wake the
				cube up and it will connect.
			</DocParagraph>
			<DocParagraph>
				Choosing <strong>Disconnect</strong> from the menu makes CubeDesk forget the cube,
				so it won&apos;t reconnect on its own until you click <strong>Connect</strong>{' '}
				again. Leaving the timer page also disconnects the cube.
			</DocParagraph>

			<DocHeading id="disconnects">My cube keeps disconnecting</DocHeading>
			<DocList>
				<li>
					Check the battery bar next to the Bluetooth icon and charge the cube if
					it&apos;s low.
				</li>
				<li>
					Keep the cube close to your device. Walls, USB 3 hubs, and other wireless
					devices can weaken the signal.
				</li>
				<li>Close other tabs or apps that might be connected to the cube.</li>
			</DocList>

			<DocHeading id="smart-timers">Smart timers</DocHeading>
			<DocParagraph>
				Set <strong>Timer input type</strong> to <strong>Smart Timer</strong>, turn the timer
				on, then click <strong>Connect</strong> under the timer picture and choose your timer
				from the list. CubeDesk works out which brand it is on its own. Times come straight
				from the timer, so what you see on its display is what gets saved.
			</DocParagraph>
			<DocParagraph>
				The pads in the timer picture light up while your hands are on the timer, and turn
				green once lifting them will start it. If you have inspection turned on,
				pressing reset on the GAN Smart Timer starts inspection. Pressing reset during a solve
				cancels it without saving.
			</DocParagraph>
			<DocParagraph>
				If the timer turns off or drops out, CubeDesk reconnects when it&apos;s back, and
				you&apos;ll see <strong>&quot;Turn on your timer to reconnect&quot;</strong> while
				it waits. Waiting for the timer and reconnecting after a reload need the browser
				setting described in{' '}
				<DocLink to="#gan-mac-address">GAN and MoYu cubes ask for a MAC address</DocLink>.
				Without it, CubeDesk tries once more a few seconds after the timer drops out.
			</DocParagraph>

			<DocCallout>
				Still stuck? Ask in the{' '}
				<DocLink to="https://discord.gg/wdVbhDnsQV">CubeDesk Discord</DocLink> or open an
				issue on <DocLink to="https://github.com/kash/cubedesk/issues">GitHub</DocLink>.
				Include your cube model, browser, and operating system.
			</DocCallout>
		</>
	);
}
