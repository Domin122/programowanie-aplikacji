const min= document.querySelector('#min');
const max = document.querySelector('#max');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let min =parseInt(min.value);
    let max =parseInt(max.value);
    let w1 = Math.floor(Math.random()*(max-min+1)+min);
    let w2 = Math.floor(Math.random()*(max-min+1)+min);
    let w3 = Math.floor(Math.random()*(max-min+1)+min);
    let w4 = Math.floor(Math.random()*(max-min+1)+min);
    let w5 = Math.floor(Math.random()*(max-min+1)+min);
    let suma = w1 + w2 + w3 + w4 + w5;
    let iloczyn = w1 * w2 * w3 * w4 * w5 ;
    let srednia = w1 + w2 + w3 + w4 + w5/5;
    let wynik_tekst = `
                        w1 = ${w1} <br>
                        w2 = ${w2} <br>
                        w3 = ${w3} <br>
                        w4 = ${w4} <br>
                        w5 = ${w5} <br>
                        suma = ${suma}<br>
                        srednia = ${srednia}<br>
                        iloczyn = ${iloczyn}<br>`;

    wynik.innerHTML = wynik_tekst;
});