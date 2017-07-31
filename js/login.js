const ipcRenderer = require('electron').ipcRenderer;

//what on earth do i need here
//im super confused now

function login(){
    ipcRenderer.send('login', account)
}
