'use client'

import { useParams } from 'next/navigation'

import Comp from '@/lib/ux/comps'

import { Fragment, useEffect, useState } from 'react'

const Programme = () => {
	const params = useParams()
	const [data, setData] = useState<{
		id: string
		name: string
		brief: string
	}>()

	useEffect(() => {
		fetch('https://api.jsonbin.io/v3/qs/671d6eadacd3cb34a89d8632').then(
			(data) => {
				data.json().then((res) => {
					const s = res.record.filter(
						(r: { id: string; name: string; brief: string }) => {
							return r.id === params.id
						}
					)
					setData(s[0])
				})
			}
		)
	}, [])

	const content = (
		<Fragment>
			<h1>{data?.name}</h1>
			<h2>{data?.id}</h2>
			<p>{data?.brief}</p>
			<Comp.Btn lbl='Request Application' ldls={false} var={'TRIGGER'} />
		</Fragment>
	)

	return (
		<main>{data ? content : <p>No Such Course Available. Search Here</p>}</main>
	)
}

export default Programme
