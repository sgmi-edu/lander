import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Libre_Baskerville } from 'next/font/google'

import React from 'react'
import { Head, Tail, Menubar } from '@/lib/ux/pats'
import Settings from '../../public/config/settings.json'
import './globals.css'

export const metadata: Metadata = {
	title: 'SGMI | Global Education',
	description:
		'Sarvaloka Global Mission Institute, is a non profitable educational organization aiming to bridge the gap between quality of education and affordability in low GDP natitions with its alternating lifeskill education and self-centered education approaches',
}

const Jakarta = Plus_Jakarta_Sans({
	subsets: ['latin'],
	variable: '--jakarta',
	weight: '500',
})

const Libre = Libre_Baskerville({
	subsets: ['latin'],
	variable: '--libre',
	weight: '700', // Choose the appropriate weight as per the Google Fonts page
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	// const [shoutbarStats, shoutbarFunc] = React.useState({
	// 	status: 'INACTIVE',
	// })

	// React.useEffect(() => {
	// 	shoutbarFunc({
	// 		...shoutbarStats,
	// 		status: 'ACTIVE',
	// 	})
	// }, [])

	return (
		<html lang='en'>
			<body className={`${Jakarta.variable} ${Libre.variable}`}>
				{/* {shoutbarStats.status === 'ACTIVE' && 
				<Shoutbar />} */}
				{/* <Shoutbar /> */}
				<Head />
				<Menubar ctrls={Settings.menuCtrls} />
				<Tail />
				{children}
			</body>
		</html>
	)
}
