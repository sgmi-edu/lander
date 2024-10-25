import { Button } from '@/comps'
import { heroStyles } from '@/styles/lays'
import Link from 'next/link'

const Hero = () => {
	return (
		<section className={heroStyles.wrapper}>
			<span style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
				<h4>Launch Your Career</h4>

				<h1>Make Bold Career Moves</h1>
				<p>
					SGMI Garages is a go to place for securing your future with job
					readiness in technology field. With our curated programmes equip
					yourself to attain skills that will speak for rest of your life
				</p>
			</span>
			<span style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
				<Button variant='TRIGGER' label='Apply Now' loading={false} />
				<Link href={''}>Explore Programmes</Link>
			</span>
		</section>
	)
}

export default Hero
