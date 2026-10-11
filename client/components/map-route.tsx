import {PageContext, routes} from '@/components/layout/Routes';
import React from 'react';
import {
	generatePath,
	matchPath,
	Redirect,
	Route,
	RouteComponentProps,
	useLocation,
} from 'react-router-dom';

function renderPage(page: PageContext, routeProps: RouteComponentProps) {
	const {grandparent: GrandParent, parent: Parent, child: Child} = page;
	const passProps = {...routeProps, ...page};

	if (GrandParent) {
		return (
			<GrandParent {...passProps}>
				<Parent key={page.path} {...passProps}>
					{Child ? <Child {...passProps} /> : null}
				</Parent>
			</GrandParent>
		);
	}

	return (
		<Parent {...passProps}>{Child ? <Child key={page.path} {...passProps} /> : null}</Parent>
	);
}

export function PageRoutes() {
	const location = useLocation();

	for (const route of routes) {
		const match = matchPath(location.pathname, {path: route.path, exact: true});
		if (!match) {
			continue;
		}

		if ('redirect' in route) {
			return <Redirect to={generatePath(route.redirect, match.params)} />;
		}

		return <Route path={route.path} exact render={(props) => renderPage(route, props)} />;
	}

	return null;
}
