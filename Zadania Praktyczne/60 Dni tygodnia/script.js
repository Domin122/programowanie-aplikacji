const liczba_a = document.querySelector('#liczba_a');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');
btn.addEventListener('click', function() {
    let a = parseInt(liczba_a.value);

    switch (true) {
        case (a==1):
            wynik.innerHTML = `Poniedziałek`;
            break;
        case (a==2):
            wynik.innerHTML = `Wtorek`;
            break;
        case (a==3) :
            wynik.innerHTML = `Środa`;
            break;
        case (a==4) :
            wynik.innerHTML = `Czwartek`;
            break;
        case (a==5) :
            wynik.innerHTML = `Piątek`;
            break;
        case (a==6):
            wynik.innerHTML = `Sobota`;
            break;
        case (a==7):
            wynik.innerHTML = `Niedziela`;
            break;
        default:
            wynik.innerHTML = `Podano niewłąściwą liczbę`;
    }
});