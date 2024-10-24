import { headStyles } from '@/styles'
import Image from 'next/image'

const Head = () => {
	const colliders = (
		<div className={headStyles.colliders}>
			<Image
				width={79 / 1.5}
				height={36 / 1.5}
				src='/assets/icons/burger.svg'
				alt='hamburger'
			/>
			<b>We are Expanding. Excited to announce the Sarvaloka Manchester.</b>
		</div>
	)

	const brand = (
		<div className={headStyles.brand}>
			<Image
				width={174 / 1.5}
				height={147 / 1.5}
				src='/assets/brand.svg'
				alt='brand'
			/>
		</div>
	)

	const ctrls = (
		<div className={headStyles.ctrls}>
			<button>Apply for Admission</button>
			<button>Access</button>
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
