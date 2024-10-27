'use client'

import { Fragment } from "react"
import { Head, Tail, Menubar } from '@/lib/ux/pats'
import Settings from '../../public/config/settings.json'
import { usePathname } from "next/navigation"

const App = ({
    children,
}: Readonly<{
    children: React.ReactNode
}>) => {

    const path = usePathname()

    console.log(path)

    return (
        <Fragment>
            {/* {} */}
            {/* {shoutbarStats.status === 'ACTIVE' && 
				<Shoutbar />} */}
            {/* <Shoutbar /> */}
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