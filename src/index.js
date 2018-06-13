import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import LandingPage from './components/Landing';
import AboutPage from './components/About';
import NavBar from './components/NavBar';
import store from './redux/store';

import './styles/app.css';

const App = () => (
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<NavBar />
				<Switch>
					<Route exact path="/" component={LandingPage} />
					<Route path="/about" component={AboutPage} />
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(<App />, document.getElementById('origin'));
