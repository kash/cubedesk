import React from 'react';
import ProofCard from '@/components/landing/home/social-proof/ProofCard';
import {resourceUri} from '@/util/storage';

export default function SocialProof() {
	return (
		<div className="flex w-full flex-col justify-center overflow-hidden py-[100px]">
			<div className="relative mx-auto box-border h-[150px] w-full overflow-hidden pl-[7px] max-[1000px]:mb-[15px] max-[1000px]:h-auto max-[1000px]:w-[95%] max-[1000px]:overflow-visible max-[1000px]:p-0">
				<div className="absolute left-1/2 top-0 flex h-full -translate-x-1/2 flex-row max-[1000px]:static max-[1000px]:grid max-[1000px]:w-full max-[1000px]:translate-x-0 max-[1000px]:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] max-[1000px]:gap-[15px]">
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
			<div className="relative mx-auto mt-[25px] box-border h-[150px] w-full overflow-hidden max-[1000px]:mb-[15px] max-[1000px]:h-auto max-[1000px]:w-[95%] max-[1000px]:overflow-visible max-[1000px]:p-0 max-[800px]:hidden">
				<div className="absolute left-1/2 top-0 flex h-full -translate-x-1/2 flex-row max-[1000px]:static max-[1000px]:grid max-[1000px]:w-full max-[1000px]:translate-x-0 max-[1000px]:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] max-[1000px]:gap-[15px]">
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
