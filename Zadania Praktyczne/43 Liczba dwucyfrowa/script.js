const liczba_a = document.querySelector('#liczba_a');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');
btn.addEventListener('click', function() {
    let a = parseInt(liczba_a.value);

    if(a>9) {
        if(a % 2 === 0){
            wynik.innerHTML = `Liczba jest dwucyfrowa parzysta`;
        } else{
            wynik.innerHTML = `Liczba jest dwucyfrowa nieparzysta`;
        }
    } else{
        wynik.innerHTML = `Liczba nie jest dwucyfrowa `;
    }
});


