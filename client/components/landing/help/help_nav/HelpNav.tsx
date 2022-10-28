import React, {useEffect, useMemo} from 'react';
import './HelpNav.scss';
import block from '../../../../styles/bem';
import {gql} from '@apollo/client/core';
import {ArticleCategory, ArticlePreview} from '../../../../@types/generated/graphql';
import {ARTICLE_CATEGORY_FRAGMENT} from '../../../../util/graphql/fragments';
import HelpNavLink from './help_nav_section/HelpNavLink';
import {gqlQuery} from '../../../api';
import {setSsrValue} from '../../../../actions/ssr';
import {useSsr} from '../../../../util/hooks/useSsr';

const b = block('help-nav');

async function getHelpNav(): Promise<ArticleCategory[]> {
	const query = gql`
        ${ARTICLE_CATEGORY_FRAGMENT}
        query Query {
            helpCategories {
                ...ArticleCategoryFragment
            }
        }
	`;

	const result = await gqlQuery<{helpCategories: ArticleCategory[]}>(query);
	return result.data.helpCategories;
}

export async function prefetchHelpNavData(store, req) {
	const helpNavData = await getHelpNav();
	store.dispatch(setSsrValue("helpNav", helpNavData));
}

export default function HelpNav() {
	const [ssrHelpNav, setSsrHelpNav] = useSsr<ArticleCategory[]>("helpNav");

	useEffect(() => {
		if (ssrHelpNav) {
			return;
		}

		getHelpNav().then((nav) => {
			setSsrHelpNav(nav);
		});
	}, []);

	const body = useMemo(() => {
		if (!ssrHelpNav) {
			return null;
		}

		function articlesUlComponent(list: (ArticlePreview | ArticleCategory)[]) {
			if (!list || !list.length) {
				return null;
			}

			const li = [];
			for (const art of list) {
				const children = art?.children?.length ? articlesUlComponent(art.children) : null;

				const id = (art as any).id || (art as any)._id;

				li.push(
					<HelpNavLink path={(art as any)?.path} key={id} id={id} slug={art.slug} title={art.title}>
						{children}
					</HelpNavLink>
				);
			}

			return li;
		}

		return articlesUlComponent(ssrHelpNav);
	}, [ssrHelpNav]);

	if (!ssrHelpNav) {
		return null;
	}

	return <div className={b()}>{body}</div>;
}
