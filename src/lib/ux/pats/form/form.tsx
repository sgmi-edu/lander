import Comp from '@/lib/ux/comps'
import styles from './form.module.css'

type Form = {
	variant: string
}

const Form = (props: Form) => {
	const LoginForm = (
		<form className={styles.wrapper}>
			<span>
				<h2>Integrated Students Portal for Managing Everything</h2>
				<p>
					Access exclusive contents and educate yourself from the few clicks
					online. Claim access now
				</p>
			</span>
			<Comp.Inp icon='user.svg' type='text' label='Username' />
			<Comp.Inp icon='lock.svg' type='password' label='Password' />
			<Comp.Btn ldls={false} var='PRIMARY' lbl='Login Now' />
		</form>
	)

	switch (props.variant) {
		case 'LOGIN':
			return LoginForm
			break

		default:
			break
	}
}

export default Form