import React, { Component } from 'react'
import { Input, Form, Dropdown, Button, Checkbox } from 'semantic-ui-react';
import './assets/style/style.scss';

import { Layout, Container } from '../../components';

export default class AddLead extends Component {
	state = {
		name: '',
		phone: '',
		email: '',
		unit: {},
		date: '',
		time: '',
		remind: false
	}

	changeState = (property, value) => {
		this.setState({ [property]: value });
	}

	submit = () => {
	}

	render() {
		return (
			<Layout
				pageName="Новый лид"
				className="create-lead"
				names={this.props.names}
				pathname={this.props.location.pathname}
				history={this.props.history}
			>
				<Container title="Создание лида" centered dark>
					<Form>
						<Form.Field>
							<Input placeholder="Название организации / ФИО" onChange={e => this.changeState('name', e.target.value)} />
						</Form.Field>
						<Form.Field>
							<Input placeholder="Номер телефона" type="phone" onChange={e => this.changeState('phone', e.target.value)} />
						</Form.Field>
						<Form.Field>
							<Input placeholder="Email" type="email" onChange={e => this.changeState('email', e.target.value)} />
						</Form.Field>
						<Form.Group inline>
							<Form.Field>
								<Dropdown fluid placeholder='Выбрать помещение' search selection options={[]} onChange={(e, { value }) => this.changeState('type', value)} />
							</Form.Field>
							<Form.Field>
								<Dropdown fluid placeholder='Выбрать дату' search selection options={[]} onChange={(e, { value }) => this.setRoomProperty('type', value)} />
							</Form.Field>
						</Form.Group>
						<Form.Group inline className="right">
							<Form.Field>
								<Dropdown fluid placeholder='Выбрать время' search selection options={[]} onChange={(e, { value }) => this.setRoomProperty('type', value)} />
							</Form.Field>
						</Form.Group>
						<Form.Group inline className="right">
							<Form.Field>
								<Checkbox label="Напомнить" onChange={e => this.changeState('remind', e.target.value)} />
							</Form.Field>
						</Form.Group>
						<Button onClick={this.submit} className="create-unit__button create-unit__button--orange">
							Создать
						</Button>
					</Form>
				</Container>
			</Layout>
		)
	}
}
