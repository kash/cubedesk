import React from 'react';
import './FeatureGrid.scss';
import block from '../../../../styles/bem';

const b = block('landing-feature-grid');

interface GridItem {
	title: string;
	description: string;
	iconColor?: string;
	icon?: JSX.Element;
	imgSrc: string;
	imgAlt: string;
}

interface Props {
	gridItems: GridItem[];
}

export default function FeatureGrid(props: Props) {
	const {gridItems} = props;

	const rows = [];
	for (let i = 0; i < gridItems.length; i++) {
		const item = gridItems[i];
		const odd = i % 2 !== 0;

		let iconSpan = null;
		if (item.icon) {
			iconSpan = (
				<span
					style={{
						color: item.iconColor,
					}}
				>
					{item.icon}
				</span>
			);
		}

		rows.push(
			<div key={`${item.title}`} className={b('item', {odd})}>
				<div className={b('text')}>
					{iconSpan}
					<h4>{item.title}</h4>
					<p>{item.description}</p>
				</div>
				<div className={b('img')}>
					<img src={item.imgSrc} alt={item.imgAlt} />
				</div>
			</div>
		);
	}

	return <div className={b()}>{rows}</div>;
}
