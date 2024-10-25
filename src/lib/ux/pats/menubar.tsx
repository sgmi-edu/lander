'use client'

import { menubarStyles } from '@/lib/ux/styles'
import Image from 'next/image'
import Link from 'next/link'

import { BarLoader } from 'react-spinners'
import { Fragment, useState } from 'react'

type Menubar = {
	ctrls: {
		left: {
			label: string
			src: string
			items: {
				title: string
				brief: string
			}[]
		}[]
		right: {
			label: string
			src: string
			items: {
				title: string
				brief: string
			}[]
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
						items: {
							title: string
							brief: string
						}[]
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
								{ctrl.items.map(
									(
										c: {
											title: string
											brief: string
										},
										i: number
									) => {
										return (
											<div className={menubarStyles.card} key={i}>
												<h2>{c.title}</h2>
												<p style={{ textAlign: 'justify' }}>{c.brief}</p>
											</div>
										)
									}
								)}
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
