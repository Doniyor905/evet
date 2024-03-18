
const random = (min,max) => {
    const rand = min + Math.random() * (max - min + 1)
    return Math.floor(rand)
}

let hayir = document.querySelector(".hayir");
let close = document.querySelector(".close");
let overley = document.querySelector(".overley");
let evet = document.querySelector(".evet");

hayir.addEventListener("mouseenter", () => {
    hayir.style.left = `${random(0,90)}%`
    hayir.style.top = `${random(0,90)}%`
})

evet.addEventListener("click", () => {
    overley.classList.add('active')
})

hayir.addEventListener("click", () => {
    alert("adamsin🙌")
})

close.addEventListener("click", () => {
    overley.classList.remove('active')
})