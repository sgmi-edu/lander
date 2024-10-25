import { tailStyles } from '@/styles'
import Link from 'next/link'

const Tail = () => {
	const ctrls = (
		<ul>
			<Link href='/Privay Policies'>Policies</Link>
			<Link href='/Terms & Conditions'>Policies</Link>
			<Link href='/Honorcodes'>Honorcodes</Link>
		</ul>
	)
	return (
		<div className={tailStyles.wrapper}>
			{ctrls}
			<p className={tailStyles.copyright}>
				Copyright © All Rights Reserved | Sarvaloka Global Mission Institute ® |
				SGMI
			</p>
		</div>
	)
}

export default Tail
