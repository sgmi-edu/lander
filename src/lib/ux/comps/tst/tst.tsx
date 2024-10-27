import { ReactNode } from 'react'

type Tst = {
	children: ReactNode
}

const Tst = (props: Tst) => {
	return (
		<div>
			<p>{props.children}</p>
		</div>
	)
}

export default Tst
