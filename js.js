const testimonial = document.querySelector(".testimonial-container")
const buttons = [...
    document.querySelectorAll(".buttons-container .btn ")
]
buttons.forEach((button, index) => {
    button.onclick = function(e) {
        changeSlide(index)
    }

})
let i = 0
testimonial.addEventListener("scroll", e => {
    const scrollLeft = e.target.scrollLeft
    const wS = (testimonial.scrollWidth / 4)
    buttons.forEach((button) => {
        button.classList.remove("bg-success")
    })
    if (scrollLeft >= (wS * 3)) {
        buttons[3].classList.add("bg-success")
    } else if (scrollLeft >= (wS * 2)) {
        console.log("enter here");
        buttons[2].classList.add("bg-success")
    } else if (scrollLeft >= wS) {
        buttons[1].classList.add("bg-success")
    } else {
        buttons[0].classList.add("bg-success")
    }
})


function changeSlide(index) {
    const sW = testimonial.scrollWidth / 4
    buttons.forEach((button) => {
        button.classList.remove("bg-success")
    })
    buttons[index].classList.add("bg-success")
    testimonial.scrollLeft = sW * index
}

function check() {
    const L = buttons.length - 1
        ++i
    if (i > L) {
        i = 0
    }
    if (i < 0) {
        i = L
    }

}
setInterval(() => {
    check()
    changeSlide(i)
}, 5000);