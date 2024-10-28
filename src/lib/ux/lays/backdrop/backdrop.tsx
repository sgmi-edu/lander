'use client'

import { useEffect } from 'react'
import styles from './backdrop.module.css'


type Backdrop = {
    backdropOn?: boolean,
    setBackdropOn: (s: boolean) => void,
    setIsSidebarActive: (a: boolean) => void
    isSidebarActive?: boolean,
}
const Backdrop = (props: Backdrop) => {

    useEffect(() => {
        if (props.backdropOn) {
            if (typeof window != 'undefined' && window.document) {
                document.body.style.overflow = 'hidden';
            }
        }
        else {
            document.body.style.overflow = 'unset';

        }
    })

    const closeHandler = () => {
        props.setBackdropOn(!props.backdropOn)
        props.setIsSidebarActive(false)
    }

    const backdrop = <span onClick={() => closeHandler()} className={styles.backdrop}>
    </span>

    return props.backdropOn && backdrop

}

export default Backdrop