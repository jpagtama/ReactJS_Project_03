import { useReducer, useState, useEffect, useContext, useRef } from 'react'
import AuthContext from './auth-context'
import Button from '../UI/Button'
import Input from '../UI/Input'
import styles from './LoginForm.module.css'

const emailReducer = (state,action) => {
    if (action.type === 'USER_INPUT') {
        return {value: action.value, isValid: state.value.includes('@')}
    }
    if (action.type === 'INPUT_BLUR') {
        return {value: state.value, isValid: state.value.includes('@')}
    }
    return {value:'',isValid:false}
}

const passwordReducer = (state,action) => {
    if (action.type === 'USER_INPUT') {
        return {value: action.value, isValid: action.value.length > 6}
    }
    if (action.type === 'INPUT_BLUR') {
        return {value: state.value, isValid: state.value.length > 6}
    }
}

const LoginForm = props => {
    const ctx = useContext(AuthContext)
    const [emailState, dispatchEmail] = useReducer(emailReducer, {value:'',isValid:null})
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value:'',isValid:null})
    const [formIsValid, setFormIsValid] = useState(null)
    const { isValid: emailIsValid } = emailState
    const { isValid: passwordIsValid } = passwordState
    const emailInputRef = useRef()
    const passwordInputRef = useRef()

    useEffect(() => {
        const timer = setTimeout(() => { setFormIsValid(emailIsValid && passwordIsValid) }, 500)
        return () => { clearTimeout(timer) }
    }, [emailIsValid, passwordIsValid])

    const submitHandler = event => {
        event.preventDefault()
        if (checkFormIsValid()) {
            ctx.onLogIn()
        } else if (!emailIsValid) {
            emailInputRef.current.focus()
            // props.onOpenModal(true)
        } else if (!passwordIsValid) {
            passwordInputRef.current.focus()
            // props.onOpenModal(true)
        }
    }
    const emailHandler = event => {
        dispatchEmail({type:'USER_INPUT', value:event.target.value})
    }
    const yeetEmailFocusHandler = event => {
        dispatchEmail({type:'INPUT_BLUR', value:event.target.value})
    }
    const passwordHandler = event => {
        dispatchPassword({type: 'USER_INPUT', value: event.target.value})
    }
    const yeetPasswordFocusHandler = event => {
        dispatchPassword({type: 'INPUT_BLUR', value: event.target.value})
    }
    const checkFormIsValid = () => emailIsValid === true && passwordIsValid === true

    return (
        <form className={styles.form} onSubmit={submitHandler} >
            <label htmlFor="email" >Email {emailState.isValid === false && <span className={styles.errorMessage} >enter a valid email</span>}</label>
            <Input ref={emailInputRef} id="email" type="text" onChange={emailHandler} onBlur={yeetEmailFocusHandler} value={emailState.value} />
            <label htmlFor="password" >Password {passwordState.isValid === false && <span className={styles.errorMessage} >must be more than 6 characters</span>}</label>
            <Input ref={passwordInputRef} id="password" type="password" onChange={passwordHandler} onBlur={yeetPasswordFocusHandler} value={passwordState.value} />
            {/* <Button type="submit" isDisabled={formIsValid === false || formIsValid == null? true : false} >Log In</Button> */}
            <Button type="submit" >Log In</Button>
        </form>
    )
}
export default LoginForm