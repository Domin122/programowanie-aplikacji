const liczba_a = document.querySelector('#liczba_a');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {

    let mm = 25.4;
    let milimetry;
    milimetry = (mm * Number(liczba_a.value));
    let wynik_tekst = `
    milimetry = ${milimetry}<br>
    `;

    wynik.innerHTML = wynik_tekst;
});