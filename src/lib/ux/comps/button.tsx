'use client'

import { BeatLoader } from 'react-spinners'
import { useState } from 'react'

import { buttonStyles } from '../styles'

type Button = {
	variant: string
	label: string
	loading: boolean
}

const Button = (props: Button) => {
	const [loading, setLoader] = useState<boolean>(false)

	switch (props.variant) {
		case 'PRIMARY':
			return (
				<button
					className={buttonStyles.primary}
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
					{loading ? 'Processing' : props.label}
				</button>
			)
			break
		case 'SECONDARY':
			return <button>{props.label}</button>
			break
		case 'TRIGGER':
			return (
				<button
					className={buttonStyles.trigger}
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
					{loading ? 'Processing' : props.label}
				</button>
			)
			break
		case 'DISABLED':
			return <button>{props.label}</button>
			break
		default:
			return <button>{props.label}</button>
			break
	}
}

export default Button
