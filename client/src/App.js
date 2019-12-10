import React, { lazy, Suspense } from 'react';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import {
	Route,
	BrowserRouter as Router,
	// HashRouter,
	Switch
} from 'react-router-dom';
import './global.scss';
import { Message, RotatingIcon } from './library';

const cache = new InMemoryCache();

const client = new ApolloClient({
	cache,
	link: new HttpLink({
		uri:
			process.env.NODE_ENV === 'production'
				? 'http://35.242.216.142/api'
				: 'http://localhost:4000/api'
	})
});

const WelcomeComponent = lazy(() =>
	import('./components/Welcome/Welcome')
);

const UserListComponent = lazy(() =>
	import('./components/UserList/UserList')
);

const NoMatch = () => {
	return (
		<Message
			Title="Not Found"
			description="Could not find a matching page"
			className="negative"
		/>
	);
};

const UserComponent = lazy(() => import('./components/User/User'));

console.log('testa');

const App = () => (
	<ApolloProvider client={client}>
		<Router>
			<Suspense
				fallback={
					<RotatingIcon
						name="icon-spinner2"
						fontSize={300}
					/>
				}
			>
				<Switch>
					<Route
						path="/users"
						component={UserListComponent}
					/>
					<Route
						path="/:linkFirstName/:linkLastName/info"
						component={UserComponent}
					/>
					<Route path="/" component={WelcomeComponent} />
					<Route component={NoMatch} />
				</Switch>
			</Suspense>
		</Router>
	</ApolloProvider>
);

export default App;
