import React, { Component } from 'react'
import { Input, Form, Tab, Table, Pagination } from 'semantic-ui-react';
import './assets/style/style.scss';

import { Layout } from '../../components';

const StatusPanes = [
	{ menuItem: 'Все', render: () =>  '' },
	{ menuItem: 'Вакантно', render: () =>  '' },
	{ menuItem: 'В аренде', render: () =>  '' }
];

const TypePanes = [
	{ menuItem: 'Все', render: () =>  '' },
	{ menuItem: 'Торговая', render: () =>  '' },
	{ menuItem: 'Жилая', render: () =>  '' },
	{ menuItem: 'Промышленная', render: () =>  '' },
	{ menuItem: 'Коммерческая', render: () =>  '' },
	{ menuItem: 'Офис', render: () => '' }
];

const TableRows = [
	{ unit: 'Москва, ул. Пролетарская 2', name: 'Название 1', area: 134, type: 'Офис', status: { vacant: true, tenant: '' }, price: 21000 },
	{ unit: 'Ростов-на-Дону, бульвар Капуцинов 15, оф. 11', name: 'Название 2', area: 749, type: 'Торговая', status: { vacant: false, tenant: 'Крапивин В.А.' }, price: 97000 },
	{ unit: 'Ростов-на-Дону, бульвар Капуцинов 15, оф. 7', name: 'Название 3', area: 585, type: 'Коммерческая', status: { vacant: true, tenant: '' }, price: 64000 },
	{ unit: 'Москва, ул. Пролетарская 2', name: 'Название 4', area: 655, type: 'Офис', status: { vacant: true, tenant: '' }, price: 66000 },
	{ unit: 'Москава, ул. Верхняя Мойва 48', name: 'Офис А-класса', area: 230, type: 'Офис', status: { vacant: false, tenant: 'Преображенская Н.Т.' }, price: 97000 },
	{ unit: 'Ростов-на-Дону, бульвар Капуцинов 15, оф. 6', name: 'Позитив Поинт', area: 827, type: 'Коммерческая', status: { vacant: false, tenant: 'Долгинова Е.И.' }, price: 48000 },
	{ unit: 'Ростов-на-Дону, бульвар Капуцинов 15, оф. 4', name: 'Негатив Поинт', area: 340, type: 'Коммерческая', status: { vacant: false, tenant: 'Кондратенко А.В.' }, price: 59000 },
	{ unit: 'Ростов-на-Дону, бульвар Капуцинов 15, оф. 3', name: 'Еще Какой-то Поинт', area: 192, type: 'Офис', status: { vacant: true, tenant: '' }, price: 21000 },
	{ unit: 'Москва, ул. Верхняя Мойва 48', name: 'ТЦ Атриум', area: 860, type: 'Офис', status: { vacant: false, tenant: 'Крапивин В.А.' }, price: 97000 },
	{ unit: 'Москва, ул. Пролетарская 2', name: 'Парк Горького', area: 371, type: 'Офис', status: { vacant: true, tenant: '' }, price: 21000 },
];

export default class Management extends Component {
	state = {
		filter: {
			status: '',
			type: ''
		},
	}

	onFilterChange = (e, data, field) => {
		// Do something
		console.log(data, field);
	}

	onPaginationChange = (data) => {

	}

	render() {
		return (
			<Layout
				pageName="Управление"
				className="management"
				names={this.props.names}
				pathname={this.props.location.pathname}
				history={this.props.history}
			>
				<header className="management__filters">
					<Form className="management__filters__filter management__filters__filter--triple">
						<Form.Field 
							label="Поиск"
							control={Input}
							placeholder="Поиск объектов по названию или адресу"
							icon="search"
							className="management__filters__filter__item"
						/>
						<Form.Group className="management__filters__filter__item management__filters__filter__item--one-line">
							<Form.Field control={Input} label="Площадь" placeholder="25" />
							<span>до</span>
							<Form.Field control={Input} label=" " placeholder="50" />
						</Form.Group>
						<Form.Group className="management__filters__filter__item management__filters__filter__item--one-line">
							<Form.Field control={Input} label="Арендная плата" placeholder="15000" icon="rub" />
							<span>до</span>
							<Form.Field control={Input} label="" icon="rub" />
						</Form.Group>
					</Form>
					<Form className="management__filters__filter management__filters__filter--double">
						<Form.Field>
							<label>Статус</label>
							<Tab menu={{ attached: false, tabular: false }} panes={StatusPanes} onTabChange={(e, data) => this.onFilterChange(e, data, 'status')} className="management__filters__filter__item__tab" />
						</Form.Field>
						<Form.Field>
							<label>Тип</label>
							<Tab menu={{ attached: false, tabular: false }} panes={TypePanes} onTabChange={(e, data) => this.onFilterChange(e, data, 'type')} className="management__filters__filter__item__tab" />
						</Form.Field>
					</Form>
				</header>
				<main className="management__table">
					<Table unstackable>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell>Объект</Table.HeaderCell>
								<Table.HeaderCell>Название</Table.HeaderCell>
								<Table.HeaderCell>Площадь, м<sup>2</sup></Table.HeaderCell>
								<Table.HeaderCell>Тип</Table.HeaderCell>
								<Table.HeaderCell>Статус</Table.HeaderCell>
								<Table.HeaderCell>Цена, ₽</Table.HeaderCell>
							</Table.Row>
						</Table.Header>
						<Table.Body>
							{
								TableRows.map((item, index) => (
									<Table.Row key={index} onClick={e => this.props.history.push('/management/unit')}>
										<Table.Cell>{item.unit}</Table.Cell>
										<Table.Cell>{item.name}</Table.Cell>
										<Table.Cell>{item.area}</Table.Cell>
										<Table.Cell>{item.type}</Table.Cell>
										<Table.Cell>
											{
												item.status.vacant 
													? (
														<div className="row">
															<div className="circle circle--red"></div>
															Вакантно
														</div>
													) : (
														<div className="row">
															{item.status.tenant}
														</div>
													)
											}
										</Table.Cell>
										<Table.Cell>{item.price}</Table.Cell>
									</Table.Row>
								))
							}
						</Table.Body>
					</Table>
					<footer className="management__table__pages">
						<Pagination
							defaultActivePage={5}
							totalPages={11}
							firstItem={null}
            				lastItem={null}
							onPageChange={this.onPaginationChange}
						/>
					</footer>
				</main>
			</Layout>
		)
	}
}
