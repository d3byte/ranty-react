import React, { Component } from 'react'
import './assets/style/style.scss';

import { SideMenu } from '../';

export default class Layout extends Component {
  render() {
	return (
	  <section className={`desktop-layout ${this.props.className}`}>
			<SideMenu />
			<main className="desktop-layout__content">
				
			</main>
	  </section>
	)
  }
}
