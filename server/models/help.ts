import {
	getAllReadMeCategoriesWithArticles,
	getReadMeArticle,
} from '../services/readme';

export async function getHelpNavTree() {
	return await getAllReadMeCategoriesWithArticles();
}

export async function getHelpArticle(slug: string) {
	return await getReadMeArticle(slug);
}
