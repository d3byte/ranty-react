import React, { Component } from 'react'
import { Progress } from 'semantic-ui-react';
import './assets/style/style.scss';

import { Layout, Container } from '../../components';

import attachment from './assets/img/attachment.svg';

export default class Unit extends Component {
	state = {
	}

	render() {
		return (
			<Layout
				className="unit"
				names={this.props.names}
				pathname={this.props.location.pathname}
				history={this.props.history}
			>
				<main className="unit__status">
					<header className="unit__status__header"> 
						<h3 className="unit__status__header__title">OOO "Икар Девелопмент"</h3>
						<div className="row row--justify-space-between">
							<p className="unit__text unit__text--lighten">24 августа 2018 – 24 августа 2019</p>
							<p className="unit__text hover">Перезаключить договор</p>
						</div>
						<Progress percent={60} />
					</header>
					<div className="unit__status__main">
						<div className="flat-container unit__status__main__contacts">
							<h2 className="flat-container__title">Контакты</h2>
							<div className="row row--half-splitted">
								<p className="unit__text unit__text--lighten">
									Имя
								</p>
								<p className="unit__text">
									Иван Тихонов
								</p>
							</div>
							<div className="row row--half-splitted">
								<p className="unit__text unit__text--lighten">
									Телефон
								</p>
								<p className="unit__text">
									+7 965 248-50-48
								</p>
							</div>
							<div className="row row--half-splitted">
								<p className="unit__text unit__text--lighten">
									Email
								</p>
								<p className="unit__text">
									ivan@mail.com
								</p>
							</div>
						</div>
						<div className="flat-container">
							<h2 className="flat-container__title">Коммерческие условия</h2>
							<div className="row row--justify-space-between">
								<div className="unit__status__main__condition">
									<p className="unit__text">
										Оплата арендной платы
									</p>
									<p className="unit__text">
										Не позднее 5-го числа месяца
									</p>
								</div>
								<div className="unit__status__main__condition">
									<p className="unit__text">
										Оплата переменных платежей
									</p>
									<p className="unit__text">
										Не позднее 3 дней с выставления счета
									</p>
								</div>
							</div>
						</div>
					</div>
					<footer className="unit__status__footer">
						<div className="row row--justify-space-between">
							<p className="unit__text">3 вложения</p>
							<p className="unit__text row--inline row--align-center hover">
								Загрузить вложение 
								<img src={attachment} alt="attachment" />
							</p>
						</div>
						<p className="unit__text unit__text--lighten">Договор А1</p>
					</footer>
				</main>
				<aside></aside>
			</Layout>
		)
	}
}
