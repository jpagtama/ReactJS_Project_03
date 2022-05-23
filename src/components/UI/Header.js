import Button from './Button'
import styles from './Header.module.css'

const Header = props => {
    const logOutHandler = () => {
        props.onLogOut()
    }

    return (
        <div className={styles.header} >
            <Button className={styles.logout} onClick={logOutHandler} >Log Out</Button>
        </div>
    )
}
export default Header