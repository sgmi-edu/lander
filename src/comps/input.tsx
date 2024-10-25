import { inputStyles } from '@/styles'

type Input = {
	type: string
	icon: string
	label: string
}
const Input = (props: Input) => {
	return (
		<input
			style={{
				backgroundImage: `url('${props.icon}'), url('/assets/icons/check-circle.svg')`,
				backgroundRepeat: 'no-repeat, no-repeat',
				backgroundPosition: 'left 12px center, right 12px center',
				padding: '12px 42px 12px 46px',
			}}
			type={props.type}
			className={inputStyles.wrapper}
			placeholder={props.label}
		/>
	)
}

export default Input
