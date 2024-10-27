import Comp from '@/lib/ux/comps'

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
				<Comp.Inp type='text' icon={'user.svg'} label='Name' />
				<Comp.Inp type='text' icon={'lock.svg'} label='Related To' />
			</div>

			<Comp.Btn var='PRIMARY' lbl='Raise a Support Ticket' ldls={false} />
		</main>
	)
}

export default Support
