

const print  = console.log
console.log("loading context menu receiver")

chrome.runtime.onMessage.addListener((msg, sender,responder)=>{
    
    if (msg.startsWith("alert")){
        alert(msg.slice(5, msg.length - 1))
    }
})