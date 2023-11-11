'use client'
import React from 'react'
import Typewriter from 'typewriter-effect'

type Props = {}

const TypewriterTitle = (props: Props) => {
	return (
		<Typewriter
			options={{
				loop: true
			}}
			onInit={typewriter => {
				typewriter
					.typeString('Effortless Note-Taking.')
					.pauseFor(1000)
					.deleteAll()
					.typeString('Your Ideas, Amplified.')
					.pauseFor(1000)
					.deleteAll()
					.typeString('Adapt, Learn, and Propel: At Your Fingertips.')
					.pauseFor(1000)
					.deleteAll()
					.typeString('Inspiration Meets Innovation.')
					.start()
			}}
		/>
	)
}

export default TypewriterTitle
