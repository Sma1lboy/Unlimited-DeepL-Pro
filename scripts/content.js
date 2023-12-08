console.log("unlimit plugin running...1")

let handler = setInterval(() => {
    modal = document.getElementById('headlessui-portal-root') 
    console.log(modal);
    if(modal != null) {
        modal = document.getElementById('headlessui-portal-root')
        modal.remove()
        gatsby =  document.getElementById('___gatsby')
        gatsby.removeAttribute('inert')
        console.log("remove successful")
        clearInterval(handler)
    }

}, 100)