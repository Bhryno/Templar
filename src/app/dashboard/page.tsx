import CreateNoteDialog from '@/components/create-note-dialog'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { db } from '@/lib/db'
import { $notes } from '@/lib/db/schema'
import { UserButton, auth } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {}

const DashboardPage = async (props: Props) => {
	const { userId } = auth()
	const notes = await db
		.select()
		.from($notes)
		.where(eq($notes.userId, userId!))

	return (
		<>
			<div className="min-h-screen select-none">
				<div className="max-w-7xl mx-auto p-10">
					<div className="h-14"></div>
					<div className="flex justify-between items-center md:flex-row sm:flex-col">
						<div className="flex items-center">
							<Link href="/">
								<Button className="bg-purple-400" size="sm">
									<ArrowLeft className="mr-1 w-4 h-4" />
									Back
								</Button>
							</Link>
							<div className="w-4"></div>
							<h1 className="text-3xl font-bold text-gray-600">
								My Notes
							</h1>
							<div className="w-4"></div>
							<UserButton />
						</div>
					</div>
					<div className="h-8"></div>
					<Separator />
					<div className="h-8"></div>

					{/* List of notes */}
					{notes.length === 0 && (
						<div className="text-center">
							<h2 className="text-xl text-gray-500">
								All empty in here...
							</h2>
						</div>
					)}
					<div className="grid sm:grid-cols-3 md:grid-cols-5 grid-cols-1 gap-3">
						<CreateNoteDialog />
						{notes.map(note => {
							return (
								<a href={`/note/${note.id}`} key={note.id}>
									<div className="border border-stone-200 rounded-lg overflow-hidden flex flex-col hover:shadow-xl transition hover:-translate-y-1">
										<div className="p-4">
											<h3 className="text-xl font-semibold text-gray-900">
												{note.name}
											</h3>
											<div className="h-1"></div>
											<p className="text-sm text-gray-500">
												{new Date(
													note.createdAt
												).toLocaleDateString()}
											</p>
										</div>
									</div>
								</a>
							)
						})}
					</div>
				</div>
			</div>
		</>
	)
}

export default DashboardPage
