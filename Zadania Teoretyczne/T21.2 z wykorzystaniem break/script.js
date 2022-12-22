const a = document.querySelector(`#liczba_a`)
const btn = document.querySelector(`button`)
const wynik = document.querySelector(`#wynik`)

btn.addEventListener(`click`, function () {
    let a = parseInt(liczba_a.value);
    wynik.innerHTML = ` `
    var i=1, k = 1;
    do {
        var j = k * i;
        wynik.innerHTML += " " + j;
        if (j == a) break;
    } while (i++ < 30);

});