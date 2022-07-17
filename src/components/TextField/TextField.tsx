import style from './TextField.module.scss';
import React, {FC} from "react";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string | null
    labelWeight?:number
}

export const TextField: FC<TextFieldProps> = ({label, error = null, value, onChange,labelWeight=300, ...props}) => {

    return (
        <div className={style.textField}>
            <label className={style.label}>
                <div style={{fontWeight:labelWeight}} className={error ? style.labelText_error : style.labelText}>{label}</div>
                <input className={error ? style.input_error : style.input}
                       type="text"
                       value={value}
                       onChange={onChange}
                       {...props}/>
            </label>

            <div className={style.errorIndent}>
                {error && <div className={style.error}>{error}</div>}
            </div>
        </div>
    )
}