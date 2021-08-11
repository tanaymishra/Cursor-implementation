const cursor= document.querySelector(".cursor")
window.addEventListener("mousemove",(e)=>{
    if(e.target.classList.contains("btn-acc")){
        cursor.innerHTML="<h1>Tap</h1>"
        cursor.classList.add("c-active")
        cursor.style.top=e.pageY-25+"px"
        cursor.style.left=e.pageX-17+"px"
    }
    else{
        cursor.innerHTML=""
        cursor.classList.remove("c-active")
        cursor.style.top=e.pageY-17+"px"
        cursor.style.left=e.pageX-17+"px"
    }
})
document.querySelectorAll("a").forEach((e)=>{
    e.classList.add("btn-acc")
})