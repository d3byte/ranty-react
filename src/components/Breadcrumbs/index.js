import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'semantic-ui-react';
import './assets/style/style.scss';

export default class Breadcrumbs extends Component {
	state = {
		breadcrumbs: [],
	}

	handleBreadcrumbs = () => {
		const { pathname, names } = this.props;
		const splittedPathname = pathname.split('/').slice(1);
		const breadcrumbs = splittedPathname.map((item, index) => {
			return {
				name: names[index],
				pathname: `/${splittedPathname.slice(0, index + 1).join('/')}`
			}
		});
		this.setState({ breadcrumbs });
	}

	componentDidMount = () => {
		this.handleBreadcrumbs();
	}
	
  render() {
		const { breadcrumbs } = this.state;
		return (
			<Breadcrumb>
				{
					breadcrumbs.map((item, index) => (
						<span key={index}>
							<Breadcrumb.Section link>
								<Link to={item.pathname}>{item.name}</Link>
							</Breadcrumb.Section>
							{
								index !== breadcrumbs.length - 1 && <Breadcrumb.Divider icon='right angle' />
							}
						</span>
					))
				}
			</Breadcrumb>
		)
  }
}
