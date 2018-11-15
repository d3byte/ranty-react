import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './assets/style/main.scss';
import 'semantic-ui-css/semantic.min.css';

import { Management } from './pages';

class App extends Component {
	render() {
		return (
			<Router>
				<>
					{/* Change path to "/management" */}
					<Route path="/" exact render={props => (
						<Management {...props} names={['Управление']} />
					)} />
					<Route path="/management" exact render={props => (
						<Management {...props} names={['Управление']} />
					)} />
					<Route path="/management/create-unit" render={props => (
						<Management {...props} names={['Управление', 'Создать объект']} />
					)} />
				</>
			</Router>
		);
	}
}

export default App;
