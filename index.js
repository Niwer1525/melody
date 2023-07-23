const { app, BrowserWindow, screen } = require('electron');
const path = require('path');

app.whenReady().then(() => {
    let { width, height } = screen.getPrimaryDisplay().workAreaSize
    let cordovaDir = path.join('melody/www/'); 

    /* Limit the size of the window */
    if(width > 400) width = 400;
    if(height > 620) height = 620;

    const win = new BrowserWindow({
        width: width,
        height: height,
        webPreferences: { preload: path.join(cordovaDir, 'preload.js'), },
        resizable: false,
        autoHideMenuBar: true
    });
    win.loadFile(path.join(cordovaDir, 'index.html'));
});