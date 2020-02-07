document.oncopy = e =>{
    e.clipboardData.setData('text',window.getSelection())
}