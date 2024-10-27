import Link from 'next/link'

import { ReactNode } from 'react'

type Hyp = {
	children: ReactNode
	target: string
}

const Hyp = (props: Hyp) => {
	return <Link href={props.target}></Link>
}

export default Hyp
