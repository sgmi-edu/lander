import { headStyles } from '@/lib/ux/styles'
import Image from 'next/image'
import Link from 'next/link'

const Head = () => {
	const colliders = (
		<div className={headStyles.colliders}>
			<Image
				width={24}
				height={22}
				src='/assets/icons/burger.svg'
				alt='hamburger'
			/>
			{/* <b>We are Expanding. Excited to announce the Sarvaloka Manchester.</b> */}
		</div>
	)

	const brand = (
		<Link className={headStyles.brand} href={'/'}>
			<Image width={120} height={97} src='/assets/brand.svg' alt='brand' />
		</Link>
	)

	const ctrls = (
		<div className={headStyles.ctrls}>
			{/* <button>Apply for Admission</button> */}
			<Link href={'/auth'} className={headStyles.access}>
				<Image
					width={24}
					height={32}
					src='/assets/icons/access.svg'
					alt='access'
				/>
				Access
			</Link>
		</div>
	)

	return (
		<div className={headStyles.wrapper}>
			{colliders}
			{brand}
			{ctrls}
		</div>
	)
}

export default Head
