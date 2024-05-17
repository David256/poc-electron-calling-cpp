const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

ipcMain.handle('click', () => {
	console.log('click event emitted')
})

ipcMain.on('touch', () => {
	console.log('touch event emitted')
})

app.whenReady().then(() => {
	const mainWindow = new BrowserWindow({
		webPreferences: {
			preload: path.join(__dirname, 'preload.cjs'),
		},
		autoHideMenuBar: true,
	})
	mainWindow.loadFile(path.join('build/index.html'))
	// mainWindow.webContents.openDevTools()
})

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

// other events

app.on('click', () => {
	//
	console.log("'what is that")
})
