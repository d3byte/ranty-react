import React, { Component } from 'react'
import { Button, Modal, Form, Input, Icon, Dropdown, Tab} from 'semantic-ui-react';
import './assets/style/style.scss';

import { Layout, Container } from '../../components';

import attachment from './assets/img/attachment.svg';

const panes = [
	{ menuItem: 'Помещение' },
	{ menuItem: 'Лиды' },
  ]

export default class Edit extends Component {
	state = {
		isModalOpen: false,
		name: '',
		activePane: 0
	}

	closeModal = () => {
		this.setState({ isModalOpen: false });
	}

	openModal = () => {
		this.setState({ isModalOpen: true });
	}

	onTabChange = (e, data) => {
		this.setState({ activePane: data.activeIndex });
	}

	collapse = id => {
		const { isCollapsed } = this.state;
		if (isCollapsed === id) {
			this.setState({ isCollapsed: null });
			return;
		}
		this.setState({ isCollapsed: id });
	}

	render() {
		return (
			<Layout
				className="edit"
				names={this.props.names}
				pathname={this.props.location.pathname}
				history={this.props.history}
			>
				<Tab onTabChange={this.onTabChange} panes={panes} />
				<div className="wrapper">
					<main className="edit__form">
						{this.state.activePane === 0 ? (
							<React.Fragment>
								<header className="edit__form__header row row--justify-space-between"> 
									<p className="edit__text edit__text--lighten">Тип помещения: <span className="edit__text edit__text--black"><b>офис</b></span></p>
									<p className="edit__text edit__text--lighten hover">редактировать <Icon name="ellipsis vertical" /></p>
								</header>
								<div className="edit__form__info">
									<div className="form-field">
										<p className="form-field__label">Юридический адрес:</p>
										<Input className="form-field__input" placeholder="г.Москва ул.Тверская д.30" />
									</div>
									<div className="row row--half-splitted">
										<div className="form-field">
											<p className="form-field__label">Площадь от:</p>
											<Input className="form-field__input" placeholder="10м2" />
										</div>
										<div className="form-field">
											<p className="form-field__label">Планировка:</p>
											<Dropdown className="form-field__input" selection options={[]} />
										</div>
									</div>
									<div className="row row--half-splitted">
										<div className="form-field">
											<p className="form-field__label">Этаж:</p>
											<Input className="form-field__input" placeholder="17" />
										</div>
										<div className="form-field">
											<p className="form-field__label">Парковка:</p>
											<Dropdown className="form-field__input" selection options={[]} />
										</div>
									</div>
									<div className="row row--half-splitted">
										<div className="form-field">
											<p className="form-field__label">Количество этажей в здании:</p>
											<Input className="form-field__input" placeholder="17" />
										</div>
										<div className="form-field">
											<p className="form-field__label">Класс:</p>
											<Dropdown className="form-field__input" selection options={[]} />
										</div>
									</div>
									<div className="row row--half-splitted">
										<div className="form-field">
											<p className="form-field__label">Мебель</p>
											<Input className="form-field__input" placeholder="есть" />
										</div>
										<div className="form-field">
											<p className="form-field__label">Тип:</p>
											<Dropdown className="form-field__input" selection options={[]} />
										</div>
									</div>
									<div className="row row--half-splitted">
										<div className="form-field">
											<p className="form-field__label">Высота потолков, м:</p>
											<Input className="form-field__input" placeholder="3м" />
										</div>
										<div className="form-field">
											<p className="form-field__label">Вентиляция:</p>
											<Dropdown className="form-field__input" selection options={[]} />
										</div>
									</div>
									<div className="row row--half-splitted">
										<div className="form-field">
											<p className="form-field__label">Управляющая компания:</p>
											<Input className="form-field__input" placeholder='OOO "Компот"' />
										</div>
										<div className="form-field">
											<p className="form-field__label">Кондиционирование:</p>
											<Dropdown className="form-field__input" selection options={[]} />
										</div>
									</div>
									<div className="row row--half-splitted">
										<div>
											<span></span>
										</div>
										<div className="form-field">
											<p className="form-field__label">Система пожаротушения:</p>
											<Dropdown className="form-field__input" selection options={[]} />
										</div>
									</div>
									<div className="row row--half-splitted">
										<div>
											<span></span>
										</div>
										<div className="form-field">
											<p className="form-field__label">Вход:</p>
											<Dropdown className="form-field__input" selection options={[]} />
										</div>
									</div>
									<div className="row row--half-splitted">
										<div>
											<span></span>
										</div>
										<div className="form-field form-field--no-margin">
											<p className="form-field__label">Состояние:</p>
											<Dropdown className="form-field__input" selection options={[]} />
										</div>
									</div>
								</div>
								<hr />
								<div className="edit__form__pay">
									<div className="row row--half-splitted">
										<div className="form-field">
											<p className="form-field__label">Цена:</p>
											<Input className="form-field__input" placeholder="80 000 Р" />
										</div>
										<div className="form-field">
											<p className="form-field__label">Тип цены:</p>
											<Dropdown className="form-field__input" selection options={[]} />
										</div>
									</div>
									<div className="row row--half-splitted">
										<div className="form-field">
											<p className="form-field__label">Арендные каникулы:</p>
											<Input className="form-field__input" placeholder="1 месяц" />
										</div>
										<div className="form-field">
											<p className="form-field__label">Налогообложение:</p>
											<Dropdown className="form-field__input" selection options={[]} />
										</div>
									</div>
									<div className="row row--half-splitted">
										<div className="form-field">
											<p className="form-field__label">Обеспечительный платеж:</p>
											<Input className="form-field__input" placeholder="10 000" />
										</div>
										<div className="form-field">
											<p className="form-field__label">Тип аренды:</p>
											<Dropdown className="form-field__input" selection options={[]} />
										</div>
									</div>
									<div className="row row--half-splitted">
										<div>
											<span></span>
										</div>
										<div className="form-field">
											<p className="form-field__label">Срок аренды:</p>
											<Dropdown className="form-field__input" selection options={[]} />
										</div>
									</div>
									<div className="row row--half-splitted">
										<div>
											<span></span>
										</div>
										<div className="form-field">
											<p className="form-field__label">Включено в ставку:</p>
											<Dropdown className="form-field__input" selection options={[]} />
										</div>
									</div>
									<div className="row row--half-splitted">
										<div>
											<span></span>
										</div>
										<div className="form-field">
											<p className="form-field__label">Срок аренды:</p>
											<Dropdown className="form-field__input" selection options={[]} />
										</div>
									</div>
								</div>
								<footer className="edit__form__footer">
									<Button className="create-unit__button create-unit__button--centered" icon labelPosition='left'>
										<Icon name='add' />
										Добавить свидетельство о собственности
									</Button>
								</footer>
								<Modal size="mini" open={this.state.isModalOpen} onClose={this.closeModal}>
									<Container dark title="Добавление вложения">
										<Dropdown fluid placeholder='Договор аренды' selection options={[]} />
										<Input placeholder="Название договора" onChange={e => this.setState({ name: e.target.value })} />
										<Button onClick={this.submit} className="edit__button edit__button--orange edit__button--centered">
											Создать
										</Button>
									</Container>
								</Modal>
							</React.Fragment>
						) : ''}
					</main>
					<aside className="edit__info">
						<h2 className="edit__info__title">ООО Плюс</h2>
						<footer className="edit__info__properties">
							<div className="edit__info__properties__item">
								<p className="">Цена</p>
								<p className="">100 000</p>
							</div>
							<div className="edit__info__properties__item">
								<p className="">Срок действия</p>
								<p className="">11-01-2022</p>
							</div>
							<div className="edit__info__properties__item">
								<p className="">Баланс</p>
								<p className="">80 000</p>
							</div>
						</footer>
					</aside>
				</div>
			</Layout>
		)
	}
}
