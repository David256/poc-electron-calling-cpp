const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('functions', {
	node: () => process.versions.node,
	chrome: () => process.versions.chrome,
	electron: () => process.versions.electron,
	click: () => {
		ipcRenderer.invoke('click')
		ipcRenderer.send('touch')
	},
	onResult: (fn) => {
		ipcRenderer.on('result', fn)
	},
	// we can also expose variables, not just functions
})
