const electron = require('electron')
const countdown = require('./countdown')

const app = electron.app
const BrowserWindow = electron.BrowserWindow
const ipc = electron.ipcMain

// let mainWindow
const windows = []


app.on('ready', _ => {
    // console.log('ready!')
    [1, 2, 3].forEach((_) => {
        console.log('ready!')
        let win = new BrowserWindow({
            height: 400,
            width: 400
        })

        win.loadURL(`file://${__dirname}/countdown.html`)

        win.on('closed', _ => {
            console.log('closed!')
            win = null
        })
        windows.push(win)
    })
})

ipc.on('countdown-start', () => {
    countdown((count) => {
        windows.forEach((win) => {
            win.webContents.send('countdown', count)
        })
    })
})