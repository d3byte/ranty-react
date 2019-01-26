import React, { Component } from 'react'
import { Button, Checkbox, Modal, Input, Icon, Dropdown, Divider, Tab, Table} from 'semantic-ui-react';

import './style.scss';

export default class CreateCOModal extends Component {
    state = {
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
    const { closeModal, open, dimmer } = this.props;
    const showPreferencesOptions = obespetPlatezh || payPeriod || peny || penalties || violation || notificationPeriod || subArenda || communPay || index || rentHolidays;

    return (
        <Modal className="ranty-modal" dimmer={dimmer} open={open} size="small" onClose={closeModal}>
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
            <button className="ranty-modal__actions__button" onClick={closeModal}>
                Отправить КП
            </button>
            <button className="ranty-modal__actions__button ranty-modal__actions__button--gray" onClick={closeModal}>
                Посмотреть КП
            </button>
        </Modal.Actions>
    </Modal>
    )
  }
}
