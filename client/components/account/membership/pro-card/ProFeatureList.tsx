import React from 'react';
import {CaretUp, CaretDown, Confetti, Sword, DiscordLogo, Tree, ChartLineUp, HeartStraight} from 'phosphor-react';
import classNames from 'classnames';
import ProFeature from '@/components/account/membership/pro-card/ProFeature';
import {useToggle} from '@/util/hooks/useToggle';
import Button from '@/components/common/button/Button';
import {resourceUri} from '@/util/storage';

export default function ProFeatureList() {
	const [detailed, toggleDetailed] = useToggle(false);
	const hideDetails = !detailed;
	const featureClassName = classNames({
		'border-b-2 border-solid border-tmo-module/20': !hideDetails,
	});

	return (
		<div className="w-full">
			<div className="mb-2.5 mt-5 flex flex-row items-end justify-between">
				<h4 className="mb-0">Features</h4>
				<Button
					white
					flat
					icon={detailed ? <CaretUp /> : <CaretDown />}
					text={detailed ? 'Hide details' : 'Show details'}
					onClick={() => toggleDetailed()}
				/>
			</div>

			<div>
				<ProFeature
					className={featureClassName}
					hideDetails={hideDetails}
					iconColor="rgb(var(--error-color))"
					icon={<HeartStraight weight="fill" />}
					name="Support development"
					description="CubeDesk is developed by me, @kash. I'm a software developer with a full-time job and paying for the servers alone is hard! Your Pro subscription will greatly help the development of CubeDesk ❤️"
				/>
				<ProFeature
					className={featureClassName}
					hideDetails={hideDetails}
					iconColor="#7e57c2"
					icon={<ChartLineUp weight="fill" />}
					name="In-depth stats"
					description="In addition to the normal stats, you'll have access to detailed charts and numbers to help you better understand your progress."
					imgSrc={resourceUri('/images/pro/detailed_stats.png')}
				/>
				<ProFeature
					className={featureClassName}
					hideDetails={hideDetails}
					iconColor="#78909c"
					icon={<Sword weight="fill" />}
					name="Customize matches"
					description="Create custom 1v1 matches where you can set the cube type and number of players."
					imgSrc={resourceUri('/images/pro/customize_matches.png')}
				/>
				<ProFeature
					className={featureClassName}
					hideDetails={hideDetails}
					iconColor="rgb(var(--success-color))"
					icon={<Tree weight="fill" />}
					name="Theme customization"
					description="Pick from a wide range of Pro-exclusive themes or customize your own."
					imgSrc={resourceUri('/images/pro/customize_themes.png')}
				/>
				<ProFeature
					className={featureClassName}
					hideDetails={hideDetails}
					iconColor="#7289da"
					icon={<DiscordLogo weight="fill" />}
					name="Pro-exclusive Discord channels"
					description="Chat with other Pros, find players to 1v1 against, network, and learn from other CubeDesk enthusiasts! @kash and other cubing personalities will be spending lots of time there, too."
				/>
				<ProFeature
					hideDetails={hideDetails}
					iconColor="rgb(var(--success-color))"
					icon={<Confetti weight="fill" />}
					name="And more!"
				>
					<div>
						<ul className="box-border list-disc pl-5 text-text">
							<li>Pro badge on CubeDesk</li>
							<li className="mt-1.5">Change nickname on Discord</li>
							<li className="mt-1.5">Priority email/Discord support</li>
							<li className="mt-1.5">Early access to new features</li>
							<li className="mt-1.5">Pro-exclusive timer modules</li>
						</ul>
					</div>
				</ProFeature>
			</div>
		</div>
	);
}
