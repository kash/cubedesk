import React from 'react';
import HTSNav from './hts_nav/HTSNav';
import HTSContent from './hts_content/HTSContent';
import Button from '../../common/button/Button';

export default function HTSLearn() {
	return (
		<div className="px-10">
			<div className="max-w-screen-xl mx-auto py-20">
				<div className="w-full mb-6 border-slate-200 border-solid border-b-4 pb-4 flex flex-row justify-between items-end">
					<div>
						<h1 className="text-xl text-slate-700">How to solve the Rubik's Cube</h1>
						<h2 className="text-lg text-slate-400">By CubeDesk</h2>
					</div>
					<div>
						<Button
							primary
							large
							text="Next Step"
							icon="ph-arrow-right"
							to="/timer"
						/>
					</div>
				</div>
				<div className="w-full flex flex-row gap-8">
					<div className="w-60">
						<HTSNav />
					</div>
					<div className="grow bg-slate-50 p-10 rounded-xl">
						<HTSContent />
					</div>
				</div>
			</div>
		</div>
	);
}
