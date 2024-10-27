import { ReactNode } from 'react'

type Txt = {
	children: ReactNode
}

const Txt = (props: Txt) => {
	return <b>{props.children}</b>
}

export default Txt
