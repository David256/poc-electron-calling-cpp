const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const addon = require('./addons')

app.whenReady().then(() => {
	const mainWindow = new BrowserWindow({
		webPreferences: {
			preload: path.join(__dirname, 'preload.cjs'),
		},
		autoHideMenuBar: true,
	})
	mainWindow.loadFile(path.join('html/index.html'))
	// mainWindow.webContents.openDevTools()

	ipcMain.handle('click', () => {
		console.log('click event emitted')

		const result = addon.processArrays(
			[2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
			[7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
			0.34,
		)

		mainWindow.webContents.send('result', result)
	})

	ipcMain.on('touch', () => {
		console.log('touch event emitted')
	})
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
