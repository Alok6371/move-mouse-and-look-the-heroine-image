var elem = document.querySelectorAll(".elem")

var elemImage = document.querySelector("#elem1 img")
elem1.addEventListener("mousemove", function (dets) {
    elemImage.style.left = dets.x + "px"
    elemImage.style.top = dets.y + "px"
})
elem1.addEventListener("mouseenter", function () {
    elemImage.style.opacity = 1
})
elem1.addEventListener("mouseleave", function () {
    elemImage.style.opacity = 0
})


///////////////////////////////


var elemImage2 = document.querySelector("#elem2 img")

elem2.addEventListener("mousemove", function (dets) {
    elemImage2.style.left = dets.x + "px"
    elemImage2.style.top = dets.y + "px"
})
elem2.addEventListener("mouseenter", function () {
    elemImage2.style.opacity = 1
})
elem2.addEventListener("mouseleave", function () {
    elemImage2.style.opacity = 0
})


//////////////////////////


var elemImage3 = document.querySelector("#elem3 img")
elem3.addEventListener("mousemove", function (dets) {
    elemImage3.style.left = dets.x + "px"
    elemImage3.style.top = dets.y + "px"
})
elem3.addEventListener("mouseenter", function () {
    elemImage3.style.opacity = 1
})
elem3.addEventListener("mouseleave", function () {
    elemImage3.style.opacity = 0
})


//////////////////////////

var elemImage4 = document.querySelector("#elem4 img")
elem4.addEventListener("mousemove", function (dets) {
    elemImage4.style.left = dets.x + "px"
    elemImage4.style.top = dets.y + "px"
})
elem4.addEventListener("mouseenter", function () {
    elemImage4.style.opacity = 1
})
elem4.addEventListener("mouseleave", function () {
    elemImage4.style.opacity = 0
})

// elem.forEach (function(val){
//     console.log(val.childNodes[3])
//     val.addEventListener("mouseenter",function(){
//         val.childNodes[3].style.opacity=1
//     });
//     val.addEventListener("mouseleave",function(){
//         val.childNodes[3].style.opacity=0
//     })
//     val.addEventListener("mousemove",function(dets){

//         val.childNodes[3].style.left=dets.x=+"px"
//         // console.log(dets.x+"px")
//         val.childNodes[3].style.top=dets.y+"px"
//         // console.log("y=",dets.y+"px")
//     })
// });
