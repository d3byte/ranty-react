import React, { Component } from 'react'
import { Input, Form, Dropdown, Button, Icon } from 'semantic-ui-react';
import './assets/style/style.scss';

import { Layout, Container } from '../../components';

const roomTypes = [
	{ key: 1, text: 'Офис', value: 'office' },
	{ key: 2, text: 'Торговая', value: 'trade' },
	{ key: 3, text: 'Коммерческая', value: 'commercial' },
];

const roomDefault = {
	name: '',
	type: '',
	rent: 0,
	area: 0
}

export default class Management extends Component {
	state = {
		unit: '',
		rooms: [roomDefault]
	}

	addRoom = () => {
		const { rooms } = this.state;
		rooms.push(roomDefault);
		this.setState({ rooms });
	}

	setRoomProperty = (property, value, index) => {
		let { rooms } = this.state;
		rooms[index] = {
			...rooms[index],
			[property]: value
		}
		this.setState({ rooms });
	}

	changeUnitName = e => this.setState({ unit: e.target.value });

	submit = () => {
		const { unit, rooms } = this.state;
	}

	render() {
		const { rooms } = this.state;
		return (
			<Layout
				pageName="Создание объекта"
				className="create-unit"
				names={this.props.names}
				pathname={this.props.location.pathname}
				history={this.props.history}
			>
				<Container title="Создание объекта" centered dark>
					<Form>
						<Form.Field>
							<Input placeholder="Название объекта" onChange={this.changeUnitName} />
						</Form.Field>
						{
							rooms.map((room, index) => (
								<Form.Group>
									<Form.Group inline>
										<Form.Field>
											<Input placeholder="Название помещения" onChange={e => this.setRoomProperty('name', e.target.value, index)} />
										</Form.Field>
										<Form.Field>
											<Dropdown fluid placeholder='Выбрать тип' search selection options={roomTypes} onChange={(e, { value }) => this.setRoomProperty('type', value, index)} />
										</Form.Field>
									</Form.Group>
									<Form.Group inline>
										<Form.Field>
											<Input placeholder="Арендная плата" onChange={e => this.setRoomProperty('rent', e.target.value, index)} />
										</Form.Field>
										<Form.Field>
											<Input placeholder="Площадь" onChange={e => this.setRoomProperty('area', e.target.value, index)} />
										</Form.Field>
									</Form.Group>
									{
										index === rooms.length - 1 && (
											<Button onClick={this.addRoom} className="create-unit__button create-unit__button--px240 create-unit__button--centered" icon labelPosition='left'>
												<Icon name='add' />
												Добавить помещение
											</Button>
										)
									}
								</Form.Group>
							))
						}
						<Button onClick={this.submit} className="create-unit__button create-unit__button--orange">
							Создать
						</Button>
					</Form>
				</Container>
			</Layout>
		)
	}
}
