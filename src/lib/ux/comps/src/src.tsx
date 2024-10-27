import styles from './src.module.css'

type Src = {
	label: string
}

const Src = (props: Src) => {



	return (
		<input
			style={{
				backgroundImage: `url('/assets/icons/search.svg')`,
				backgroundRepeat: 'no-repeat, no-repeat',
				backgroundPosition: 'left 12px center, right 12px center',
				padding: '12px 42px 12px 46px',

			}}
			className={styles.search}
			placeholder={props.label}
		/>
	)
}

export default Src
