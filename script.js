const slides = document.querySelectorAll('.slide');

slides.forEach(slide=>{
    slide.addEventListener('click',()=>{
        slides.forEach(item => {
            item.classList.remove('active');
        })
        slide.classList.add('active');
    })
})

// function removeActive(array) {
//     array.forEach(item => {
//         item.classList.remove('active');
//     })
// }