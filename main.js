// ./main.js
require('electron-reload')(__dirname);

const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');
const {autoUpdater} = require('electron');


require('dotenv').config();
let win = null;

app.on('ready', function () {



  // Implement autoUpdater

  var os=require('os');
  var platform=os.platform() + '_' + os.arch();
  var version=app.getVersion();

  autoUpdater.setFeedURL('https://160.91.52.203:5000/download/'+platform+'/'+version);
  autoUpdater.addListener("update-available", function(event) {
  });
  autoUpdater.addListener("update-download", function(event,    releaseNotes, releaseName, releaseDate, updateURL) {
    autoUpdater.quitAndInstall();
  });
  autoUpdater.addListener("error", function(error) {
  });
  autoUpdater.addListener("checking-for-update", function(event) {
  });
  autoUpdater.addListener("update-not-available", function(event) {
  });
  autoUpdater.checkForUpdates();

  // Initialize the window to our specified dimensions
  win = new BrowserWindow({width: 1000, height: 600});
  win.maximize();

  // Specify entry point
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'dist/index.html'),
      protocol: 'file',
      slashes: true
    }));


  // Remove window once app is closed
  win.on('closed', function () {
    win = null;
  });

});

app.on('activate', () => {
  if (win === null) {
  createWindow()
}
})

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});
