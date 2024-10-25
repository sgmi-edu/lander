'use client'

import { menubarStyles } from '@/styles'
import Image from 'next/image'
import Link from 'next/link'

import { BarLoader } from 'react-spinners'
import { Fragment, useState } from 'react'

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
	const [loading] = useState<boolean>(false)

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
						<div key={i} className={menubarStyles.dropdown}>
							<span className={menubarStyles.icon}>
								<Link href='/' key={i}>
									{ctrl.label}
								</Link>
								<Image
									width={24}
									height={24}
									src='/assets/icons/chevron-down.svg'
									alt='hamburger'
								/>
							</span>
							<div className={menubarStyles.content}>
								<p>Content One</p>
								<p>Content Two</p>
							</div>
						</div>
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
							<Link href='/' key={i}>
								{ctrl.label}
							</Link>

							<Image
								width={24}
								height={24}
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
		<Fragment>
			<div className={menubarStyles.wrapper}>
				{menuItems_Left}
				{menuItems_Right}
			</div>
			{loading && (
				<BarLoader
					style={{ display: 'flex' }}
					width={1}
					speedMultiplier={0.2}
					color={'#4e75ff'}
					loading={loading}
					height={3}
				/>
			)}
		</Fragment>
	)
}

export default Menubar
