import React, {FormEvent, useEffect, useState} from "react";
import {useAppDispatch} from "../../store";
import {loginAC} from "../../store/ducks/auth/actionCreators";
import {emailValidator, passwordValidator} from "../../helpers/validator";
import {FieldData} from "../../types";
import {Button} from '../../components/Button/Button';
import {TextField} from '../../components/TextField/TextField';

import style from './AuthPage.module.scss';

export const AuthPage = () => {
    const [emailField, setEmailField] = useState<FieldData>({value: '', error: null})
    const [passwordField, setPasswordField] = useState<FieldData>({value: '', error: null})

    const dispatch = useAppDispatch()

    const changeEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailField((prev: FieldData) => ({...prev, value: e.target.value, error: null}))

        if (!emailValidator(e.target.value)) {
            setEmailField((prev) => ({...prev, value: e.target.value, error: "Укажите валидный email"}))
        }
    }
    const changePasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordField((prev: FieldData) => ({...prev, value: e.target.value, error: null}))
        const validateResult = passwordValidator(e.target.value)

        if (!validateResult[0]) {
            setPasswordField((prev) => ({...prev, value: e.target.value, error: validateResult[1]}))
        }
    }

    const loginHandler = (e: FormEvent) => {
        e.preventDefault()
        if (emailField.error || passwordField.error) {
            return
        }
        if (!emailField.value) {
            setEmailField(prev => ({...prev, error: 'Поле не может быть пустым'}))
            return;
        }
        if (!passwordField.value) {
            setPasswordField(prev => ({...prev, error: 'Поле не может быть пустым'}))
            return;
        }

        localStorage.setItem('HotelToken', emailField.value)
        dispatch(loginAC(emailField.value))
    }

    useEffect(() => {
        const token = localStorage.getItem('HotelToken')
        if (token) {
            dispatch(loginAC(token))
        }
    }, [])

    return (
        <div className={style.authPage}>
            <div className={style.overlay}>
                <form className={style.authForm} onSubmit={loginHandler}>
                    <div className={style.formTitle}>Simple Hotel Check</div>
                    <div className={style.formFieldWrapper}>
                        <TextField label={'Логин'} value={emailField.value} onChange={changeEmailHandler}
                                   error={emailField.error}/>
                        <TextField label={'Пароль'} value={passwordField.value} onChange={changePasswordHandler}
                                   error={passwordField.error} type={'password'}/>
                    </div>
                    <Button type={'submit'}>Войти</Button>
                </form>
            </div>
        </div>
    )
}