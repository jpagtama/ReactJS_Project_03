import buttonStyles from './Button.module.css'

const Button = props => {
    return (
        <button className={`${buttonStyles.button} ${props.className}`} type={props.type || "button"} onClick={props.onClick} disabled={props.isDisabled} >
            {props.children}
        </button>
    )
}
export default Button