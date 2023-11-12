import TurndownService from 'turndown'
import markdownpdf from 'markdown-pdf'

const downloadPDF = async (htmlString: string, title: string) => {
	const turdownService = new TurndownService()
	const markdown = turdownService.turndown(htmlString)
}

export default downloadPDF
