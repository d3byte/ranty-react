import React, { Component } from 'react'
import { Progress, Button, Modal, Input, Icon, Dropdown, Tab, Table} from 'semantic-ui-react';

import './preview.scss';


export default class PreviewCO extends Component {
	state = {
		rentHolidaysValue: 3,
	}

	render() {
		return (
            <div
                className="preview-co"
            >
                <div className="preview-co__wrapper">
                    <h2 className="preview-co__title">Коммерческое предложение</h2>
                    <p className="preview-co__sub-title">Добрый день, Иван Иванов! <br/> Предлагаем взять в аренду: помещение 1. Адрес: г.Пермь, ул.Майская, д3 к5. На следующих условиях:</p>
                    <div className="row row--half-splitted">
                        <div className="preview-co__half">
                            <div className="row row--half-splitted row--align-center">
                                <div className="form-field">
                                    <p className="form-field__label"><b>Аренда:</b></p>
                                </div>
                                <div className="form-field">
                                    <p className="form-field__label">70 000 рублей</p>
                                </div>
                            </div>
                            <div className="row row--half-splitted row--align-center">
                                <div className="form-field">
                                    <p className="form-field__label"><b>Срок:</b></p>
                                </div>
                                <div className="form-field">
                                    <p className="form-field__label">18 месяцев</p>
                                </div>
                            </div>
                            <div className="row row--half-splitted row--align-center">
                                <div className="form-field">
                                    <p className="form-field__label"><b>Обеспечительный платеж:</b></p>
                                </div>
                                <div className="form-field">
                                    <p className="form-field__label">–</p>
                                </div>
                            </div>
                            <div className="row row--half-splitted row--align-center">
                                <div className="form-field">
                                    <p className="form-field__label"><b>Срок оплаты:</b></p>
                                </div>
                                <div className="form-field">
                                    <p className="form-field__label">12.07.2019 <br/> текущий период</p>
                                </div>
                            </div>
                            <div className="row row--half-splitted row--align-center">
                                <div className="form-field">
                                    <p className="form-field__label"><b>Пени при просрочке оплаты:</b></p>
                                </div>
                                <div className="form-field">
                                    <p className="form-field__label">0,5 % / день просрочки</p>
                                </div>
                            </div>
                            <div className="penalties">
                                <div className="form-field">
                                    <p className="form-field__label"><b>Штрафы:</b></p>
                                </div>
                                <div className="row row--half-splitted row--align-center">
                                    <div className="form-field">
                                        <p className="form-field__label">Курение в помещении</p>
                                    </div>
                                    <div className="form-field">
                                        <p className="form-field__label">1000 ₽</p>
                                    </div>
                                </div>
                            </div>
                            <div className="reasons">
                                <div className="form-field">
                                    <p className="form-field__label"><b>Нарушения для расторжения:</b></p>
                                </div>
                                <p className="reasons_item">Какая-то очень важная причина</p>
                            </div>
                            <div className="row row--half-splitted row--align-center">
                                <div className="form-field">
                                    <p className="form-field__label"><b>Срок уведомления для перезаключения договора:</b></p>
                                </div>
                                <div className="form-field">
                                    <p className="form-field__label">17.07</p>
                                </div>
                            </div>
                            <div className="row row--half-splitted row--align-center">
                                <div className="form-field">
                                    <p className="form-field__label"><b>Возможность сдавать в субаренду:</b></p>
                                </div>
                                <div className="form-field">
                                    <p className="form-field__label">Да</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-field">
                                    <p className="form-field__label"><b>Коммунальные платежи:</b></p>
                                </div>
                                <div className="row row--half-splitted row--align-center">
                                    <div className="form-field">
                                        <p className="form-field__label">Электроэнергия</p>
                                    </div>
                                    <div className="form-field">
                                        <p className="form-field__label">Фиксированная</p>
                                    </div>
                                </div>
                                <div className="row row--half-splitted row--align-center">
                                    <div className="form-field">
                                        <p className="form-field__label">Вода</p>
                                    </div>
                                    <div className="form-field">
                                        <p className="form-field__label">Фиксированная</p>
                                    </div>
                                </div>
                                <div className="row row--half-splitted row--align-center">
                                    <div className="form-field">
                                        <p className="form-field__label">Свет</p>
                                    </div>
                                    <div className="form-field">
                                        <p className="form-field__label">По счетчику</p>
                                    </div>
                                </div>
                                <div className="row row--half-splitted row--align-center">
                                    <div className="form-field">
                                        <p className="form-field__label"><b>Индексация:</b></p>
                                    </div>
                                    <div className="form-field">
                                        <p className="form-field__label">1%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="preview-co__half">
                            <div className="row row--half-splitted row--align-center">
                                <div className="form-field">
                                    <p className="form-field__label"><b>Арендные каникулы:</b></p>
                                </div>
                                <div className="form-field">
                                    <p className="form-field__label">3 месяца</p>
                                </div>
                            </div>
                            <div className="pay-graphic">
                                <p className="pay-graphic__title">График арендной платы</p>
                                <div className="pay-graphic__items">
                                    {
                                        new Array(18).fill(0).map((item, index) => (
                                            <div key={index} className="form-field pay-graphic__items__item">
                                                <p className="form-field__label">{index + 1} месяц</p>
                                                <Input disabled className={`form-field__input ${parseInt(this.state.rentHolidaysValue) > index ? 'form-field__input--highlight' : ''}`} value="10 000" />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		)
	}
}