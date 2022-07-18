const images = [...document.querySelectorAll(".image")]


const photoPopup = document.querySelector(".art-full")
const largePhoto = document.querySelector('.full-img')


const leftSlide = document.querySelector(".left-slide")
const rightSlide = document.querySelector(".right-slide")
 

let index = 0;



images.forEach((item , i) =>{
    item.addEventListener("click",() =>{
updateImg(i);
photoPopup.classList.toggle("open")

    })
})

const updateImg = (i) => {
    let path = `mygallary/photo${i+1}.png`
    largePhoto.src = path
    index = i;
}



leftSlide.addEventListener("click", () =>{
    if(index>0){
        updateImg(index - 1)
    }
})
rightSlide.addEventListener("click", () =>{
    if(index < images.length -1){
        updateImg(index + 1)
    }
})









//paint





const paints = [...document.querySelectorAll(".paint-image")]

const photoPopupPaint = document.querySelector(".art-full-paint")
const largePhotoPaint = document.querySelector('.full-img-paint')

const leftSlidePaint = document.querySelector(".left-slide-paint")
const rightSlidePaint = document.querySelector(".right-slide-paint")
 


let indexs = 0

paints.forEach((item2 , z) =>{
    item2.addEventListener("click",() =>{
updatePaint(z);
photoPopupPaint.classList.toggle("open")

    })
})

const updatePaint = (z) => {
    let path2 = `image/paint${z+1}.png`
    largePhotoPaint.src = path2
indexs = z
}


leftSlidePaint.addEventListener("click", () =>{
    if(indexs>0){
        updatePaint(indexs - 1)
    }
})
rightSlidePaint.addEventListener("click", () => {
if(indexs < paints.length -1){
    updatePaint(indexs + 1)
}
})









photoPopup.addEventListener("click" , (e) => {
    if(e.target.classList.contains("art-full")){
        photoPopup.classList.remove("open")
    }

 }) 
 photoPopupPaint.addEventListener("click" , (e) => {
    if(e.target.classList.contains("art-full-paint")){
        photoPopupPaint.classList.remove("open")
    }

 }) 








