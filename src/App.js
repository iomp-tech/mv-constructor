import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { PreloaderPage } from './components/';

const GoodsPage = React.lazy(() => import('./page/GoodsPage'));
const GoodsEdit = React.lazy(() => import('./page/GoodsEdit'));

const TimetablePage = React.lazy(() => import('./page/TimetablePage'));
const TimetableEdit = React.lazy(() => import('./page/TimetableEdit'));

const Login = React.lazy(() => import('./page/Login'));
const Logout = React.lazy(() => import('./page/Logout'));

const App = () => {
	return (
		<div className="wrapper">
			<Suspense fallback={<PreloaderPage />}>
				<Switch>
					<Route path="/goods" render={() => <GoodsPage />} exact />
					<Route path="/goods/:id" render={(props) => <GoodsEdit {...props} />} exact />

					<Route path="/timetable" render={() => <TimetablePage />} exact />
					<Route path="/timetable/:id" render={(props) => <TimetableEdit {...props} />} exact />

					<Route path="/login" render={() => <Login />} exact />
					<Route path="/logout" render={() => <Logout />} exact />
				</Switch>
			</Suspense>
		</div>
	);
}

export default App;
