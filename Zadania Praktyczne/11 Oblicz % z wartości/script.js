const wartosc = document.querySelector('#wartosc');
const procent = document.querySelector('#procent');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let w =parseInt(wartosc.value);
    let p =parseInt(procent.value);
    let suma = w*(p/100);
    let wynik_tekst = ``;
    wynik_tekst += `${suma}<br>`;



    wynik.innerHTML = wynik_tekst;
});