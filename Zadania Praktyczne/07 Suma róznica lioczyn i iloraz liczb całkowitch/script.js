const liczba_a = document.querySelector('#liczba_a');
const liczba_b = document.querySelector('#liczba_b');

const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let suma;
    suma = (Number(liczba_a.value) + Number(liczba_b.value));
    let roznica;
    roznica = (Number(liczba_a.value) - Number(liczba_b.value));
    let iloraz;
    iloraz = (Number(liczba_a.value) / Number(liczba_b.value));
    let iloczyn;
    iloczyn = (Number(liczba_a.value) * Number(liczba_b.value));
    let wynik_tekst = `
                        a = ${liczba_a.value} <br>
                        b = ${liczba_b.value} <br> 
                        suma = ${suma}<br>
                        roznica = ${roznica}<br>
                        iloczyn = ${iloczyn}<br>
                        iloraz = ${iloraz}<br>`;



    wynik.innerHTML = wynik_tekst;
});