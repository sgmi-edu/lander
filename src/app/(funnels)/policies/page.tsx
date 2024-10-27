import Policy from '../../../../public/config/policies.json'

const Policies = () => {
	return (
		<main>
			<h1>{Policy.title}</h1>
			{Policy.policies.map((policy, i) => {
				return (
					<section key={i} style={{ margin: '24px 0px' }}>
						<h4>{policy.label}</h4>
						<p style={{ maxWidth: '520px', textAlign: 'justify' }}>
							{policy.brief}
						</p>
						{policy.policies.map((pol, i) => {
							return (
								<div key={i} style={{ margin: '8px 24px' }}>
									<b>{pol.policy_name} </b>
									<p style={{ maxWidth: '520px', textAlign: 'justify' }}>
										{pol.policy_term}
									</p>
								</div>
							)
						})}
					</section>
				)
			})}
		</main>
	)
}

export default Policies
