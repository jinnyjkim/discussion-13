window.addEventListener("load", function(){
    console.log(document.querySelector("#billing").value)
})

document.getElementsByName("useBilling").addEventListener("click", function(){
    console.log("Same As Above");
    document.querySelector("#billing").value = document.querySelector("#home").value
})