import React from 'react'
import ReactDOM from 'react-dom'
import styles from './ErrorModal.module.css'
import Card from './Card'

const ErrorModal = props => {

    const Backdrop = () => <div className={`${styles.backdrop}`} />
    const Modal = () => {
        return (
            <Card className={`${styles.modal}`} >
                <div >
                    <header className={`${styles.header}`}><h2>Something went wrong</h2></header>
                    <div className={`${styles.content}`}>Please fix before continuing</div>
                    <footer className={styles.actions}>
                        <button type="button" onClick={props.onDismissModal} className={`${styles.actions}`} >Okay</button>
                    </footer>
                </div>
            </Card>
        )
    }

    return (
        <React.Fragment >
            {ReactDOM.createPortal(<Modal />, document.getElementById("modal-root"))}
            {ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop-root"))}
        </React.Fragment>
    )
}

export default ErrorModal