import styles from './tail.module.css'
import Link from 'next/link'

const Tail = () => {
	const quicklinks = (
		<ul className={styles.quicklinks}>
			<Link href='/gov'>Governance</Link>
			<Link href='/codes'>Honorcodes</Link>
			<Link href='/sitemap'>sitemap</Link>
		</ul>
	)

	const ctrls = (
		<ul className={styles.ctrlBlock}>
			<Link href='/policies'>Privacy Policy</Link>
			<Link href='/terms'>Terms & Conditions</Link>
			<Link href='/support'>Support Center</Link>
		</ul>
	)
	return (
		<div className={styles.wrapper}>
			{quicklinks}
			{ctrls}
			<p className={styles.copyright}>
				Copyright © All Rights Reserved Sarvaloka Global Mission
				Institute ® | SGMI
			</p>
		</div>
	)
}

export default Tail
