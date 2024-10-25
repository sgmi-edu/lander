import { tailStyles } from '@/styles'
import Link from 'next/link'

const Tail = () => {
	const ctrls = (
		<ul className={tailStyles.ctrlBlock}>
			<Link href='/policies'>Privacy Policy</Link>
			<Link href='/t&c'>Terms & Conditions</Link>
			<Link href='/support'>Support Center</Link>
		</ul>
	)
	return (
		<div className={tailStyles.wrapper}>
			{ctrls}
			<p className={tailStyles.copyright}>
				Copyright © All Rights Reserved <br /> Sarvaloka Global Mission
				Institute ® | SGMI
			</p>
		</div>
	)
}

export default Tail
