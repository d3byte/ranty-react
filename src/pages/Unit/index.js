import React, { Component } from 'react'
import { Progress, Button, Modal, Input, Icon, Dropdown, Tab, Table} from 'semantic-ui-react';
import './assets/style/style.scss';

import { Layout, Container, CreateCOModal } from '../../components';

import attachment from './assets/img/attachment.svg';

const panes = [
	{ menuItem: 'Помещение' },
	{ menuItem: 'Финансы' },
	{ menuItem: 'ЖКУ' },
	{ menuItem: 'Заявки' },
	{ menuItem: 'Лиды' },
]

export default class Unit extends Component {
	state = {
		isModalOpen: false,
		name: '',
		activePane: 0,
		room: {},
		isLoading: true,
		open: false
	}

	showCOModal = dimmer => () => this.setState({ dimmer, open: true })
	closeCOModal = () => this.setState({ open: false })

	async componentDidMount() {
		const { id } = this.props.match.params
		const res = await fetch(`http://46.229.212.225/api/rooms/${id}`, {
			headers: {
				'Accept': 'application/json',
				'Content-type': 'application/json',
				'Authorization': `Bearer 5jdwar0YdKGnSfTJKFNY7kUyL2wL9IpHnOpCL89FBc1U50Xxrk5FQNNjeAoD`,
			}
		})
		var body = await res.json()
		console.log(body)
		this.setState({room: body, isLoading: false})
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
		const room = this.state.room
		if (this.state.isLoading) {
			return <p>Loading ...</p>;
		}

		return (
			<Layout
				className="unit"
				names={this.props.names}
				pathname={this.props.location.pathname}
				history={this.props.history}
			>
				<Tab onTabChange={this.onTabChange} panes={panes} />
				<div className="wrapper">
					<main className="unit__status">
						{this.state.activePane === 0 && (
							<React.Fragment>
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
										<p onClick={this.openModal} className="unit__text row--inline row--align-center hover">
											Загрузить вложение 
											<img src={attachment} alt="attachment" />
										</p>
									</div>
									<p className="unit__text unit__text--lighten">Договор А1</p>
								</footer>
								<Modal size="mini" open={this.state.isModalOpen} onClose={this.closeModal}>
									<Container dark title="Добавление вложения">
										<Dropdown fluid placeholder='Договор аренды' selection options={[]} />
										<Input placeholder="Название договора" onChange={e => this.setState({ name: e.target.value })} />
										<Button onClick={this.submit} className="unit__button unit__button--orange unit__button--centered">
											Создать
										</Button>
									</Container>
								</Modal>
							</React.Fragment>
						)}
						{this.state.activePane === 4 && (
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
												<span onClick={this.showCOModal('inverted')}><Icon name="clipboard outline" /> Создать КП</span> <Icon onClick={e => this.collapse(0)} name="dropdown" />
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
											<span>
											<span onClick={this.showCOModal('inverted')}><Icon name="clipboard outline" /> Создать КП</span> <Icon onClick={e => this.collapse(0)} name="dropdown" />
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
											<span>
											<span onClick={this.showCOModal('inverted')}><Icon name="clipboard outline" /> Создать КП</span> <Icon onClick={e => this.collapse(0)} name="dropdown" />
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
					<aside className="unit__info" onClick={e => this.props.history.push('/management/edit')}>
						<h2 className="unit__info__title">{room.title}</h2>
						<p className="unit__info__address">{room.address}</p>
						<footer className="unit__info__properties">
							<div className="unit__info__properties__item">
								<p className="">Тип</p>
								<p className="">{room.type}</p>
							</div>
							<div className="unit__info__properties__item">
								<p className="">Площадь</p>
								<p className="">{room.area} м2</p>
							</div>
							<div className="unit__info__properties__item">
								<p className="">Этаж</p>
								<p className="">null</p>
							</div>
						</footer>
					</aside>
				</div>
				<CreateCOModal
					dimmer={this.state.dimmer}
					open={this.state.open}
					closeModal={this.closeCOModal}
				/>
			</Layout>
		)
	}
}
