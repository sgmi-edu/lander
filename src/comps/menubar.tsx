import { menubarStyles } from '@/styles'
import Image from 'next/image'

type Menubar = {
	ctrls: {
		left: {
			label: string
			src: string
		}[]
		right: {
			label: string
			src: string
		}[]
	}
}

const Menubar = (props: Menubar) => {
	const menuItems_Left = (
		<ul className={menubarStyles.itemWrapper}>
			{props.ctrls.left.map(
				(
					ctrl: {
						label: string
						src: string
					},
					i: number
				) => {
					return (
						<span key={i} className={menubarStyles.icon}>
							<li key={i}>{ctrl.label}</li>

							<Image
								width={79 / 1.5}
								height={36 / 1.5}
								src='/assets/icons/chevron-down.svg'
								alt='hamburger'
							/>
						</span>
					)
				}
			)}
		</ul>
	)

	const menuItems_Right = (
		<ul className={menubarStyles.itemWrapper}>
			{props.ctrls.right.map(
				(
					ctrl: {
						label: string
						src: string
					},
					i: number
				) => {
					return (
						<span key={i} className={menubarStyles.icon}>
							<li key={i}>{ctrl.label}</li>

							<Image
								width={79 / 1.5}
								height={36 / 1.5}
								src='/assets/icons/chevron-down.svg'
								alt='hamburger'
							/>
						</span>
					)
				}
			)}
		</ul>
	)
	return (
		<div className={menubarStyles.wrapper}>
			{menuItems_Left}
			{menuItems_Right}
		</div>
	)
}

export default Menubar
