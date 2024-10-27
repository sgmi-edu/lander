import Image from 'next/image'

type Img = {
	variant: string
	img: string
	alt: string
	w: number
	h: number
}

const Img = (props: Img) => {
	switch (props.variant) {
		case 'BRAND':
			return (
				<Image
					width={props.w}
					height={props.h}
					src={props.img}
					alt={props.alt}
				/>
			)
			break

		default:
			break
	}
}

export default Img
