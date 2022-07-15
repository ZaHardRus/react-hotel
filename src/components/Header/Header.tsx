import logOutIcon from '../../assets/images/logOut.svg'
import {useAppDispatch} from "../../store";
import {logoutAC} from "../../store/ducks/auth/actions";

import style from './Header.module.scss'

export const Header = () => {
    const dispatch = useAppDispatch()
    const logoutHandler = () => {
        localStorage.removeItem('HotelToken')
        dispatch(logoutAC())
    }
    return (
        <header className={style.header}>
            <div className={style.headerLogo}>Simple Hotel Check</div>
            <div className={style.logout} onClick={logoutHandler}>
                <span>Выйти</span>
                <img src={logOutIcon} width={24} height={24} alt="logout"/>
            </div>
        </header>
    )
}