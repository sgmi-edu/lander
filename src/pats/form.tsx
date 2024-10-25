import { Button, Input } from '@/comps'
import { formStyles } from '@/styles/pats'

type Form = {
	variant: string
}

const Form = (props: Form) => {
	const LoginForm = (
		<form className={formStyles.wrapper}>
			<span>
				<h2>Integrated Students Portal for Managing Everything</h2>
				<p>
					Access exclusive contents and educate yourself from the few clicks
					online. Claim access now
				</p>
			</span>
			<Input icon='/assets/icons/user.svg' type='text' label='Username' />
			<Input icon='/assets/icons/lock.svg' type='password' label='Password' />
			<Button loading={false} variant='PRIMARY' label='Login Now' />
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
