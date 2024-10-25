import { Button, Input } from '@/lib/ux/comps'

const Support = () => {
	return (
		<main>
			<h2 style={{ textAlign: 'center' }}>Welcome to Support Center</h2>
			<p style={{ textAlign: 'center', margin: '24px' }}>
				We have the best grievance resolution mechanism to support our students,
				parents and ecosystem
			</p>
			<div
				style={{
					display: 'grid',
					gridGap: '16px',
					margin: '0px 0px 24px 0px',
				}}>
				<Input type='text' icon={'/assets/icons/user.svg'} label='Name' />
				<Input type='text' icon={'/assets/icons/lock.svg'} label='Related To' />
			</div>

			<Button
				variant='PRIMARY'
				label='Raise a Support Ticket'
				loading={false}
			/>
		</main>
	)
}

export default Support
