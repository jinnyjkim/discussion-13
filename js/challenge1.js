document.querySelector("#toggle").addEventListener("click", function(){
    var email = document.querySelector("#emailBox");
    if (email.style.display === "block") {
        email.style.display = "none";
    }
    else {
        email.style.display = "block";
    }
})