import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import About from './components/About';
import NavBar from './components/NavBar';

import './styles/app.css';

const App = () => (
	<BrowserRouter>
		<div>
			<NavBar />
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route path="/about" component={About} />
			</Switch>
		</div>
	</BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('origin'));
