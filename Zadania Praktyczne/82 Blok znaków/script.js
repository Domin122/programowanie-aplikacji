let a = document.querySelector(`#liczba_a`)
let b = document.querySelector(`#liczba_b`)
let btn = document.querySelector(`button`)
let wynik = document.querySelector(`#wynik`)

btn.addEventListener(`click`, function () {
    wynik.innerHTML = ``
    for(let i = 0; i < b.value; i++) {
        for(let j = 0; j < a.value; j++) {
            wynik.innerHTML += `X`
        }
        wynik.innerHTML += `<br>`
    }
})