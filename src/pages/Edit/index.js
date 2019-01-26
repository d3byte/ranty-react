import React, { Component } from 'react'
import { Button, Checkbox, Modal, Input, Icon, Dropdown, Divider, Tab, Table} from 'semantic-ui-react';
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
		activePane: 0,
		open: false,
		dimmer: null,
		// preferences
		obespetPlatezh: false,
		payPeriod: false,
		peny: false,
		penalties: false,
		penaltyItems: [{}],
		violation: false,
		violationItems: [{}],
		notificationPeriod: false,
		subArenda: false,
		subArendaValue: 'yes',
		communPay: false,
		index: false,
		rentHolidays: false,
		rentHolidaysValue: '',

		attachShablon: true,

		energy: true,
		water: true,
		light: true,
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

	showModal = dimmer => () => this.setState({ dimmer, open: true })

  	closeModal = () => this.setState({ open: false })

	collapse = id => {
		const { isCollapsed } = this.state;
		if (isCollapsed === id) {
			this.setState({ isCollapsed: null });
			return;
		}
		this.setState({ isCollapsed: id });
	}

	showPreferences = () => this.setState({ isPreferencesShown: true });

	handleClick = (name, checked) => this.setState({ [name]: checked });

	addPenalty = () => {
		this.setState({ penaltyItems: [...this.state.penaltyItems, {}] });
	}

	addViolation = () => {
		this.setState({ violationItems: [...this.state.violationItems, {}] });
	}

	handleSubArendaChange = (e, { value }) => this.setState({ subArendaValue: value });
	
	render() {
		const { 
			dimmer, 
			open,
			obespetPlatezh,
			payPeriod,
			peny,
			penalties,
			violation,
			notificationPeriod,
			subArenda,
			communPay,
			index,
			rentHolidays,
		} = this.state;
		const showPreferencesOptions = obespetPlatezh || payPeriod || peny || penalties || violation || notificationPeriod || subArenda || communPay || index || rentHolidays;
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
						{this.state.activePane === 1 && (
							<Table padded>
								<Table.Header>
									<Table.Row>
										<Table.HeaderCell>ФИО/ Название организации</Table.HeaderCell>
										<Table.HeaderCell>Телефон</Table.HeaderCell>
										<Table.HeaderCell>Email</Table.HeaderCell>
										<Table.HeaderCell></Table.HeaderCell>
									</Table.Row>
								</Table.Header>
								<Table.Body>
									<Table.Row>
										<Table.Cell>ООО Dtotyrb</Table.Cell>
										<Table.Cell>+7 999 999 99 99</Table.Cell>
										<Table.Cell>rantrant@gmail.com</Table.Cell>
										<Table.Cell singleLine>
											<span>
												<span onClick={this.showModal('inverted')}><Icon name="clipboard outline" /> Создать КП</span> <Icon onClick={e => this.collapse(0)} name="dropdown" />
											</span>
										</Table.Cell>
									</Table.Row>
									{
										this.state.isCollapsed === 0 && (
											<Table.Row>
												<Table.Cell colspan="4">
													<main className="my-table">
														<h4>Отправленные коммерческие предложения</h4>
														<div className="my-table__row">
															<p>1. 10:00</p>
															<p>2019-02-09</p>
															<p>отклонено</p>
															<p>посмотреть</p>
														</div>
														<div className="my-table__row">
															<p>1. 11:34</p>
															<p>2019-08-09</p>
															<p>отклонено</p>
															<p>посмотреть</p>
														</div>
														<div className="my-table__row">
															<p>1. 10:30</p>
															<p>2019-15-09</p>
															<p>на рассмотрении</p>
															<p>посмотреть</p>
														</div>

													</main>
												</Table.Cell>
											</Table.Row>
										)
									}
									<Table.Row>
										<Table.Cell>ООО Dtotyrb</Table.Cell>
										<Table.Cell>+7 999 999 99 99</Table.Cell>
										<Table.Cell>rantrant@gmail.com</Table.Cell>
										<Table.Cell singleLine>
											<span onClick={e => this.collapse(1)}>
												<Icon name="clipboard outline" /> Создать КП <Icon name="dropdown" />
											</span>
										</Table.Cell>
									</Table.Row>
									{
										this.state.isCollapsed === 1 && (
											<Table.Row>
												<Table.Cell colspan="4">
													<main className="my-table">
														<h4>Отправленные коммерческие предложения</h4>
														<div className="my-table__row">
															<p>1. 10:00</p>
															<p>2019-02-09</p>
															<p>отклонено</p>
															<p>посмотреть</p>
														</div>
														<div className="my-table__row">
															<p>1. 11:34</p>
															<p>2019-08-09</p>
															<p>отклонено</p>
															<p>посмотреть</p>
														</div>
														<div className="my-table__row">
															<p>1. 10:30</p>
															<p>2019-15-09</p>
															<p>на рассмотрении</p>
															<p>посмотреть</p>
														</div>

													</main>
												</Table.Cell>
											</Table.Row>
										)
									}
									<Table.Row>
										<Table.Cell>ООО Dtotyrb</Table.Cell>
										<Table.Cell>+7 999 999 99 99</Table.Cell>
										<Table.Cell>rantrant@gmail.com</Table.Cell>
										<Table.Cell singleLine>
											<span onClick={e => this.collapse(2)}>
												<Icon name="clipboard outline" /> Создать КП <Icon name="dropdown" />
											</span>
										</Table.Cell>
									</Table.Row>
									{
										this.state.isCollapsed === 2 && (
											<Table.Row>
												<Table.Cell colspan="4">
													<main className="my-table">
														<h4>Отправленные коммерческие предложения</h4>
														<div className="my-table__row">
															<p>1. 10:00</p>
															<p>2019-02-09</p>
															<p>отклонено</p>
															<p>посмотреть</p>
														</div>
														<div className="my-table__row">
															<p>1. 11:34</p>
															<p>2019-08-09</p>
															<p>отклонено</p>
															<p>посмотреть</p>
														</div>
														<div className="my-table__row">
															<p>1. 10:30</p>
															<p>2019-15-09</p>
															<p>на рассмотрении</p>
															<p>посмотреть</p>
														</div>

													</main>
												</Table.Cell>
											</Table.Row>
										)
									}
								</Table.Body>
						</Table>
						)}
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

				<Modal className="ranty-modal" dimmer={dimmer} open={open} size="small" onClose={this.closeModal}>
					<Modal.Content className="ranty-modal__content">
						<h2 className="ranty-modal__content__title">Создание коммерческого предложения</h2>
						<p className="ranty-modal__content__sub-title">Данные лида</p>
						<p className="ranty-modal__content__text ranty-modal__content__text--lighten">Проверьте, пожалуйста, контактные данные перед отправкой коммерческого предложения</p>
						<form className="ranty-modal__content__form">
							<div className="row row--half-splitted">
								<div className="form-field form-field--required">
									<p className="form-field__label">Имя</p>
									<Input className="form-field__input" placeholder="Кристина" />
									<span className="form-field__asterisk">*</span>
								</div>
							</div>
							<div className="row row--half-splitted">
								<div className="form-field form-field--required">
									<p className="form-field__label">Фамилия</p>
									<Input className="form-field__input" placeholder="Иванова" />
									<span className="form-field__asterisk">*</span>
								</div>
							</div>
							<div className="row row--half-splitted">
								<div className="form-field form-field--required">
									<p className="form-field__label">Имя</p>
									<Input className="form-field__input" placeholder="+7 888 88 88" />
									<span className="form-field__asterisk">*</span>
								</div>
							</div>
							<div className="row row--half-splitted">
								<div className="form-field form-field--required">
									<p className="form-field__label">E-mail</p>
									<Input className="form-field__input" placeholder="ivanova@gmail.com" />
									<span className="form-field__asterisk">*</span>
								</div>
							</div>
						</form>
					</Modal.Content>
					<Divider className="divider" />
					<Modal.Content className="ranty-modal__content">
						<p className="ranty-modal__content__sub-title">Коммерческое предложение</p>
						<form className="ranty-modal__content__form">
							<div className="row row--half-splitted">
								<div className="form-field">
									<p className="form-field__label">Шаблон</p>
									<Dropdown className="form-field__input" selection options={[]} />
								</div>
							</div>
							<div className="row row--half-splitted">
								<div className="form-field">
									<p className="form-field__label">Аренда</p>
									<Input className="form-field__input" placeholder="70 000 р" />
								</div>
								<div className="form-field">
									<p className="form-field__label">Срок</p>
									<Input className="form-field__input" placeholder="11 мес" />
								</div>
							</div>
						</form>
					</Modal.Content>
					<Divider className="divider" />
					<Modal.Content className="ranty-modal__content">
						<div className="row row--justify-center">
							<Button onClick={this.showPreferences} className="create-unit__button create-unit__button--centered" icon labelPosition='left'>
								<Icon name='add' />
								Добавить
							</Button>
						</div>
						{
							this.state.isPreferencesShown && (
								<ul className="ranty-modal__content__preferences">
									<li className="ranty-modal__content__preferences__item">
										<Checkbox
											label="Обеспечительный платеж"
											checked={this.state.obespetPlatezh}
											onClick={(e, {checked}) => this.handleClick('obespetPlatezh', checked)}
										/>
									</li>
									<li className="ranty-modal__content__preferences__item">
										<Checkbox
											label="Срок оплаты"
											checked={this.state.payPeriod}
											onClick={(e, {checked}) => this.handleClick('payPeriod', checked)}
										/>
									</li>
									<li className="ranty-modal__content__preferences__item">
										<Checkbox
											label="Пени при просрочке оплаты"
											checked={this.state.peny}
											onClick={(e, {checked}) => this.handleClick('peny', checked)}
										/>
									</li>
									<li className="ranty-modal__content__preferences__item">
										<Checkbox
											label="Штрафы"
											checked={this.state.penalties}
											onClick={(e, {checked}) => this.handleClick('penalties', checked)}
										/>
									</li>
									<li className="ranty-modal__content__preferences__item">
										<Checkbox
											label="Нарушения для расторжения"
											checked={this.state.violation}
											onClick={(e, {checked}) => this.handleClick('violation', checked)}
										/>
									</li>
									<li className="ranty-modal__content__preferences__item">
										<Checkbox
											label="Срок уведомления для перезаключения договора"
											checked={this.state.notificationPeriod}
											onClick={(e, {checked}) => this.handleClick('notificationPeriod', checked)}
										/>
									</li>
									<li className="ranty-modal__content__preferences__item">
										<Checkbox
											label="Возможность сдавать в субаренду"
											checked={this.state.subArenda}
											onClick={(e, {checked}) => this.handleClick('subArenda', checked)}
										/>
									</li>
									<li className="ranty-modal__content__preferences__item">
										<Checkbox
											label="Коммунальные платежи"
											checked={this.state.communPay}
											onClick={(e, {checked}) => this.handleClick('communPay', checked)}
										/>
									</li>
									<li className="ranty-modal__content__preferences__item">
										<Checkbox
											label="Индексация"
											checked={this.state.index}
											onClick={(e, {checked}) => this.handleClick('index', checked)}
										/>
									</li>
									<li className="ranty-modal__content__preferences__item">
										<Checkbox
											label="Арендные каникулы"
											checked={this.state.rentHolidays}
											onClick={(e, {checked}) => this.handleClick('rentHolidays', checked)}
										/>
									</li>
								</ul>
							)
						}
					</Modal.Content>
					{
						showPreferencesOptions && (
							<React.Fragment>
								<Divider className="divider" />
								<Modal.Content className="ranty-modal__content">
									{
										this.state.obespetPlatezh && (
											<div className="form-field form-field--obespet-platezh">
												<p className="form-field__label">Обеспечительный платеж:</p>
												<div className="inputs">
													<div className="row row--justify-space-between">
														<Input className="form-field__input" placeholder="–" />
														<Input className="form-field__input" placeholder="–" />
														<Input className="form-field__input" placeholder="–" />
														<Input className="form-field__input" placeholder="–" />
														<Input className="form-field__input" placeholder="–" />
														<Input className="form-field__input" placeholder="–" />
													</div>
													<div className="row row--justify-space-between">
														<Input className="form-field__input" placeholder="–" />
														<Input className="form-field__input" placeholder="–" />
														<Input className="form-field__input" placeholder="–" />
														<Input className="form-field__input" placeholder="–" />
														<Input className="form-field__input" placeholder="–" />
														<Input className="form-field__input" placeholder="–" />
													</div>
												</div>
											</div>
										)
									}
									{
										this.state.payPeriod && (
											<div className="row row--align-center pay-period">
												<div className="form-field">
													<p className="form-field__label">Срок оплаты</p>
													<Input className="form-field__input" placeholder="12.07.2019" />
													<Dropdown className="form-field__input form-field__input--highlight" placeholder="Текущий период" selection options={[]} />
												</div>
												<div className="form-field">
												</div>
											</div>
										)
									}
									{
										this.state.peny && (
											<div className="form-field peny">
												<p className="form-field__label">Пени</p>
												<Input className="form-field__input" placeholder="0,5" />
												<p className="form-field__text">% / день просрочки</p>
											</div>
										)
									}
									{
										this.state.penalties && (
											<div className="row penalty">
												<div className="form-field peny">
													<p className="form-field__label">Штрафы</p>
												</div>
												<ul className="penalty__list">
													{
														this.state.penaltyItems.map((item, index) => (
															<li key={index} className="penalty__list__item">
																<div className="form-field">
																	<Input className="form-field__input" placeholder="Причина" />
																	<Input className="form-field__input" placeholder="Цена" />
																</div>
																{index === this.state.penaltyItems.length - 1 && (
																	<div className="penalty__list__item__button" onClick={this.addPenalty}>
																		<Icon className="penalty__list__item__button__icon" name='add' />
																	</div>
																)}
															</li>
														))
													}
												</ul>
											</div>
										)
									}
									{
										this.state.violation && (
											<div className="row violation">
												<div className="form-field">
													<p className="form-field__label">Нарушения для расторжения</p>
												</div>
												<ul className="penalty__list">
													{
														this.state.violationItems.map((item, index) => (
															<li key={index} className="penalty__list__item">
																<div className="form-field">
																	<Input className="form-field__input" placeholder="Причина" />
																</div>
																{index === this.state.violationItems.length - 1 && (
																	<div className="penalty__list__item__button" onClick={this.addViolation}>
																		<Icon className="penalty__list__item__button__icon" name='add' />
																	</div>
																)}
															</li>
														))
													}
												</ul>
											</div>
										)
									}
									{
										this.state.notificationPeriod && (
											<div className="row row--align-center notification-period">
												<div className="form-field">
													<p className="form-field__label">Срок уведомления для перезаключения договора</p>
													<Dropdown style={{ width: 150 }} className="form-field__input form-field__input--highlight" placeholder="Число-Месяц" selection options={[]} />
													<Input className="form-field__input" placeholder="1" />
												</div>
											</div>
										)
									}
									{
										this.state.subArenda && (
											<React.Fragment>
												<div className="row sub-arenda">
													<div className="form-field">
														<p className="form-field__label">Субаренда</p>
													</div>
													<div className="checkboxes">
														<Checkbox
															radio
															label='Да'
															name='subarenda'
															value='yes'
															checked={this.state.subArendaValue === 'yes'}
															onChange={this.handleSubArendaChange}
															className="checkboxes__checkbox"
														/>
														<Checkbox
															radio
															label='Нет'
															name='subarenda'
															value='no'
															checked={this.state.subArendaValue === 'no'}
															onChange={this.handleSubArendaChange}
															className="checkboxes__checkbox"
														/>
													</div>
												</div>
												<Checkbox
													className="ranty-modal__content__checkbox"
													label="Прикрепить шаблон договора аренды"
													checked={this.state.attachShablon}
													onClick={(e, {checked}) => this.handleClick('attachShablon', checked)}
												/>
											</React.Fragment>
										)
									}
									{
										this.state.communPay && (
											<div className="commun-pay">
												<p className="commun-pay__title">Коммунальные платежи</p>
												<div className="row row--half-splitted">
													<Checkbox
														className="ranty-modal__content__checkbox"
														label="Электроэнергия"
														checked={this.state.energy}
														onClick={(e, {checked}) => this.handleClick('energy', checked)}
													/>
													<div className="form-field">
														<Dropdown className="form-field__input form-field__input--highlight" placeholder="Фиксированные" selection options={[]} />
													</div>
												</div>
												<div className="row row--half-splitted">
													<Checkbox
														className="ranty-modal__content__checkbox"
														label="Вода"
														checked={this.state.water}
														onClick={(e, {checked}) => this.handleClick('water', checked)}
													/>
													<div className="form-field">
														<Dropdown className="form-field__input form-field__input--highlight" placeholder="Фиксированные" selection options={[]} />
													</div>
												</div>
												<div className="row row--half-splitted">
													<Checkbox
														className="ranty-modal__content__checkbox"
														label="Свет"
														checked={this.state.light}
														onClick={(e, {checked}) => this.handleClick('light', checked)}
													/>
													<div className="form-field">
														<Dropdown className="form-field__input form-field__input--highlight" placeholder="По счетчику" selection options={[]} />
													</div>
												</div>
											</div>
										)
									}
									{
										this.state.index && (
											<div className="form-field indexing">
												<p className="form-field__label">Индексация</p>
												<Input className="form-field__input" placeholder="1 %" />
											</div>
										)
									}
									{
										this.state.rentHolidays && (
											<React.Fragment>
												<div className="form-field peny">
													<p className="form-field__label">Арендные каникулы</p>
													<Input value={this.state.rentHolidaysValue} onChange={e => this.setState({ rentHolidaysValue: e.target.value })} className="form-field__input" placeholder="3 мес" />
													<p className="form-field__text">Внесите изменения в графике платы</p>
												</div>
												<div className="pay-graphic">
													<p className="pay-graphic__title">График арендной платы</p>
													<div className="pay-graphic__items">
														{
															new Array(18).fill(0).map((item, index) => (
																<div key={index} className="form-field pay-graphic__items__item">
																	<p className="form-field__label">{index + 1} месяц</p>
																	<Input className={`form-field__input ${parseInt(this.state.rentHolidaysValue) > index ? 'form-field__input--highlight' : ''}`} placeholder="10 000" />
																</div>
															))
														}
													</div>
												</div>
											</React.Fragment>
										)
									}
								</Modal.Content>
								<Divider className="divider" />
							</React.Fragment>
						)
					}
					<Modal.Actions className="ranty-modal__actions">
						<button className="ranty-modal__actions__button" onClick={this.closeModal}>
							Отправить КП
						</button>
						<button className="ranty-modal__actions__button ranty-modal__actions__button--gray" onClick={this.closeModal}>
							Посмотреть КП
						</button>
					</Modal.Actions>
				</Modal>
			</Layout>
		)
	}
}
