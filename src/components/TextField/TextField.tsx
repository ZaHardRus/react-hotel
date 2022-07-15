import style from './TextField.module.scss';
import React, {FC, memo} from "react";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string | null
}

export const TextField: FC<TextFieldProps> = memo(({label, error = null, value, onChange, ...props}) => {

    return (
        <div className={style.textField}>
            <label className={style.label}>
                <div className={error ? style.labelText_error : style.labelText}>{label}</div>
                <input className={error ? style.input_error : style.input}
                       type="text"
                       value={value}
                       onChange={onChange}
                       {...props}/>
            </label>
            {error && <div className={style.error}>{error}</div>}
        </div>
    )
})