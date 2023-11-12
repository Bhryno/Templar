import { Button } from '@/components/ui/button'
import TypewriterTitle from '@/components/ui/typewriter-title'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
	return (
		<div className="min-h-screen bg-slate-100">
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
				<h1 className="font-semibold text-7xl text-center">
					A powerful{' '}
					<span className="text-red-500 font-bold">note-taking</span>{' '}
					assistant.
				</h1>
				<div className="mt-4"></div>
				<h2 className="font-semibold text-3xl text-center text-slate-700">
					<TypewriterTitle />
				</h2>
				<div className="mt-8"></div>
				<div className="flex justify-center">
					<Link href="/dashboard">
						<Button className="bg-red-500">
							Get Started
							<ArrowRight
								className="ml-2 w-5 h-5"
								strokeWidth={3}
							/>
						</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}
