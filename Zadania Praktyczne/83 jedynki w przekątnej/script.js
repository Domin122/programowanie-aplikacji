const a = document.querySelector(`#liczba_a`)
const btn = document.querySelector(`button`)
const wynik = document.querySelector(`#wynik`)

btn.addEventListener(`click`, function () {
    wynik.innerHTML = ``
    for(i=1; i<=a.value ; i++){
        for(j=0; j<i; j++){
            wynik.innerHTML += `0`
        }
        wynik.innerHTML += `<br>`
    }

});