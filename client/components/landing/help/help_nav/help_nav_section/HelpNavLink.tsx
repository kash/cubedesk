import React from 'react';
import './HelpNavLink.scss';
import block from '../../../../../styles/bem';
import {Link} from 'react-router-dom';
import {toggleHelpOpenCategory} from '../../../../../actions/help';
import {useDispatch, useSelector} from 'react-redux';
import {ArticlePage} from '../../../../../@types/generated/graphql';
const b = block('help-nav-link');

interface Props {
	id: string;
	slug: string;
	path: string;
	title: string;
	children?: React.ReactNode;
}

export default function HelpNavLink(props: Props) {
	const {path, title, children, id} = props;

	const dispatch = useDispatch();

	const {openCategory} = useSelector((state: any) => state.help);
	const selectedHelpPage: ArticlePage = useSelector((state: any) => state.help.selectedHelpPage);

	const selectedCategory = openCategory === id;
	const selectedPage = selectedHelpPage?.id === id;
	const open = selectedCategory || selectedPage || selectedHelpPage?.parentDoc === id;
	const isCategory = !path;

	function toggleLinkOpen() {
		let newId = id;
		if (selectedCategory) {
			newId = null;
		}

		dispatch(toggleHelpOpenCategory(newId));
	}

	const hasChildren = !!children;
	let arrowIcon = <i className={open ? 'ph-caret-down-fill' : 'ph-caret-right-fill'} />;
	if (!hasChildren) {
		arrowIcon = null;
	}

	let link = (
		<Link className={b('link').mix(b('page', {selected: selectedPage}))} to={`/help${path}`}>
			<span>{title}</span>
		</Link>
	);

	// Is category, not article
	if (isCategory) {
		link = (
			<div
				className={b('link').mix(
					b('category', {
						selected: selectedCategory,
					})
				)}
			>
				<span>{title}</span>
			</div>
		);
	}

	let body = null;
	if (children) {
		body = <div className={b('body')}>{children}</div>;
	}

	return (
		<div className={b({hasChildren, open: open || isCategory, page: !isCategory, category: isCategory})}>
			{link}
			{body}
		</div>
	);
}
