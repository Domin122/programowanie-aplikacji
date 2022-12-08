const liczba_a = document.querySelector('#liczba_a');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');
btn.addEventListener('click', function() {
    let a = parseInt(liczba_a.value);
    switch (true) {
        case (a>89 && a<101):
            wynik.innerHTML = `Ocena: 5`;
            break;
        case (a>79 && a<90):
            wynik.innerHTML = `Ocena: 4,5`;
            break;
        case (a>69 && a<80):
            wynik.innerHTML = `Ocena: 4`;
            break;
        case (a>59 && a<70):
            wynik.innerHTML = `Ocena: 3,5`;
            break;
        case (a>49 && a<60):
            wynik.innerHTML = `Ocena: 3`;
            break;
        case (a<50):
            wynik.innerHTML = `Ocena: 2`;
            break;
    }
});