import React, { useImperativeHandle, forwardRef, useRef } from 'react'

const Input = forwardRef((props,ref) => {
    const inputRef = useRef()

    const setFocus = () => {
        inputRef.current.focus()
    }

    useImperativeHandle(ref, () => {
        return {
            focus: setFocus
        }
    })

    return (
        <input ref={inputRef} id={props.id} className={props.className} type={props.type} onChange={props.onChange} onBlur={props.onBlur} value={props.value}  />
    )
})
export default Input