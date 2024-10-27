'use client'


import { Form } from '@/lib/ux/pats'


import Image
	from 'next/image'
import { useRouter } from 'next/navigation'

const Auth = () => {
	const router = useRouter()
	return (
		<main>
			<Image style={{ cursor: 'pointer' }} onClick={() => { router.push('/') }} height={180} width={180} src={'/assets/brand.svg'} alt={'logo'} />
			<Form variant='LOGIN' />
		</main>
	)
}

export default Auth
