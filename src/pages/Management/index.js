import React, { Component } from 'react'
import { Input, Form, Tab } from 'semantic-ui-react';
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

	render() {
		return (
			<Layout pageName="Управление" className="management">
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
			</Layout>
		)
	}
}
