import {Route} from 'react-router-dom';
import React from 'react';

export function mapSingleRoute(route) {
	route.exact = true;

	return (
		<Route
			key={route.path}
			{...route}
			render={(props) => {
				const Child = route.child;
				const Parent = route.parent;

				const passProps = {
					...props,
					...route,
				};

				if (route.grandparent) {
					const GrandParent = route.grandparent;

					return (
						<GrandParent {...passProps}>
							<Parent {...passProps}>{Child ? <Child {...passProps} /> : null}</Parent>
						</GrandParent>
					);
				}

				return <Parent {...passProps}>{Child ? <Child {...passProps} /> : null}</Parent>;
			}}
		/>
	);
}
