const liczba_x = document.querySelector('#liczba_x');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let x =parseInt(liczba_x.value);
    let suma = x**2/(1+x)**2;
    let wynik_tekst = ``;
    wynik_tekst += `${suma}<br>`;

    wynik.innerHTML = wynik_tekst;
});