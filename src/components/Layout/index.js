import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react';
import './assets/style/style.scss';

import { SideMenu, Breadcrumbs } from '../';

/* eslint-disable */
import msg from './assets/img/msg.svg';
import msgNew from './assets/img/msg--new.svg';
import notif from './assets/img/notif.svg';
import notifNew from './assets/img/notif--new.svg';
import settings from './assets/img/settings.svg';
import logout from './assets/img/logout.svg';
/* eslint-enable */
export default class Layout extends Component {
	navTo = pathname => {
		this.props.history.push(pathname)
	}

  render() {
		return (
			<section className="desktop-layout">
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
								<Dropdown.Item onClick={e => this.navTo('/management/create-unit')} icon="home" text="Объект" />
								<Dropdown.Item onClick={e => this.navTo('/management/add-room')} icon="building" text="Помещение" />
								<Dropdown.Item onClick={e => this.navTo('/management/add-lead')} icon="user" text="Лид" />
							</Dropdown.Menu>
						</Dropdown>
						<div className="desktop-layout__content__header__info__page-name desktop-layout__content__header__info__page-name--row">
							<div className="row">
								<img src={settings} className="desktop-layout__content__header__info__icon" alt="settings" />
								<img src={logout} className="desktop-layout__content__header__info__icon" alt="logout" />
							</div>
						</div>
					</header>
					<Breadcrumbs
						names={this.props.names}
						pathname={this.props.pathname}
						history={this.props.history}
					/>
					<div className={`desktop-layout__content__children ${this.props.className}`}>
						{this.props.children}
					</div>
				</main>
			</section>
		)
  }
}
