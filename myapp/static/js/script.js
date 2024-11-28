
function sidebarToggle(id){
    let element = document.getElementById(id)
    if(element.querySelector(".fa-solid").classList.contains("fa-bars-staggered")){
        element.querySelector(".fa-solid").classList.remove("fa-bars-staggered")
        element.querySelector(".fa-solid").classList.add("fa-xmark")
        document.querySelector(".sidebar").classList.toggle("sidebarmove")
    } else{
        element.querySelector(".fa-solid").classList.remove("fa-xmark")
        element.querySelector(".fa-solid").classList.add("fa-bars-staggered")
        document.querySelector(".sidebar").classList.toggle("sidebarmove")
    }
}