import styles from './head.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Comp from '@/lib/ux/comps'

const Head = () => {
	const colliders = (
		<div className={styles.colliders}>
			<Image
				style={{ cursor: 'pointer' }}
				width={36}
				height={36}
				src='/assets/icons/apps.svg'
				alt='hamburger'
			/>
			{/* <b>We are Expanding. Excited to announce the Sarvaloka Manchester.</b> */}
		</div>
	)

	const brand = (
		<Link className={styles.brand} href={'/'}>
			<Comp.Img
				variant='BRAND'
				w={120}
				h={97}
				img='/assets/brand.svg'
				alt='brand'
			/>
		</Link>
	)


	const ctrls = (
		<div className={styles.ctrls}>
			<Comp.Src label='Search' />
			<Comp.Btn var={'PRIMARY'} lbl={'Become Student'} ext ldls={false} />
			<Link href={'/auth'} className={styles.access}>
				<Image
					style={{ cursor: 'pointer' }}
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
		<div className={styles.wrapper}>
			{colliders}
			{brand}
			{ctrls}
		</div>
	)
}

export default Head
