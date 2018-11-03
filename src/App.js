import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './assets/style/main.scss';

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
