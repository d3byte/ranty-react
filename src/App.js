import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './assets/style/main.scss';
import 'semantic-ui-css/semantic.min.css';

import { Management, CreateUnit, AddLead, AddRoom } from './pages';

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
						<CreateUnit {...props} names={['Управление', 'Создать объект']} />
					)} />
					<Route path="/management/add-lead" render={props => (
						<AddLead {...props} names={['Управление', 'Создать объект']} />
					)} />
					<Route path="/management/add-room" render={props => (
						<AddRoom {...props} names={['Управление', 'Создать объект']} />
					)} />
				</>
			</Router>
		);
	}
}

export default App;
