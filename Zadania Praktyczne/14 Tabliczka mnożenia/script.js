const liczba_a = document.querySelector('#liczba_a');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let a =parseInt(liczba_a.value);
    let wynik_tekst = ``;
    let liczba = a;
    wynik_tekst +=`x = ${liczba}<br>`
    let mn0 = 0*a;
    wynik_tekst +=`0 x ${a} = ${mn0}<br>`
    let mn1 = 1*a;
    wynik_tekst +=`1 x ${a} = ${mn1}<br>`
    let mn2 = 2*a;
    wynik_tekst +=`2 x ${a} = ${mn2}<br>`
    let mn3 = 3*a;
    wynik_tekst +=`3 x ${a} = ${mn3}<br>`
    let mn4 = 4*a;
    wynik_tekst +=`4 x ${a} = ${mn4}<br>`
    let mn5 = 5*a;
    wynik_tekst +=`5 x ${a} = ${mn5}<br>`
    let mn6 = 6*a;
    wynik_tekst +=`6 x ${a} = ${mn6}<br>`
    let mn7 = 7*a;
    wynik_tekst +=`7 x ${a} = ${mn7}<br>`
    let mn8 = 8*a;
    wynik_tekst +=`8 x ${a} = ${mn8}<br>`
    let mn9 = 9*a;
    wynik_tekst +=`9 x ${a} = ${mn9}<br>`
    let mn10 = 10*a;
    wynik_tekst +=`10 x ${a} = ${mn10}<br>`


    wynik.innerHTML = wynik_tekst;
});