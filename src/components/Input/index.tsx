import { FC, ChangeEvent, useState } from "react"
import warning from "./icon/warning.png"
import "./style.css"

//value, label, name, placeholder, type, onChange

interface InputProps {
    label?: string
    type: 'text' | 'number' | 'email' | 'password'
    value: string | number
    name: string
    placeholder?: string
    error?: string
    disabled?: boolean
    autoComplete?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps> = ({ label, ...rest }) => {

    const [errorbox,setErrorbox] = useState(false);

    return (
        <div className="field_">
            {label && <label className="input_label_">{label}</label>}
            <div className="fit_content">
                <input {...rest} className="input_" />
                {rest.error && <div onClick={()=>setErrorbox(!errorbox)} className="input_error_icon_">
                    <img src={warning} width={21} height={21}/>
                </div>}
            </div>
            {rest.error && errorbox && <div className="input_error_" >{rest.error}</div>}
        </div>
    );
}

export default Input