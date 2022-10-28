import {ArticlePage} from '../@types/generated/graphql';

export function toggleHelpOpenCategory(id: string) {
	return {
		type: 'TOGGLE_HELP_OPEN_CATEGORY',
		payload: {
			id
		},
	};
}

export function setHelpPage(page: ArticlePage) {
	return {
		type: 'SET_HELP_PAGE',
		payload: {
			page,
		},
	};
}
