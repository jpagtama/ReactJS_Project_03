import { useContext } from 'react'
import AuthContext from '../Authentication/auth-context'
import Button from './Button'
import styles from './Header.module.css'

const Header = () => {
    const ctx = useContext(AuthContext)

    const logOutHandler = () => {
        ctx.onLogOut()
    }

    return (
        <div className={styles.header} >
            <Button className={styles.logout} onClick={logOutHandler} >Log Out</Button>
        </div>
    )
}
export default Header