const btn = document.querySelector(`button`)
const wynik = document.querySelector(`#wynik`)

btn.addEventListener(`click`, function () {
    let a = parseInt(document.querySelector(`#liczba_a`).value);
    wynik.innerHTML = ``;
    for (let i = 1; i <= 15; i++) {
        if (i === a) {
        wynik.innerHTML += `{ - }`
             continue;
        }
        wynik.innerHTML += " " + i;
    }

});