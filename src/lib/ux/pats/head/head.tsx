import styles from './head.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Comp from '@/lib/ux/comps'


type Head = {
	setIsSidebarActive: (f: boolean) => void,
	isSideBarActive?: boolean,
	setBackdropOn: (f: boolean) => void,
	backdropOn?: boolean,
	setLeft: (f: boolean) => void
}

const Head = (props: Head) => {

	const { setIsSidebarActive, isSideBarActive, setBackdropOn, backdropOn, setLeft } = props

	const appHandler = () => {
		setLeft(true)
		setBackdropOn(!backdropOn)
		setIsSidebarActive(!isSideBarActive)
	}

	const appSwitch = (
		<div className={styles.colliders}>
			<Image

				onClick={appHandler}
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
			{appSwitch}
			{brand}
			{ctrls}
		</div>
	)
}

export default Head
