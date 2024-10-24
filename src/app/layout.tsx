import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'

import './globals.css'

const Typeface = Plus_Jakarta_Sans({ subsets: ['latin'], weight: '500' })

export const metadata: Metadata = {
	title: 'SGMI | Global Education',
	description:
		'Sarvaloka Global Mission Institute, is a non profitable educational organization aiming to bridge the gap between quality of education and affordability in low GDP natitions with its alternating lifeskill education and self-centered education approaches',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${Typeface.className} ${Typeface.className}`}>
				{children}
			</body>
		</html>
	)
}
