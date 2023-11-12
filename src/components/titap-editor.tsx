'use client'
import React, { useEffect, useState } from 'react'
import { EditorContent, useEditor } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'
import TipTapMenubar from './tiptap-menubar'
import { Button } from './ui/button'
import { useDebounce } from '@/lib/useDebounce'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { NoteType } from '@/lib/db/schema'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'

type Props = {
	note: NoteType
}

const TipTapEditor = ({ note }: Props) => {
	const [editorState, setEditorState] = useState(
		note.editorState || `<h1>${note.name}</h1>`
	)
	const saveNote = useMutation({
		mutationFn: async () => {
			const response = await axios.post('/api/saveNote', {
				noteId: note.id,
				editorState
			})

			return response.data
		}
	})

	const editor = useEditor({
		autofocus: true,
		extensions: [
			StarterKit,
			Table.configure({
				resizable: true,
				allowTableNodeSelection: true,
				lastColumnResizable: true
			}),
			TableRow,
			TableHeader,
			TableCell
		],
		content: editorState,
		onUpdate: ({ editor }) => {
			setEditorState(editor.getHTML())
		}
	})
	const debounceEditorState = useDebounce(editorState, 500)

	useEffect(() => {
		if (debounceEditorState === '') return
		saveNote.mutate(undefined, {
			onSuccess: data => console.log('Successful update', data),
			onError: err => console.error(err)
		})
	}, [debounceEditorState])

	return (
		<>
			<div className="flex">
				{editor && <TipTapMenubar editor={editor} />}
				<Button disabled variant={'outline'}>
					{saveNote.isPending ? 'Saving...' : 'Saved'}
				</Button>
			</div>
			<div className="prose porse-sm w-full mt-4">
				<EditorContent editor={editor} />
			</div>
		</>
	)
}

export default TipTapEditor
