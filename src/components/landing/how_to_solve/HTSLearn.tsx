import React from 'react';
import {ArrowRight} from 'phosphor-react';
import HTSNav from './hts_nav/HTSNav';
import HTSContent from './hts_content/HTSContent';
import Button from '../../common/button/Button';

export default function HTSLearn() {
	return (
		<div className="px-10">
			<div className="mx-auto max-w-screen-xl py-20">
				<div className="mb-6 flex w-full flex-row items-end justify-between border-b-4 border-solid border-slate-200 pb-4">
					<div>
						<h1 className="text-xl text-slate-700">How to solve the Rubik's Cube</h1>
						<h2 className="text-lg text-slate-400">By CubeDesk</h2>
					</div>
					<div>
						<Button primary large text="Next Step" icon={<ArrowRight />} to="/timer" />
					</div>
				</div>
				<div className="flex w-full flex-row gap-8">
					<div className="w-60">
						<HTSNav />
					</div>
					<div className="grow rounded-xl bg-slate-50 p-10">
						<HTSContent />
					</div>
				</div>
			</div>
		</div>
	);
}
