// const fullArt = document.querySelector(".art-full") 
// const previews = document.querySelectorAll(".gallary img")
// const original = document.querySelector(".full-img")
// const caption = document.querySelector(".para-content")

// previews.forEach(preview => {
//     preview.addEventListener("click", () => { 

// fullArt.classList.add("open")
// original.classList.add("open")
// const originalSrc = preview.getAttribute("data-original")
// original.src =`./preview/${originalSrc}`
// const altText = preview.alt
// caption.textContent = altText
 
// })
// })

// fullArt.addEventListener("click" , (e) => {
//     if(e.target.classList.contains("art-full")){
//         fullArt.classList.remove("open")
// original.classList.remove("open")
//     }

// }) 


const openBtn = document.querySelector(".open")
const closeBtn = document.querySelector(".closed")


openBtn.addEventListener("click", () =>{
if(closeBtn.classList.contains("closed")){
    closeBtn.classList.add("active")

    openBtn.classList.remove("active")
}

})
closeBtn.addEventListener("click", () =>{
    if(openBtn.classList.contains("open")){
        openBtn.classList.add("active")
        closeBtn.classList.remove("active")
    }
})



function toogleMenu(){
    const navbar = document.querySelector(".nav-container")
    navbar.classList.toggle("mobile-menu")
}



const images = [...document.querySelectorAll(".image")]

const artPopup = document.querySelector(".art-full")
const largeImg = document.querySelector(".full-img")
const para = document.querySelector(".para")
const leftSlide = document.querySelector(".left-slide")
const rightSlide = document.querySelector(".right-slide")


let index = 0;


images.forEach((item, i) => {
 item.addEventListener("click",() =>{
    updateImg(i);
artPopup.classList.toggle("open")

 })
})
const updateImg = (i) => {
    let path = `image/paint${i+1}.png`
largeImg.src = path
index = i;
}
leftSlide.addEventListener("click", () =>{
    if(index > 0){
        updateImg(index - 1)
    }
})
rightSlide.addEventListener("click", () =>{
    if(index < images.length -1 ){
        updateImg(index +  1)
    }
})


 artPopup.addEventListener("click" , (e) => {
    if(e.target.classList.contains("art-full")){
        artPopup.classList.remove("open")
    }

 }) 





