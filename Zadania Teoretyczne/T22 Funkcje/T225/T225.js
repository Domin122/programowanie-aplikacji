const btn = document.querySelector(`button`)
const wynik = document.querySelector(`#wynik`)

btn.addEventListener(`click`, () => {
    let a = parseInt(document.querySelector(`#liczba_a`).value)
    let b = parseInt(document.querySelector(`#liczba_b`).value)

    while (a !== b) {
        if (a < b) {
            b -= a
        }
        else if (a > b) {
            a -= b
        }
    }
    wynik.innerHTML = `${a}`
})