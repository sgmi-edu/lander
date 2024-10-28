'use client'
import styles from './splash.module.css'

import { useEffect } from 'react';

import { usePathname } from "next/navigation"

import { BarLoader } from 'react-spinners'

import Image from 'next/image';


type Splash = {
    isSplashActive?: boolean,
    setBackdropOn: (f: boolean) => void
    setIsSplashActive: (f: boolean) => void
}

const Splash = (props: Splash) => {

    const path = usePathname()

    useEffect(() => {
        if (props.isSplashActive && path === '/') {
            props.setBackdropOn(true)
            setTimeout(() => {
                props.setIsSplashActive(false)
                props.setBackdropOn(false)
            }, 1100)
        }
    })



    const splash =
        <div className={styles.splash}>
            <Image height={200} width={200} src='/assets/brand.svg' alt='brand' />
            <BarLoader width={240} color='#002dcc' />
        </div>

    return (props.isSplashActive && path === '/') && splash

}

export default Splash