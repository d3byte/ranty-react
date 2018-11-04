import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react';
import './assets/style/style.scss';

import { SideMenu } from '../';

/* eslint-disable */
import msg from './assets/img/msg.svg';
import msgNew from './assets/img/msg--new.svg';
import notif from './assets/img/notif.svg';
import notifNew from './assets/img/notif--new.svg';
/* eslint-enable */
export default class Layout extends Component {
  render() {
	return (
	  <section className={`desktop-layout ${this.props.className}`}>
			<SideMenu />
			<main className="desktop-layout__content">
				<header className="desktop-layout__content__header">
					<div className="desktop-layout__content__header__info">
						<h3 className="desktop-layout__content__header__info__title">Кирилл Велимиров</h3>
						<img src={msgNew} className="desktop-layout__content__header__info__icon" alt="icon" />
						<img src={notifNew} className="desktop-layout__content__header__info__icon" alt="icon" />
						<div className="desktop-layout__content__header__info__page-name">
							{this.props.pageName}
						</div>
					</div>
					<Dropdown text="Добавить" icon="add" direction="left" floating labeled button className="icon desktop-layout__content__header__action">
						<Dropdown.Menu>
							<Dropdown.Header icon="hand point down" content="Выберите, что добавить" />
							<Dropdown.Divider />
							<Dropdown.Item icon="wheelchair" text="Объект" />
						</Dropdown.Menu>
					</Dropdown>
				</header>
				{this.props.children}
			</main>
	  </section>
	)
  }
}
