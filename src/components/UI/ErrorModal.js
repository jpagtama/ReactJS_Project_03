import styles from './ErrorModal.module.css'
import Card from './Card'

const ErrorModal = props => {

    return (
        <div className={`${styles.backdrop}`} >
            <Card >
                <div className={`${styles.modal}`}>
                    <div className={`${styles.header}`}><h2>Something went wrong</h2></div>
                    <div className={`${styles.content}`}>Test</div>
                    <button type="button" onClick={props.onDismissModal} className={`${styles.actions}`} >Okay</button>
                </div>
            </Card>
        </div>
    )
}

export default ErrorModal