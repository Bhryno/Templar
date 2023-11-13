const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

function createWindow() {
	const mainWindow = new BrowserWindow({
		width: 1280,
		height: 720,
		webPreferences: {
			devTools: false,
		},
		autoHideMenuBar: true,
		vibrancy: 'under-window',
		visualEffectState: 'active'
	})

	mainWindow.loadURL('https://templar-woad.vercel.app/dashboard')
}

app.whenReady().then(() => {
	createWindow()
	app.on('activate', function () {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow()
		}
	})
})

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})
