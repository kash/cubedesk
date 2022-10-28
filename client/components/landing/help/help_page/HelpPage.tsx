import React, {useEffect} from 'react';
import './HelpPage.scss';
import ContentLoader from 'react-content-loader';
import block from '../../../../styles/bem';
import {gql} from '@apollo/client';
import {ARTICLE_PAGE_FRAGMENT} from '../../../../util/graphql/fragments';
import {ArticlePage} from '../../../../@types/generated/graphql';
import {gqlQuery} from '../../../api';
import {setSsrValue} from '../../../../actions/ssr';
import {useSsr} from '../../../../util/hooks/useSsr';
import {useRouteMatch} from 'react-router-dom';
import {setHelpPage} from '../../../../actions/help';
import {useDispatch} from 'react-redux';
import Markdoc from '@markdoc/markdoc';

const b = block('help-page');

async function getHelpPage(slug: string): Promise<ArticlePage> {
	const query = gql`
		${ARTICLE_PAGE_FRAGMENT}

		query Query($slug: String) {
			helpArticle(slug: $slug) {
				...ArticlePageFragment
			}
		}
	`;

	const result = await gqlQuery<{helpArticle: ArticlePage}>(query, {
		slug,
	});

	return result.data.helpArticle;
}

export async function prefetchHelpPageData(store, req) {
	const slug = req.params.slug2 || req.params.slug;

	const helpPageData = await getHelpPage(slug);
	store.dispatch(setHelpPage(helpPageData));
	store.dispatch(setSsrValue(helpPageData.slug, helpPageData));
}

export default function HelpPage() {
	const dispatch = useDispatch();
	const match = useRouteMatch() as any;

	const slug = match.params.slug2 || match.params.slug;
	const [ssrArticle, setSsrArticle] = useSsr<ArticlePage>(slug);

	useEffect(() => {
		if (ssrArticle) {
			dispatch(setHelpPage(ssrArticle));
			return;
		}

		getHelpPage(slug).then((article) => {
			setSsrArticle(article);
			dispatch(setHelpPage(article));
		});
	}, [match.path, slug]);

	if (!ssrArticle) {
		return (
			<div className={b({loading: true})}>
				<ContentLoader width="100%" height="100%">
					<rect x="0" y="0" rx="4" ry="4" width="700" height="40px" />
					<rect x="0" y="50" rx="4" ry="4" width="600" height="28px" />

					<rect x="0" y="120" rx="4" ry="4" width="100%" height="20px" />
					<rect x="0" y="150" rx="4" ry="4" width="80%" height="20px" />
					<rect x="0" y="180" rx="4" ry="4" width="90%" height="20px" />
					<rect x="0" y="210" rx="4" ry="4" width="300px" height="20px" />
					<rect x="0" y="210" rx="4" ry="4" width="300px" height="20px" />

					<rect x="0" y="270" rx="4" ry="4" width="100%" height="20px" />
					<rect x="0" y="300" rx="4" ry="4" width="80%" height="20px" />
					<rect x="0" y="330" rx="4" ry="4" width="90%" height="20px" />
				</ContentLoader>
			</div>
		);
	}

	const ast = Markdoc.parse(ssrArticle.body);
	const content = Markdoc.transform(ast);
	const body = Markdoc.renderers.react(content, React);

	return (
		<div className={b()}>
			<div className={b('header')}>
				<h1>{ssrArticle.title}</h1>
			</div>
			<div className={b('body')}>
				{body}
				{/*<ReactMarkdown>{ssrArticle.body}</ReactMarkdown>*/}
			</div>
		</div>
	);
}
