console.log("unlimit plugin running...1")

let handler = setInterval(() => {
    modal = document.getElementById('headlessui-dialog-36')
    console.log(modal);
    if(modal != null) {
        modal.remove()
        gatsby =  document.getElementById('___gatsby')
        gatsby.removeAttribute('inert')
        console.log("remove successful")
        clearInterval(handler)
    }

}, 100)