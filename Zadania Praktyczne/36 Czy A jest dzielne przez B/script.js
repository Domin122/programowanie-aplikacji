let liczba_a = document.querySelector(`#liczba_a`)
let liczba_b = document.querySelector(`#liczba_b`)
let btn = document.querySelector(`button`)
let wynik = document.querySelector(`#wynik`)

btn.addEventListener(`click`, function () {
    let a = parseInt(liczba_a.value)
    let b = parseInt(liczba_b.value)

    if(b===0) {
        wynik.innerHTML = `Nie podzieli się, ponieważ b jest równe 0`
    }
    else {
        if(a%b === 0) {
            wynik.innerHTML = `Liczba a jest podzielna przez b bez reszty`
        }
        else {
            wynik.innerHTML = `Liczba a nie jest podzielna przez b bez reszty`
        }
    }

})
