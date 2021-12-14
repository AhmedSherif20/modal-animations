let modalBtn = document.querySelectorAll(".modal-btn"),
    modalBtnsArray = Array.from(modalBtn),
    modalCloseBtn = document.querySelectorAll(".modal-close-btn"),
    modalCloseBtnsArray = Array.from(modalCloseBtn)

modalBtnsArray.forEach(btn => {
    btn.onclick = e => {
        let modalTarget = e.target.getAttribute("data-target")
        document.querySelector(`${modalTarget}`).classList.add("show")
    }
})
modalCloseBtnsArray.forEach(btn => btn.onclick = e => e.target.parentElement.parentElement.parentElement.classList.remove("show"))

window.onclick = e => e.target.classList.contains("modal") ? e.target.classList.remove("show") : ""