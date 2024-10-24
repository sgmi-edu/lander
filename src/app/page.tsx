'use client'

import React from 'react'
import { Head, Shoutbar, Tail, Menubar } from '../comps'
import Settings from '../../public/config/settings.json'

export default function Home() {
	const [shoutbarStats, shoutbarFunc] = React.useState({
		status: 'INACTIVE',
	})

	React.useEffect(() => {
		shoutbarFunc({
			...shoutbarStats,
			status: 'ACTIVE',
		})
	}, [shoutbarStats])

	return (
		<React.Fragment>
			{shoutbarStats.status === 'ACTIVE' && <Shoutbar />}
			<Head />
			<Menubar ctrls={Settings.menuCtrls} />
			<Tail />
		</React.Fragment>
	)
}
