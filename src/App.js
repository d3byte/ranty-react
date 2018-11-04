import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './assets/style/main.scss';
import 'semantic-ui-css/semantic.min.css';

import { Management } from './pages';

class App extends Component {
	render() {
		return (
			<Router>
				<Route path="/management" component={Management} />
			</Router>
		);
	}
}

export default App;
