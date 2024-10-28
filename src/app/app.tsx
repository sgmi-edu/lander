'use client'

import { Fragment } from "react"
import { Head, Tail, Menubar } from '@/lib/ux/pats'
import Settings from '../../public/config/settings.json'
import { usePathname } from "next/navigation"

import Link from "next/link"
import Image from "next/image"

import styles from './app.module.css'

const App = ({
    children,
}: Readonly<{
    children: React.ReactNode
}>) => {

    const path = usePathname()




    return (
        <Fragment>
            {/* <Shoutbar /> */}
            <div className={styles.quicks}>
                <ul style={{ display: "flex", gap: '10px' }}>
                    <span style={{ display: "flex", gap: '2px', alignItems: 'center' }} >
                        <Image height={20} width={20} src={"/assets/icons/user_white.svg"} alt={"icon"} />
                        <Link href={'/'}>Trustee Relations</Link>
                    </span>
                    <span style={{ display: "flex", gap: '2px', alignItems: 'center' }}>
                        <Image height={20} width={20} src={"/assets/icons/feather.svg"} alt={"icon"} />
                        <Link href={'/'}>Press Releases</Link>
                    </span>
                </ul>
                <ul style={{ display: "flex", gap: '6px' }}>
                    {/* <Link href={'/'}>Preferences</Link>
            <Link href={'/'}>Assistance</Link> */}
                    <Image height={20} width={20} src={"/assets/icons/phone.svg"} alt={"icon"} />
                    <Image style={{ marginLeft: 12, marginRight: 8 }} height={20} width={20} src={"/assets/icons/settings.svg"} alt={"icon"} />

                </ul>
            </div>
            {path !== '/auth' && <Head />}
            {path !== '/auth' && <Menubar ctrls={Settings.menuCtrls} />}
            {children}
            {path !== '/auth' && <footer>
                <Tail />
            </footer>}
        </Fragment>
    )
}

export default App