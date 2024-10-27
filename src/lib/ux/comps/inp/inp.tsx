import styles from './inp.module.css'

type Inp = {
	type: string
	icon: string
	label: string
}
const Inp = (props: Inp) => {
	return (
		<input
			style={{
				backgroundImage: `url('/assets/icons/${props.icon}'), url('/assets/icons/check-circle.svg')`,
				backgroundRepeat: 'no-repeat, no-repeat',
				backgroundPosition: 'left 12px center, right 12px center',
				padding: '12px 42px 12px 46px',
			}}
			type={props.type}
			className={styles.wrapper}
			placeholder={props.label}
		/>
	)
}

export default Inp
