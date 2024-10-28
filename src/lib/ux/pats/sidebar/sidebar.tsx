import styles from './sidebar.module.css'

type Sidebar =
    {
        left?: boolean,
        isSidebarActive?: boolean,
        setIsSidebarActive: (a: boolean) => void,
        setBackdropOn: (a: boolean) => void,
        backdropOn?: boolean
    }

const Sidebar = (props: Sidebar) => {

    const closeHandler = () => {
        props.setIsSidebarActive(!props.isSidebarActive)
        props.setBackdropOn(false)
    }

    const sidebar =
        <div
            style={{ left: (props.left ? 0 : 'unset') }}
            className={styles.sidebar}>
            <div className={styles.head}>
                <h2>MENU</h2>
                <a style={{ fontSize: '24px' }} onClick={() => closeHandler()}>Close</a>
            </div>
        </div>

    return props.isSidebarActive && sidebar
}

export default Sidebar