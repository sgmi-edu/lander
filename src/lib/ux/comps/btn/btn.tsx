'use client'

import { BeatLoader } from 'react-spinners'
import { useState } from 'react'

import styles from './btn.module.css'

import Image from 'next/image'

type Btn = {
	var: string
	lbl: string
	ldls: boolean
	ext?: boolean
}

const Btn = (props: Btn) => {
	const [loading, setLoader] = useState<boolean>(false)

	return (
		<button
			style={props.var === 'SECONDARY' ? { backgroundColor: 'black' } : {}}
			className={props.var === 'TRIGGER' ? styles.TRIGGER : styles.PRIMARY}
			onClick={(e) => {
				e.preventDefault()
				setLoader(!loading)
			}}>
			{loading && (
				<BeatLoader
					color={'white'}
					loading={loading}
					speedMultiplier={1}
					size={6}
				/>
			)}
			{loading ? 'Processing' : props.lbl}
			{props.ext && (
				<Image
					height={18}
					width={18}
					src={'/assets/icons/ext.svg'}
					alt={'external'}
				/>
			)}
		</button>
	)
}

export default Btn
