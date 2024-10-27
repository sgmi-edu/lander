import { ReactNode } from 'react'

type Ttl = {
	children: ReactNode
}
const Ttl = (props: Ttl) => {
	return <h1>{props.children}</h1>
}

export default Ttl
