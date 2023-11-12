'use client'
import React, { useEffect, useState } from 'react'
import { EditorContent, useEditor } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'
import TipTapMenubar from './tiptap-menubar'
import { Button } from './ui/button'
import { useDebounce } from '@/lib/useDebounce'

type Props = {}

const TipTapEditor = (props: Props) => {
	const [editorState, setEditorState] = useState('')
	const editor = useEditor({
		autofocus: true,
		extensions: [StarterKit],
		content: editorState,
		onUpdate: ({ editor }) => {
			setEditorState(editor.getHTML())
		}
	})
	const debounceEditorState = useDebounce(editorState, 500)

	useEffect(() => {
		console.log(debounceEditorState)
	}, [debounceEditorState])

	return (
		<>
			<div className="flex">
				{editor && <TipTapMenubar editor={editor} />}
				<Button>Saved</Button>
			</div>
			<div className="prose">
				<EditorContent editor={editor} />
			</div>
		</>
	)
}

export default TipTapEditor
