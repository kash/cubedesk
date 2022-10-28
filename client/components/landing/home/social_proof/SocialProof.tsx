import React from 'react';
import './SocialProof.scss';
import block from '../../../../styles/bem';
import ProofCard from './proof_card/ProofCard';
import {resourceUri} from '../../../../util/storage';

const b = block('landing-social-proof');

export default function SocialProof() {
	return (
		<div className={b()}>
			<div className={b('row')}>
				<div className={b('row-body')}>
					<ProofCard
						quote="I love cubedesk, the  best cubing website so far"
						username="ROBERT"
						source="discord"
					/>
					<ProofCard
						img={resourceUri('/images/landing/social_proof/matty_hiroto.png')}
						imgAlt="Image of Matty Hiroto"
						link="https://www.youtube.com/watch?v=0QmM3EmWZKU"
						title="Matty Hiroto playing Elimination"
						username="TheCubicle"
						source="youtube"
					/>
					<ProofCard quote="That's why I love CubeDesk so much" username="SlowEntireCube" source="discord" />
					<ProofCard
						img={resourceUri('/images/landing/social_proof/max_park.jpeg')}
						imgAlt="Image of Max Park looking up"
						link="https://www.youtube.com/watch?v=aBwLfp8atb8"
						title="Max Park playing Elimination"
						username="Max Park"
						source="youtube"
					/>
					<ProofCard
						quote="I just started using CubeDesk and it's AMAZING!"
						username="patricKING210"
						source="discord"
					/>
					<ProofCard quote="Cubedesk pro is great! Great work!" username="Blaze" source="discord" />
				</div>
			</div>
			<div className={b('row')}>
				<div className={b('row-body')}>
					<ProofCard quote="The new UI looks amazing" username="Cubepad" source="discord" />
					<ProofCard
						img={resourceUri('/images/landing/social_proof/cubedesk_better.jpeg')}
						imgAlt="This website is better than csTimer?"
						link="https://www.youtube.com/watch?v=qlrk8pkEvPc"
						title="This website is better than csTimer?"
						username="Cubing For Fun"
						source="youtube"
					/>
					<ProofCard
						img={resourceUri('/images/landing/social_proof/js_cuber.jpeg')}
						imgAlt="Thumbnail for CubeDesk | The Best Speedcubing App by JS cuber"
						link="https://www.youtube.com/watch?v=BIb_jhLnSDA"
						title="CubeDesk | The Best Speedcubing App?"
						username="JS cuber"
						source="youtube"
					/>
					<ProofCard
						quote="CubeDesk has excellent innovation that goes way beyond csTimer!"
						username="cubing.considered"
						source="instagram"
					/>
					<ProofCard
						img={resourceUri('/images/landing/social_proof/speedcubereview.jpeg')}
						imgAlt="Fantastic Timer thumbnail by SpeedCubeReview"
						link="https://www.youtube.com/watch?v=5gtUlKZf970"
						title="Fantastic Timer"
						username="SpeedCubeReview"
						source="youtube"
					/>
					<ProofCard
						link="https://www.speedsolving.com/threads/is-cubedesk-the-future-of-cubing.86584/post-1474156"
						quote="I switched to cubedesk from cstimer."
						username="nigelthecuber"
						source="speedsolving"
					/>{' '}
				</div>
			</div>
		</div>
	);
}
