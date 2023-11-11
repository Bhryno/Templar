'use client'
import React, { useState } from 'react'
import axios from 'axios'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from './ui/dialog'
import { Plus } from 'lucide-react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useMutation } from '@tanstack/react-query'

type Props = {}

const CreateNoteDialog = (props: Props) => {
	const [input, setInput] = useState('')
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (input === '') {
			window.alert('Note name cannot be an empty string.')
		}
		createNote.mutate(undefined, {
			onSuccess: () => console.log('Note created'),
			onError: error => console.log(error)
		})
	}
	const createNote = useMutation({
		mutationFn: async () => {
			const response = await axios.post('/api/createNote', {
				name: input
			})

			return response.data
		}
	})

	return (
		<Dialog>
			<DialogTrigger>
				<div className="border-dashed border-2 flex border-yellow-300 h-full rounded-lg items-center justify-center sm:flex-col hover:shadow-xl transition hover:-translate-y-1 flex-row p-4">
					<Plus className="w-6 h-6 text-yellow-300" strokeWidth={3} />
					<h2 className="font-semibold text-yellow-300 sm:mt-2">
						Create New Note
					</h2>
				</div>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Create New Note</DialogTitle>
					<DialogHeader>
						You can create a new note by clicking the button below.
					</DialogHeader>
				</DialogHeader>
				<form onSubmit={handleSubmit}>
					<Input
						value={input}
						onChange={e => setInput(e.target.value)}
						placeholder="e.g. the quick brown fox jumps over the lazy dog"
					/>
					<div className="h-4"></div>
					<div className="flex items-center gap-2">
						<Button type="reset" variant={'secondary'}>
							Cancel
						</Button>
						<Button type="submit" className="bg-yellow-300">
							Create
						</Button>
					</div>
				</form>
			</DialogContent>
		</Dialog>
	)
}

export default CreateNoteDialog
