import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './assets/style/style.scss';

import logo from '../../assets/img/logo.png';
import applications from './assets/img/applications.svg';
import finance from './assets/img/finance.svg';
import main from './assets/img/main.svg';
import zhku from './assets/img/zhku.svg';
import management from './assets/img/management.svg';

export default class SideMenu extends Component {
  render() {
		return (
			<aside className="side-menu">
				<header className="side-menu__header">
					<img src={logo} className="side-menu__header__logo" alt="logo" />
				</header>
				<ul className="side-menu__menu">
					<li className="side-menu__menu__item">
						<Link to="/main" className="side-menu__menu__item__link">
							Главная
							<img src={main} className="side-menu__menu__item__link__icon" alt="icon" />
						</Link>
					</li>
					<li className="side-menu__menu__item side-menu__menu__item--active">
						<Link to="/management" className="side-menu__menu__item__link">
							Управление
							<img src={management} className="side-menu__menu__item__link__icon" alt="icon" />
						</Link>
					</li>
					<li className="side-menu__menu__item">
						<Link to="/finance" className="side-menu__menu__item__link">
							Финансы
							<img src={finance} className="side-menu__menu__item__link__icon" alt="icon" />
						</Link>
					</li>
					<li className="side-menu__menu__item">
						<Link to="/zhku" className="side-menu__menu__item__link">
							ЖКУ
							<img src={zhku} className="side-menu__menu__item__link__icon" alt="icon" />
						</Link>
					</li>
					<li className="side-menu__menu__item">
						<Link to="/applicatons" className="side-menu__menu__item__link">
							Заявки
							<img src={applications} className="side-menu__menu__item__link__icon" alt="icon" />
						</Link>
					</li>
				</ul>
			</aside>
		)
  }
}
