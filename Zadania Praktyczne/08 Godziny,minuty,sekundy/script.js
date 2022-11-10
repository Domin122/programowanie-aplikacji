const ilosc_s = document.querySelector('#ilosc_s');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');



btn.addEventListener('click', function() {
    let c =parseInt(ilosc_s.value);
    let sekundy_cale = c%3600;
    let g = Math.floor(c/3600);
    let m = Math.floor(sekundy_cale/60);
    let s = sekundy_cale%60;
    let suma = (g+` g `+m+ ` m `+s+ ` s `);
    let wynik_tekst = ``;
    wynik_tekst += `${suma}<br> `;

    wynik.innerHTML = wynik_tekst;
});