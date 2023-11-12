import { Editor } from '@tiptap/react'
import {
	Bold,
	Code,
	Codepen,
	Download,
	FlipHorizontal,
	FlipVertical,
	Heading1,
	Heading2,
	Heading3,
	Italic,
	List,
	ListOrdered,
	PanelBottom,
	PanelLeft,
	PanelRight,
	PanelTop,
	Quote,
	Redo,
	SeparatorHorizontal,
	Strikethrough,
	TableIcon,
	Undo
} from 'lucide-react'

import downloadPDF from '@/lib/pdf-download'

type Props = {
	editor: Editor
}

const TipTapMenubar = ({ editor }: Props) => {
	return (
		<div className="flex flex-wrap gap-2">
			<button
				onClick={() => editor.chain().focus().undo().run()}
				disabled={!editor.can().chain().focus().undo().run()}
			>
				<Undo className="w-6 h-6" />
			</button>
			<button
				onClick={() => editor.chain().focus().redo().run()}
				disabled={!editor.can().chain().focus().redo().run()}
			>
				<Redo className="w-6 h-6" />
			</button>
			<button
				onClick={() => editor.chain().focus().toggleBold().run()}
				disabled={!editor.can().chain().focus().toggleBold().run()}
				className={editor.isActive('bold') ? 'is-active' : ''}
			>
				<Bold className="w-6 h-6" />
			</button>
			<button
				onClick={() => editor.chain().focus().toggleItalic().run()}
				disabled={!editor.can().chain().focus().toggleItalic().run()}
				className={editor.isActive('italic') ? 'is-active' : ''}
			>
				<Italic className="w-6 h-6" />
			</button>
			<button
				onClick={() => editor.chain().focus().toggleStrike().run()}
				disabled={!editor.can().chain().focus().toggleStrike().run()}
				className={editor.isActive('strike') ? 'is-active' : ''}
			>
				<Strikethrough className="w-6 h-6" />
			</button>
			<button
				onClick={() => editor.chain().focus().toggleCode().run()}
				disabled={!editor.can().chain().focus().toggleCode().run()}
				className={editor.isActive('code') ? 'is-active' : ''}
			>
				<Code className="w-6 h-6" />
			</button>
			<button
				onClick={() =>
					editor.chain().focus().toggleHeading({ level: 1 }).run()
				}
				disabled={
					!editor
						.can()
						.chain()
						.focus()
						.toggleHeading({ level: 1 })
						.run()
				}
				className={
					editor.isActive('heading', { level: 1 }) ? 'is-active' : ''
				}
			>
				<Heading1 className="w-6 h-6" />
			</button>
			<button
				onClick={() =>
					editor.chain().focus().toggleHeading({ level: 2 }).run()
				}
				disabled={
					!editor
						.can()
						.chain()
						.focus()
						.toggleHeading({ level: 2 })
						.run()
				}
				className={
					editor.isActive('heading', { level: 2 }) ? 'is-active' : ''
				}
			>
				<Heading2 className="w-6 h-6" />
			</button>
			<button
				onClick={() =>
					editor.chain().focus().toggleHeading({ level: 3 }).run()
				}
				disabled={
					!editor
						.can()
						.chain()
						.focus()
						.toggleHeading({ level: 3 })
						.run()
				}
				className={
					editor.isActive('heading', { level: 3 }) ? 'is-active' : ''
				}
			>
				<Heading3 className="w-6 h-6" />
			</button>
			<button
				onClick={() => editor.chain().focus().toggleBulletList().run()}
				className={editor.isActive('bulletList') ? 'is-active' : ''}
			>
				<List className="w-6 h-6" />
			</button>
			<button
				onClick={() => editor.chain().focus().toggleOrderedList().run()}
				className={editor.isActive('orderedList') ? 'is-active' : ''}
			>
				<ListOrdered className="w-6 h-6" />
			</button>
			<button
				onClick={() =>
					editor.isActive('table')
						? editor.chain().focus().deleteTable().run()
						: editor
								.chain()
								.focus()
								.insertTable({
									rows: 2,
									cols: 2,
									withHeaderRow: true
								})
								.run()
				}
				className={editor.isActive('table') ? 'is-active' : ''}
			>
				<TableIcon className="w-6 h-6" />
			</button>
			<button
				onClick={() => editor.chain().focus().addColumnBefore().run()}
			>
				<PanelLeft className="w-6 h-6" />
			</button>
			<button
				onClick={() => editor.chain().focus().addColumnAfter().run()}
			>
				<PanelRight className="w-6 h-6" />
			</button>
			<button onClick={() => editor.chain().focus().addRowBefore().run()}>
				<PanelTop className="w-6 h-6" />
			</button>
			<button onClick={() => editor.chain().focus().addRowAfter().run()}>
				<PanelBottom className="w-6 h-6" />
			</button>
			<button onClick={() => editor.chain().focus().deleteColumn().run()}>
				<FlipHorizontal className="w-6 h-6" />
			</button>
			<button onClick={() => editor.chain().focus().deleteRow().run()}>
				<FlipVertical className="w-6 h-6" />
			</button>
			<button
				onClick={() => editor.chain().focus().toggleCodeBlock().run()}
				disabled={!editor.can().chain().focus().toggleCodeBlock().run()}
				className={editor.isActive('codeBlock') ? 'is-active' : ''}
			>
				<Codepen className="w-6 h-6" />
			</button>
			<button
				onClick={() => editor.chain().focus().toggleBlockquote().run()}
				disabled={
					!editor.can().chain().focus().toggleBlockquote().run()
				}
				className={editor.isActive('blockquote') ? 'is-active' : ''}
			>
				<Quote className="w-6 h-6" />
			</button>
			<button
				onClick={() => editor.chain().focus().setHorizontalRule().run()}
				disabled={
					!editor.can().chain().focus().setHorizontalRule().run()
				}
			>
				<SeparatorHorizontal className="w-6 h-6" />
			</button>
			<button onClick={() => downloadPDF(editor.getHTML(), 'download')}>
				<Download className="w-6 h-6" />
			</button>
		</div>
	)
}

export default TipTapMenubar
