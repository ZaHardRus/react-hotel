import React, {FC, ReactNode} from "react";

import style from './Button.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

export const Button: FC<ButtonProps> = ({children, ...props}) => {
    return (
        <button className={style.button} {...props}>
            {children}
        </button>
    )
}