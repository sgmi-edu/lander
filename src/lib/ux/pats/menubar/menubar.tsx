'use client'

import styles from './menubar.module.css'
import Image from 'next/image'
import Link from 'next/link'

import { BarLoader } from 'react-spinners'
import { Fragment, useState } from 'react'

import { useRouter } from 'next/navigation'

type Menubar = {
	setLeft: (f: boolean) => void
	setIsSidebarActive: (f: boolean) => void,
	isSideBarActive?: boolean,
	setBackdropOn: (f: boolean) => void,
	backdropOn?: boolean,
	ctrls: {
		mob_menu: {
			label: string
			src: string
			items: {
				id?: string
				title: string
				brief: string
				criteria?: string
			}[]
		}[]
		left: {
			label: string
			src: string
			items: {
				id?: string
				title: string
				brief: string
				criteria?: string
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

	const router = useRouter()

	const menu_mob = (
		<ul className={styles.itemWrapper}>
			{props.ctrls.mob_menu.map(
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
						<div key={i} className={styles.dropdown}>
							<span className={styles.icon}>
								<Link href={ctrl.src} key={i}>
									{ctrl.label}
								</Link>
								<Image
									width={24}
									height={24}
									src='/assets/icons/chevron-down.svg'
									alt='hamburger'
								/>
							</span>
							<div className={styles.content}>
								{ctrl.items.map(
									(
										c: {
											title: string
											id?: string
											criteria?: string
											brief: string
										},
										i: number
									) => {
										return (
											<div
												style={{ borderRadius: 6, cursor: 'pointer' }}
												onClick={() => {
													router.push(`/${c.criteria}/${c.id}`)
												}}
												className={styles.card}
												key={i}>
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

	const menuItems_Left = (
		<ul className={styles.itemWrapper}>
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
						<div key={i} className={styles.dropdown}>
							<span className={styles.icon}>
								<Link href={ctrl.src} key={i}>
									{ctrl.label}
								</Link>
								<Image
									width={24}
									height={24}
									src='/assets/icons/chevron-down.svg'
									alt='hamburger'
								/>
							</span>
							<div className={styles.content}>
								{ctrl.items.map(
									(
										c: {
											title: string
											id?: string
											criteria?: string
											brief: string
										},
										i: number
									) => {
										return (
											<div
												style={{ borderRadius: 6, cursor: 'pointer' }}
												onClick={() => {
													router.push(`/${c.criteria}/${c.id}`)
												}}
												className={styles.card}
												key={i}>
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
		<ul className={styles.itemWrapper}>
			{props.ctrls.right.map(
				(
					ctrl: {
						label: string
						src: string
					},
					i: number
				) => {
					return (
						<span key={i} className={styles.icon}>
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

	const menuHandler = () => {
		props.setLeft(false)

		props.setBackdropOn(!props.backdropOn)
		props.setIsSidebarActive(!props.isSideBarActive)
	}

	return (
		<Fragment>
			<div className={styles.wrapper}>
				{menuItems_Left}
				{menuItems_Right}
				<Image onClick={() => { menuHandler() }} style={{ cursor: 'pointer' }} height={18} width={18} src={'/assets/icons/burger.svg'} alt={'alt'} />
			</div>
			<div className={styles.mobwrap}>
				{menu_mob}
				<Image onClick={() => menuHandler()} style={{ cursor: 'pointer' }} height={18} width={18} src={'/assets/icons/burger.svg'} alt={'alt'} />
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
